import React, { useState, useEffect } from 'react';

const SLIDE_INTERVAL = 2000; // Interval between slides in milliseconds

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [currentSlide, images]);

  return (
    <div>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
    </div>
  );
}

export default Slideshow;
