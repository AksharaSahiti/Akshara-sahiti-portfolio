
import React from 'react';

const projects = Array.from({ length: 6 }).map((_, i) => ({
  title: `Power BI Project ${i + 1}`,
  description: 'A sample Power BI dashboard project showcasing data visualization skills.',
  github: '#',
  image: 'https://source.unsplash.com/featured/?data',
}));

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(({ title, description, github, image }, idx) => (
          <div key={idx} className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-xl mb-2">{title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  