import React, { useState } from 'react'
import './InputArea.css'

function InputArea({ onSendMessage, disabled }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSendMessage(message)
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="input-area">
      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-wrapper">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about Huduma Centre services... (Press Enter to send, Shift+Enter for new line)"
            className="message-input"
            rows="1"
            disabled={disabled}
          />
          <button
            type="submit"
            className="send-button"
            disabled={disabled || !message.trim()}
            aria-label="Send message"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </form>
      <div className="input-footer">
        <p className="footer-text">HuduAssist is here to help you with government services</p>
      </div>
    </div>
  )
}

export default InputArea

