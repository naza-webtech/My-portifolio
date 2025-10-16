import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Clock } from 'lucide-react';

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/MUSAPASSPORT.jpg" 
                  alt="Eng. Mussa Aloyce - Professional Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-pulse"></div>
              
              {/* Smart Clock Display */}
              <div className="absolute -left-20 sm:-left-24 lg:-left-28 top-1/2 transform -translate-y-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-4 rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-white animate-pulse" />
                    <span className="text-white text-xs font-semibold">LIVE</span>
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-bold font-mono tracking-wider">
                      {formatTime(currentTime)}
                    </div>
                    <div className="text-xs opacity-90 mt-1">
                      {formatDate(currentTime)}
                    </div>
                  </div>
                </div>
                {/* Clock pulse effect */}
                <div className="absolute inset-0 bg-blue-400/30 rounded-2xl animate-ping"></div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Eng. Mussa Aloyce
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate software developer crafting innovative digital solutions 
            and building the future through code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Learn More About Me
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200">
              View My Work
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a 
              href="mailto:mussaaloyce99@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
            <a 
              href="https://github.com/naza-webtech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:scale-110 transform"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mussa-aloyce-032049261/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-gray-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;