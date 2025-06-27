import React, { useState, useRef, useEffect } from 'react'
import ChatInterface from './components/ChatInterface'
import Header from './components/Header'
import SubjectSelector from './components/SubjectSelector'
import { Brain, BookOpen, Lightbulb, Users } from 'lucide-react'

function App() {
  const [selectedSubject, setSelectedSubject] = useState('General')
  const [grade, setGrade] = useState('Any')
  const [showWelcome, setShowWelcome] = useState(true)

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Get personalized explanations and step-by-step guidance from our advanced AI tutor.'
    },
    {
      icon: BookOpen,
      title: 'Multi-Subject Support',
      description: 'Covering math, science, literature, history, and more with specialized expertise.'
    },
    {
      icon: Lightbulb,
      title: 'Interactive Learning',
      description: 'Engage in dynamic conversations that adapt to your learning style and pace.'
    },
    {
      icon: Users,
      title: 'Student-Focused',
      description: 'Designed specifically for students of all ages and skill levels.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {showWelcome ? (
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Your Personal
              <span className="text-primary-600 block">AI Tutor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant help with homework, understand complex concepts, and learn at your own pace with our intelligent tutoring system powered by Gemini Flash 2.0.
            </p>
            <button 
              onClick={() => setShowWelcome(false)}
              className="btn-primary text-lg px-8 py-3"
            >
              Start Learning Now
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Quick Start */}
          <div className="card max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Start</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Your Subject</h3>
                <SubjectSelector 
                  selectedSubject={selectedSubject}
                  onSubjectChange={setSelectedSubject}
                  grade={grade}
                  onGradeChange={setGrade}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Learn?</h3>
                <p className="text-gray-600 mb-4">
                  Select your subject and grade level above, then click "Start Learning" to begin your personalized tutoring session.
                </p>
                <button 
                  onClick={() => setShowWelcome(false)}
                  className="btn-primary w-full"
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ChatInterface 
          selectedSubject={selectedSubject}
          grade={grade}
          onBack={() => setShowWelcome(true)}
        />
      )}
    </div>
  )
}

export default App 