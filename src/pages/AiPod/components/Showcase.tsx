import React from 'react';

const showcases = [
  {
    title: "AI Analytics Dashboard",
    description: "Real-time data visualization and insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Smart Automation",
    description: "Streamlined workflow automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Predictive Analysis",
    description: "Future-proof decision making",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800"
  }
];

export function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          AI in Action
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {showcases.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}