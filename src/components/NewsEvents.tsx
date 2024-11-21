import React from 'react';
import { Calendar } from 'lucide-react';

const NewsEvents = () => {
  const news = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Research',
      date: 'Mar 15, 2024',
      title: 'Oxford College Launches New Research Center',
      excerpt: 'State-of-the-art facility to focus on sustainable development and innovation.'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Achievement',
      date: 'Mar 12, 2024',
      title: 'Students Win International Competition',
      excerpt: 'Team of computer science students secure first place in global hackathon.'
    },
    {
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Campus',
      date: 'Mar 10, 2024',
      title: 'Annual Cultural Festival Announced',
      excerpt: 'Week-long celebration of diversity and talent starting next month.'
    }
  ];

  const events = [
    {
      date: 'Mar 20',
      title: 'Open House 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Main Campus'
    },
    {
      date: 'Mar 25',
      title: 'Guest Lecture Series',
      time: '2:00 PM - 4:00 PM',
      location: 'Auditorium'
    },
    {
      date: 'Apr 05',
      title: 'Career Fair',
      time: '9:00 AM - 5:00 PM',
      location: 'Student Center'
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Latest News</h2>
            <div className="space-y-8">
              {news.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="md:w-48 h-48 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-semibold text-blue-900">{item.category}</span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-900 text-white rounded-lg flex flex-col items-center justify-center">
                      <Calendar className="w-6 h-6 mb-1" />
                      <span className="text-sm font-semibold">{event.date}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.time}</p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-center text-blue-900 font-semibold hover:bg-blue-50 rounded-lg transition duration-200">
              View All Events →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;