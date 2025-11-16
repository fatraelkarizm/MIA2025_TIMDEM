import { useState } from "react";

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      image: "src/assets/DummyImage.png",
      title: "Warung Nasi Bu Siti",
      subtitle: '"Nasi Goreng Cita Rasa yang Khas!"'
    }
  ];
  
  return (
    <div className="relative w-full h-[401px] rounded-[30px] overflow-hidden">
      <img 
        src={slides[activeSlide].image}
        alt={slides[activeSlide].title}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/56" />
      
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <h2 className="font-bold text-[32px] leading-normal font-['Poppins']">
          {slides[activeSlide].title}
        </h2>
        <p className="italic font-medium text-[28px] leading-normal font-['Poppins']">
          {slides[activeSlide].subtitle}
        </p>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-[15px] px-[15px] py-[7px] bg-transparent rounded-[50px]">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === activeSlide 
                ? "bg-brand-teal" 
                : "bg-brand-teal/45"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
