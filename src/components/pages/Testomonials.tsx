// import React from 'react';
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      program: "Computer Science",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      quote:
        "The facultys dedication and cutting-edge curriculum have prepared me exceptionally well for my career in tech.",
      company: "Software Engineer at Google",
    },
    {
      name: "Priya Patel",
      program: "Business Administration",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      quote:
        "Oxford College provided me with real-world business exposure and networking opportunities that were invaluable.",
      company: "Management Consultant at Deloitte",
    },
    {
      name: "Raj Kumar",
      program: "Data Science",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      quote:
        "The research opportunities and mentorship I received here shaped my career in data science.",
      company: "Data Scientist at Microsoft",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Hear from our alumni about their journey at Oxford College
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 relative"
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.program}, {testimonial.year}
                  </p>
                </div>
              </div>

              <blockquote className="text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>

              <p className="text-sm font-medium text-blue-900">
                {testimonial.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
