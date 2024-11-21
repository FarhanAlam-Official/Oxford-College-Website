import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Brain, Microscope } from 'lucide-react';

const Research = () => {
  const areas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Artificial Intelligence',
      description: 'Advancing machine learning and neural networks for real-world applications.',
      projects: ['Natural Language Processing', 'Computer Vision', 'Robotics']
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Biotechnology',
      description: 'Innovative research in genetic engineering and molecular biology.',
      projects: ['Gene Therapy', 'Vaccine Development', 'Bioinformatics']
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Business Analytics',
      description: 'Data-driven research for business decision making and market analysis.',
      projects: ['Market Prediction', 'Consumer Behavior', 'Risk Analysis']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Sciences',
      description: 'Understanding human behavior and societal patterns.',
      projects: ['Urban Development', 'Cultural Studies', 'Education Policy']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Highlights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our groundbreaking research initiatives and contributions to global knowledge
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-blue-900 mb-4">{area.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-6">{area.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Current Projects:</h4>
                <ul className="space-y-2">
                  {area.projects.map((project, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mr-2"></div>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition duration-200">
            View All Research Papers
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;