import React from 'react';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import FeaturesSection from './Components/FeatureSection';
import BenefitPage from './Components/BenefitPage';
import DemoToday from './Components/DemoToday';
import CountdownTimerPage from './Components/CountdownTimerPage';
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer';




function App() {
  const scrollToSection = (id) => {
    console.log('ID', id);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - element.offsetHeight * 0;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header>
        <Navbar onNavigate={scrollToSection} />
      </header>

      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='featuresSection'>
        <FeaturesSection />
      </div>
      <div id='benefitPage'>
        <BenefitPage />
      </div>
      <div id='demoToday'>
        <DemoToday />
      </div>
      <div id='CountdownTimerPage'>
        <CountdownTimerPage />
      </div>
      <div id='testimonial'>
        <Testimonial />
      </div>
   <Footer/>
    </>
  );
}

export default App;
