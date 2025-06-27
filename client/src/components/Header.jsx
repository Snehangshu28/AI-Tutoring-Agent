import React from 'react'
import { Brain, Github } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-primary-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI Tutoring Agent</h1>
              <p className="text-sm text-gray-600">Powered by Gemini Flash 2.0</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 