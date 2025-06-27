const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
console.log('env', process.env.GEMINI_API_KEY);
// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AI Tutoring Server is running' });
});

// Tutoring chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, subject, grade, context } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Create a tutoring prompt based on the context
    const tutoringPrompt = `You are an expert AI tutor. Please help the student with the following:

Subject: ${subject || 'General'}
Grade Level: ${grade || 'Any'}
Previous Context: ${context || 'None'}

Student's Question: ${message}

Please provide a clear, educational response that:
1. Directly addresses the student's question
2. Explains concepts in an age-appropriate way
3. Encourages critical thinking
4. Provides examples when helpful
5. Asks follow-up questions to ensure understanding

Keep your response concise but thorough.`;

    // Generate response using Gemini Flash 2.0
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(tutoringPrompt);
    const response = await result.response;
    const text = response.text();

    res.json({
      success: true,
      response: text,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({
      error: 'Failed to generate response',
      details: error.message,
    });
  }
});

// Subject-specific tutoring endpoint
app.post('/api/tutor/:subject', async (req, res) => {
  try {
    const { subject } = req.params;
    const { message, grade, difficulty } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const subjectPrompt = `You are an expert ${subject} tutor. Please help the student with the following:

Grade Level: ${grade || 'Any'}
Difficulty: ${difficulty || 'Standard'}

Student's Question: ${message}

Please provide a specialized ${subject} response that:
1. Uses appropriate ${subject} terminology
2. Provides step-by-step explanations
3. Includes relevant examples or formulas
4. Encourages problem-solving skills
5. Suggests practice problems if applicable

Make your response engaging and educational.`;

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(subjectPrompt);
    const response = await result.response;
    const text = response.text();

    res.json({
      success: true,
      subject: subject,
      response: text,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error in subject tutoring endpoint:', error);
    res.status(500).json({
      error: 'Failed to generate response',
      details: error.message,
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 AI Tutoring Server running on port ${PORT}`);
});
