import React, { useEffect, useState } from 'react';

const StarrySky = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = 60; // Adjust the number of stars
    const starPositions = new Set();
    const newStars = [];

    for (let i = 0; i < numStars; i++) {
      let x, y;
      // Ensure x and y don't overlap
      do {
        x = Math.random() * 100; // Percentage-based for responsiveness
        y = Math.random() * 100;
      } while (starPositions.has(`${Math.round(x)},${Math.round(y)}`));

      starPositions.add(`${Math.round(x)},${Math.round(y)}`);

      newStars.push(
        <div
          key={i}
          className="star"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            opacity: Math.random() * 0.8 + 0.2, // Varying brightness
            width: `${Math.random() * 2 + 1}px`, // Small star sizes
            height: `${Math.random() * 2 + 1}px`
          }}
        />
      );
    }
    setStars(newStars);
  }, []);

  return <div className="starry-background">{stars}</div>;
};

export default StarrySky;
