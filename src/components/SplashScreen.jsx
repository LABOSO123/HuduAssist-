import React, { useEffect, useState } from 'react'
import './SplashScreen.css'

function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false)

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
          <img 
            src="/HuduAssist Logo.png" 
            alt="HuduAssist Logo" 
            className="splash-logo" 
          />
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

