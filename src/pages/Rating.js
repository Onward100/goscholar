import React, { useState } from 'react';

const Rating = () => {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    if (!hovered) {
      let i = 1;
      const interval = setInterval(() => {
        setCount(i);
        i++;
        if (i > 2000) {
          clearInterval(interval);
          setHovered(true)
        }
      }, 0.5);
    }
  };

  return (
    <div
      className="rating-section"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="rating--content">
        <div className="rating" onMouseEnter={handleHover}>
          <h3>{hovered ? '2K+' : count}</h3>
          <p>Academic writing</p>
        </div>
        <div className="rating" onMouseEnter={handleHover}>
          <h3>{hovered ? '2K+' : count}</h3>
          <p>Academic writing</p>
        </div>
        <div className="rating" onMouseEnter={handleHover}>
          <h3>{hovered ? '2K+' : count}</h3>
          <p>Academic writing</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
