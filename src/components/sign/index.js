import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import NewComponent from './sign'

const Logo = () => {
  const bgRef = useRef()
  const [key, setKey] = useState(0)
  const [loadComponent, setLoadComponent] = useState(false)

  const handleMouseEnter = () => {
    setKey(prevKey => prevKey + 1); 
  }

  useEffect(() => {
    bgRef.current.style.opacity = 1
    setTimeout(() => { 
      setLoadComponent(true);
    }, 1000); 
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        onAnimationEnd={() => {
          bgRef.current.style.opacity = 0
        }}
        style={{ animation: 'fade-in 5s ease-in-out' }}
      />
      <div onMouseEnter={handleMouseEnter}>
        {loadComponent && <NewComponent key={key} />}
      </div>
    </div>
  )
}

export default Logo
