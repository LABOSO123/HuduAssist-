import React, { useEffect, useState } from 'react'
import './SplashScreen.css'

function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    // Show splash for at least 2 seconds, then fade out
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        onComplete()
      }, 500) // Wait for fade animation
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="splash-logo-wrapper">
          {!imgError ? (
            <img 
              src="/HuduAssist-Logo.png" 
              alt="HuduAssist Logo" 
              className="splash-logo"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                display: 'block'
              }}
              onError={(e) => {
                console.error('Failed to load logo image from:', e.target.src)
                setImgError(true)
              }}
              onLoad={(e) => {
                console.log('Logo loaded successfully!', e.target.naturalWidth, 'x', e.target.naturalHeight)
              }}
            />
          ) : (
            <div className="logo-placeholder">
              <span>H</span>
            </div>
          )}
        </div>
        <h1 className="splash-title">HuduAssist</h1>
        <div className="splash-loader">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen

