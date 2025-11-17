import React from 'react'
import './Message.css'

function Message({ message }) {
  const isUser = message.type === 'user'
  const time = new Date(message.timestamp).toLocaleTimeString('en-KE', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className={`message ${isUser ? 'message-user' : 'message-ai'}`}>
      <div className="message-content">
        {!isUser && (
          <div className="message-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
            </svg>
          </div>
        )}
        <div className="message-bubble">
          <p className="message-text">{message.content}</p>
          <span className="message-time">{time}</span>
        </div>
        {isUser && (
          <div className="message-avatar user-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export default Message

