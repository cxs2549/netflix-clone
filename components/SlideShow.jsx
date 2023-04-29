'use client'
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Slideshow = ({ heading, images }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleImageMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleImageMouseLeave = () => {
    setActiveIndex(-1);
  };

  const animatedProps = useSpring({
    width: activeIndex === -1 ? 300 : 400,
    config: { tension: 300, friction: 20 },
  });

  const overlayProps = useSpring({
    opacity: activeIndex === -1 ? 0 : 1,
    config: { tension: 300, friction: 20 },
  });

  return (
    <div>
      <h2>{heading}</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }} className='overflow-x-scroll'>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              marginRight: '10px',
              width: '300px',
              height: '200px',
              overflow: 'hidden',
            }}
            onMouseEnter={() => handleImageMouseEnter(index)}
            onMouseLeave={handleImageMouseLeave}
          >
            <animated.img
              src={image}
              style={{
                width: animatedProps.width,
                height: 'auto',
                transition: 'width 0.2s ease-in-out',
                cursor: 'pointer',
              }}
            />
            <animated.div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
                opacity: overlayProps.opacity,
              }}
            >
              Overlay Text
            </animated.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
