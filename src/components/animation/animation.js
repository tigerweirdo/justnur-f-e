import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import squirrel from "../../assets/squirrel.json";
import './animation.css';

const Animation = () => {
  const initialSize = 100;
  const [state, setState] = useState({
    position: -initialSize,
    direction: 1,
    waiting: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.waiting) return;

      let newPosition = state.position + state.direction * 5;
      
      if (newPosition > document.documentElement.clientWidth && state.direction === 1) {
        setState(prevState => ({
          ...prevState,
          waiting: true,
        }));
        setTimeout(() => {
          setState({
            position: document.documentElement.clientWidth,
            direction: -1,
            waiting: false,
          });
        }, Math.random() * 2000 + 1000);
      } else if (newPosition < -initialSize && state.direction === -1) {
        setState(prevState => ({
          ...prevState,
          waiting: true,
        }));
        setTimeout(() => {
          setState({
            position: -initialSize,
            direction: 1,
            waiting: false,
          });
        }, Math.random() * 2000 + 1000);
      } else {
        setState(prevState => ({
          ...prevState,
          position: newPosition,
        }));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [state, initialSize]);

  return (
    <div className="animation-container">
      <div 
        className="squirrel" 
        style={{ 
          position: "absolute",
          transform: `translateX(${state.position}px) scaleX(${state.direction})`,
          width: `${initialSize}px`,
          height: 'auto'
        }}
      >
        <Lottie animationData={squirrel} />
      </div>
    </div>
  );
};

export default Animation;
