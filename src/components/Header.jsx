import React from 'react'
import './Header.css'

function Header({ onNewChat, showNewChat }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src="/HuduAssist-Logo.png" alt="HuduAssist Logo" className="logo" />
          <div className="brand-info">
            <h1 className="brand-title">HuduAssist</h1>
            <p className="brand-subtitle">AI Assistant for Huduma Centre</p>
          </div>
        </div>
        <div className="header-actions">
          {showNewChat && (
            <button className="new-chat-button" onClick={onNewChat} title="New Chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
              </svg>
              <span>New Chat</span>
            </button>
          )}
          <div className="header-badge">
            <span className="status-dot"></span>
            <span>Online</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

