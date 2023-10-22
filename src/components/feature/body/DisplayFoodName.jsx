import React, { useState, useEffect } from 'react';

const foodNamesCss = {
    color: 'mediumvioletred',
    fontFamily: 'fantasy'
}
function DisplayFoodName() {
  const foodNames = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Taco', 'Meals', 'Icecreme', 'Chocolate'];
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFoodIndex((prevIndex) => (prevIndex + 1) % foodNames.length);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
      <p style={foodNamesCss}>{foodNames[currentFoodIndex]}</p>
  );
}

export default DisplayFoodName;
