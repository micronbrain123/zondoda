// import PopularVehicles from '../components/homepage/PopularVehicles';
import WhyChooseUs from '../components/homepage/WhyChooseUs';
import Features from '../components/homepage/Features';
import Hero from '../components/homepage/Hero';
import TestimonialsSection from '../components/homepage/TestimonialsSection';
import FeaturedCars from '../components/homepage/FeaturedCars'

export default function Home() {
  return (
    <>
    
      <Hero />
      <WhyChooseUs />
      <FeaturedCars />
      {/* <PopularVehicles/> */}
      <Features />
      <TestimonialsSection />
      
    </>
  );
}
