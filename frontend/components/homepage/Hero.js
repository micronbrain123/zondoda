"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarRentalInterface from "./CarRentalInterface ";

export default function Hero() {
  // Background images array - you can replace these with your actual car images
  const backgroundImages = [
    "/assets/hero/img-1.jpg",
    "/assets/hero/img-2.jpg",
    "/assets/hero/img-3.jpg",
    "/assets/hero/img-4.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % backgroundImages.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + backgroundImages.length) %
        backgroundImages.length
    );
  };

  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white bg-opacity-20 hover:bg-opacity-90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg text-center">
          Discover your next car today.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white mb-8 font-semibold drop-shadow-md text-center">
          Explore our wide selection and experience a smooth
          buying process with personalized support at every
          stage.
        </p>

        {/* Popular Searches */}
        <div className="mb-4 text-center">
          <h3 className="text-sm font-semibold text-white mb-2">
            Popular Searches:
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "cazcom",
              "Standard Lunch",
              "SMS",
              "Comcast",
            ].map((item) => (
              <span
                key={item}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <CarRentalInterface/>
      </div>
    </section>
  );
}
