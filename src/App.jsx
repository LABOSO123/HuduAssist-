import React, { useState, useRef, useEffect } from 'react'
import Header from './components/Header'
import SplashScreen from './components/SplashScreen'
import WelcomeScreen from './components/WelcomeScreen'
import ChatContainer from './components/ChatContainer'
import InputArea from './components/InputArea'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showWelcome, setShowWelcome] = useState(true)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (!showWelcome) {
      scrollToBottom()
    }
  }, [messages, showWelcome])

  const handleStartChat = (initialMessage = '') => {
    setShowWelcome(false)
    
    // Add welcome message if starting fresh
    if (messages.length === 0) {
      const welcomeMessage = {
        id: Date.now(),
        type: 'ai',
        content: 'Jambo! I\'m HuduAssist, your AI assistant for Huduma Centre services. How can I help you today?',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }

    // If there's an initial message, send it
    if (initialMessage.trim()) {
      setTimeout(() => {
        handleSendMessage(initialMessage)
      }, 300)
    }
  }

  const handleQuickAction = (actionTitle) => {
    handleStartChat(`Tell me about ${actionTitle}`)
  }

  const handleSendMessage = async (message) => {
    if (!message.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    // Simulate AI response (replace with actual API call later)
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'Thank you for your question. I\'m processing your request. This will be connected to your backend API shortly.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleNewChat = () => {
    setMessages([])
    setShowWelcome(true)
  }

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <div className="app">
      <Header onNewChat={handleNewChat} showNewChat={!showWelcome} />
      {showWelcome ? (
        <WelcomeScreen 
          onStartChat={handleStartChat}
          onQuickAction={handleQuickAction}
        />
      ) : (
        <>
          <ChatContainer messages={messages} isLoading={isLoading} />
          <div ref={messagesEndRef} />
          <InputArea onSendMessage={handleSendMessage} disabled={isLoading} />
        </>
      )}
    </div>
  )
}

export default App

