import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Achievements from '@/components/Achievements';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Handle viewport height for mobile browsers
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="safe-top" /> {/* Safe area padding for notched devices */}
        <Hero />
        <About />
        <Programs />
        <Achievements />
        <Journey />
        <Contact />
        <div className="safe-bottom" /> {/* Safe area padding for notched devices */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;