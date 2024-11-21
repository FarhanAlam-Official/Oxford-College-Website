import React from 'react';
import { BookOpen, Users, Globe, Code } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Business Administration',
      description: 'Develop leadership skills and business acumen with our comprehensive BBA program.',
      duration: '4 years'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Computer Science',
      description: 'Learn cutting-edge technologies and software development practices.',
      duration: '4 years'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'International Relations',
      description: 'Understand global politics, diplomacy, and international affairs.',
      duration: '3 years'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Sciences',
      description: 'Explore human behavior, society, and cultural dynamics.',
      duration: '3 years'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of academic programs designed to prepare you for global success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <div className="text-blue-900 mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Duration: {program.duration}</span>
                <button className="text-blue-900 hover:text-blue-700 text-sm font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;