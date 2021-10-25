import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [images, setImages] = useState(Array.from(Array(25), (_, i) => i + 1));

  const rotate = () => {
    let new_images = [...images];
    let last_img = new_images.pop();
    new_images = [last_img, ...new_images];
    setImages(new_images);
  };

  useEffect(() => {
    const timer = setTimeout(() => rotate(), 500);
    return () => clearTimeout(timer);
  });

  return (
    <div className='slider'>
      {images.map((i) => (
        <img
          key={i}
          className='slider-img'
          alt={`${i}.png`}
          src={`images/${i}.png`}
        />
      ))}
    </div>
  );
};

export default Slider;
