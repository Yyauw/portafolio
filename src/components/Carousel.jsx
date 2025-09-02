import { useState, useEffect } from "react";

export default function Carousel({ images = [], interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avanzar automáticamente
  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      nextImage();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval, images]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden relative">
      <div
        className="w-full flex items-center justify-center cursor-pointer "
        onClick={nextImage}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full md:h-80 md:object-cover rounded-lg shadow-lg transition-all duration-500"
        />
      </div>

      {/* Indicadores de posición */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
