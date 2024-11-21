import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Award } from 'lucide-react';

const Faculty = () => {
  const faculty = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Dean of Computer Science',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialization: 'Artificial Intelligence',
      awards: 'Best Researcher 2023',
      email: 'sarah.j@oxford.edu.np'
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Head of Business School',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialization: 'International Business',
      awards: 'Excellence in Teaching 2023',
      email: 'michael.c@oxford.edu.np'
    },
    {
      name: 'Dr. Emily Parker',
      position: 'Research Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialization: 'Data Science',
      awards: 'Innovation Award 2023',
      email: 'emily.p@oxford.edu.np'
    },
    {
      name: 'Prof. David Kumar',
      position: 'Department Head',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialization: 'Software Engineering',
      awards: 'Outstanding Mentor 2023',
      email: 'david.k@oxford.edu.np'
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Distinguished Faculty</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts and renowned academics who are leaders in their fields
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-end space-x-2">
                    <a href={`mailto:${member.email}`} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200">
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-900 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Award className="w-4 h-4 mr-2" />
                  {member.awards}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;