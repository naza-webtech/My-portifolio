import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Full-Stack Development",
      description: "Expertise in both frontend and backend technologies"
    },
    {
      icon: <Database className="w-8 h-8 text-teal-600" />,
      title: "Database Management",
      description: "Efficient data modeling and database optimization"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Web Applications",
      description: "Modern, responsive web applications"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile Development",
      description: "Cross-platform mobile solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building the Future Through Code
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm Eng. Mussa Aloyce, a dedicated software developer based in Dar es Salaam, Tanzania. 
              With a strong foundation in engineering and a passion for technology, I specialize in 
              creating robust, scalable software solutions that solve real-world problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in software development has been driven by curiosity and a desire to 
              continuously learn and adapt to new technologies. I believe in writing clean, 
              maintainable code and following best practices to deliver exceptional results.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Facts</h4>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Location:</strong> Dar es Salaam, Tanzania</li>
                <li><strong>Email:</strong> mussaaloyce99@gmail.com</li>
                <li><strong>Phone:</strong> +255 766 207 423</li>
                <li><strong>Focus:</strong> Full-Stack Development</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;