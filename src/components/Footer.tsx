import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Mussa<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Software Developer passionate about creating innovative solutions 
              and building meaningful digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Dar es Salaam, Tanzania</li>
              <li>mussaaloyce99@gmail.com</li>
              <li>+255 766 207 423</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Eng. Mussa Aloyce</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;