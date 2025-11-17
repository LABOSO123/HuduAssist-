import React from 'react'
import logo from '../../HuduAssist Logo.png'
import './WelcomeScreen.css'

function WelcomeScreen({ onStartChat, onQuickAction }) {
  const quickActions = [
    {
      id: 1,
      title: 'ID Card Services',
      description: 'Get help with National ID applications and renewals',
      icon: '🆔'
    },
    {
      id: 2,
      title: 'Passport Services',
      description: 'Information about passport applications and requirements',
      icon: '📘'
    },
    {
      id: 3,
      title: 'Birth Certificate',
      description: 'Help with birth certificate applications and replacements',
      icon: '📄'
    },
    {
      id: 4,
      title: 'Business Registration',
      description: 'Guidance on registering your business',
      icon: '🏢'
    },
    {
      id: 5,
      title: 'NSSF & NHIF',
      description: 'Social security and health insurance information',
      icon: '🏥'
    },
    {
      id: 6,
      title: 'General Information',
      description: 'Ask about any Huduma Centre service',
      icon: '💬'
    }
  ]

  const suggestedPrompts = [
    'How do I apply for a National ID?',
    'What documents do I need for a passport?',
    'Where is the nearest Huduma Centre?',
    'How do I replace a lost birth certificate?'
  ]

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="logo-section">
          <div className="logo-wrapper">
            <img src={logo} alt="HuduAssist Logo" className="welcome-logo" />
          </div>
          <h1 className="welcome-title">HuduAssist</h1>
          <p className="welcome-subtitle">Your AI Assistant for Huduma Centre Services</p>
          <p className="welcome-description">
            Get instant help with government services. Ask me anything about Huduma Centre!
          </p>
        </div>

        <div className="quick-actions-section">
          <h2 className="section-title">Popular Services</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action) => (
              <button
                key={action.id}
                className="quick-action-card"
                onClick={() => onQuickAction(action.title)}
              >
                <span className="action-icon">{action.icon}</span>
                <div className="action-content">
                  <h3 className="action-title">{action.title}</h3>
                  <p className="action-description">{action.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="suggested-prompts-section">
          <h2 className="section-title">Try asking...</h2>
          <div className="suggested-prompts">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                className="prompt-button"
                onClick={() => onStartChat(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="welcome-footer">
          <button className="start-chat-button" onClick={() => onStartChat('')}>
            Start Chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen

