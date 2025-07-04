import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default SSR-safe value
  const [hasMounted, setHasMounted] = useState(false); // MOUNT FLAG — must be at top
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      text: "Amazing experience! Found the perfect car within hours. The platform is so easy to use and the customer service was outstanding. Highly recommend to anyone looking for their next vehicle.",
      avatar: "SJ",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Best car buying experience I've ever had. The search filters helped me find exactly what I was looking for, and the whole process was transparent and hassle-free.",
      avatar: "MC",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Miami, FL",
      rating: 5,
      text: "Sold my car in just 2 days! The platform connected me with serious buyers quickly. The valuation was fair and accurate. Will definitely use again.",
      avatar: "ER",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 5,
      text: "Fantastic service from start to finish. The team was professional, responsive, and made the entire car buying process stress-free. Couldn't be happier!",
      avatar: "DT",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Park",
      location: "Seattle, WA",
      rating: 5,
      text: "Outstanding platform! The detailed car listings and honest descriptions helped me make an informed decision. Great value and excellent customer support.",
      avatar: "LP",
      verified: true
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Austin, TX",
      rating: 5,
      text: "Impressed with the quality of cars and the seamless buying process. Everything was handled professionally and efficiently. Highly satisfied customer!",
      avatar: "JW",
      verified: true
    }
  ];

  // Number of cards to show at once based on screen size
    useEffect(() => {
    const getCardsToShow = () => {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };

    // Set initial cardsToShow on mount
    setCardsToShow(getCardsToShow());

    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    if (!hasMounted) return null;

    const maxIndex = Math.max(0, testimonials.length - cardsToShow);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const goToSlide = (index) => {
      setCurrentIndex(Math.min(index, maxIndex));
    };

    const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ));
    };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers 
            have to say about their experience with us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-600 group-hover:text-green-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-600 group-hover:text-green-600" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 relative group h-full">
                    {/* Quote Icon */}
                    <div className="absolute -top-3 left-6">
                      <div className="bg-green-600 rounded-full p-3 shadow-lg">
                        <Quote size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-6 flex flex-col h-full">
                      {/* Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                        {testimonial.verified && (
                          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 mb-6 leading-relaxed text-sm flex-grow">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Customer Info */}
                      <div className="flex items-center mt-auto">
                        <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold text-sm mr-4">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-green-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                50K+
              </div>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                4.9★
              </div>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                98%
              </div>
              <p className="text-gray-600 font-medium">Satisfaction Rate</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                24/7
              </div>
              <p className="text-gray-600 font-medium">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;