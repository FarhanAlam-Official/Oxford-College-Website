import React from 'react';
import { Play } from 'lucide-react';

const CampusLife = () => {
  const images = [
    'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Campus Life at Oxford</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience a vibrant community where learning meets life, and friendships last forever
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative h-64 overflow-hidden rounded-xl"
            >
              <img 
                src={image}
                alt={`Campus life ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <button className="flex items-center text-sm font-semibold">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Story
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Student Clubs', count: '30+' },
            { title: 'Sports Teams', count: '12' },
            { title: 'Annual Events', count: '50+' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.count}</div>
              <div className="text-gray-300">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLife;