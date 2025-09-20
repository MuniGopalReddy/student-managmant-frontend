import { useEffect, useState } from "react";

function Banner() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-4 w-full relative">
      {/* Banner images */}
      <div className="w-full h-96 relative overflow-hidden rounded-lg shadow-md">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Banner;
