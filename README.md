# AI Tutoring Agent

A modern, intelligent tutoring system powered by Google's Gemini Flash 2.0 AI model. This application provides personalized educational assistance across multiple subjects with a beautiful, responsive interface.

## 🚀 Features

- **AI-Powered Tutoring**: Get instant help with homework and complex concepts
- **Multi-Subject Support**: Mathematics, Physics, Chemistry, Biology, Computer Science, Literature, History, and more
- **Grade-Level Adaptation**: Tailored responses for different educational levels
- **Interactive Chat Interface**: Real-time conversation with the AI tutor
- **Modern UI/UX**: Beautiful, responsive design built with React and Tailwind CSS
- **Code Syntax Highlighting**: Proper formatting for programming and technical content
- **Context Awareness**: AI remembers conversation context for better assistance

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code syntax highlighting

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Google Generative AI** - Gemini Flash 2.0 integration
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Rate Limiting** - API protection

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd aitutoring
   ```

2. **Install dependencies**

   ```bash
   npm run install-all
   ```

3. **Set up environment variables**

   ```bash
   cd server
   cp env.example .env
   ```

   Edit `server/.env` and add your Gemini API key:

   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Get a Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key to your `.env` file

## 🚀 Running the Application

### Development Mode

```bash
# Run both frontend and backend simultaneously
npm run dev
```

### Individual Services

```bash
# Backend only
npm run server

# Frontend only
npm run client
```

### Production Build

```bash
npm run build
```

## 🌐 Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## 📚 API Endpoints

### POST `/api/chat`

General tutoring chat endpoint.

**Request Body:**

```json
{
  "message": "Can you help me with quadratic equations?",
  "subject": "Mathematics",
  "grade": "High School (9-12)",
  "context": "Previous conversation context..."
}
```

**Response:**

```json
{
  "success": true,
  "response": "AI tutor response...",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### POST `/api/tutor/:subject`

Subject-specific tutoring endpoint.

**Request Body:**

```json
{
  "message": "Explain photosynthesis",
  "grade": "Middle School (6-8)",
  "difficulty": "Standard"
}
```

## 🎯 Usage Examples

### Mathematics

- "How do I solve quadratic equations?"
- "Can you explain the Pythagorean theorem?"
- "Help me with calculus derivatives"

### Science

- "What is the process of photosynthesis?"
- "Explain Newton's laws of motion"
- "How do chemical reactions work?"

### Programming

- "How do I write a function in Python?"
- "Explain object-oriented programming"
- "Help me debug this JavaScript code"

## 🔧 Configuration

### Environment Variables

| Variable         | Description           | Default               |
| ---------------- | --------------------- | --------------------- |
| `PORT`           | Backend server port   | 5000                  |
| `CLIENT_URL`     | Frontend URL for CORS | http://localhost:5173 |
| `GEMINI_API_KEY` | Google Gemini API key | Required              |
| `NODE_ENV`       | Environment mode      | development           |

### Customization

- **Subjects**: Edit `client/src/components/SubjectSelector.jsx` to add/remove subjects
- **Styling**: Modify `client/tailwind.config.js` for theme customization
- **AI Prompts**: Update tutoring prompts in `server/index.js`

## 🛡️ Security Features

- **Rate Limiting**: Prevents API abuse
- **CORS Protection**: Secure cross-origin requests
- **Helmet**: Security headers
- **Input Validation**: Sanitized user inputs
- **Error Handling**: Graceful error responses

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **API Key Error**

   - Ensure your Gemini API key is correctly set in `.env`
   - Verify the key has proper permissions

2. **Port Already in Use**

   - Change the port in `server/.env`
   - Kill processes using the default ports

3. **CORS Errors**

   - Check that `CLIENT_URL` matches your frontend URL
   - Ensure both services are running

4. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

## 📞 Support

For issues and questions:

- Check the troubleshooting section
- Review the API documentation
- Open an issue on GitHub

---

**Built with ❤️ using React, Node.js, and Gemini Flash 2.0**
# AI-Tutoring-Agent
# AI-Tutoring-Agent
