import React from 'react'
import Message from './Message'
import LoadingIndicator from './LoadingIndicator'
import './ChatContainer.css'

function ChatContainer({ messages, isLoading }) {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isLoading && <LoadingIndicator />}
      </div>
    </div>
  )
}

export default ChatContainer

