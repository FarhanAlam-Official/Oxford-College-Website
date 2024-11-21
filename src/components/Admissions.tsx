import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, FileText, GraduationCap } from 'lucide-react';

const Admissions = () => {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Submit Application',
      description: 'Complete the online application form with required documents'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Entrance Exam',
      description: 'Take the entrance examination on scheduled date'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Interview',
      description: 'Personal interview with faculty members'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Enrollment',
      description: 'Complete enrollment process and begin your journey'
    }
  ];

  const requirements = [
    'Completed Secondary Education with minimum 60%',
    'Valid English Proficiency Test Scores',
    'Statement of Purpose',
    'Letters of Recommendation',
    'Academic Transcripts',
    'Passport Size Photographs'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to excellence begins here. Follow our simple admission process to join our prestigious institution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Application Steps</h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Requirements</h3>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-200">
                  Apply Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;