
import React from 'react';

export default function About() {
  const timelineItems = [
    { year: '2020 - Present', title: 'Business Analyst', description: 'Working at XYZ Inc., specializing in Power BI dashboards and data analysis.' },
    { year: '2018 - 2020', title: 'Project Coordinator', description: 'Managed multiple cross-functional teams to deliver projects on time.' },
    { year: '2015 - 2018', title: 'Certified Business Analyst', description: 'Earned CBAP certification and completed workshops on Agile methodologies.' },
  ];

  const certifications = [
    'Certified Business Analysis Professional (CBAP)',
    'Agile Project Management Certification',
    'Power BI Data Analyst Certificate'
  ];

  return (
    <section className="prose max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <p>
        I am a passionate Business Analyst and Project Coordinator with experience in data analysis, visualization, and process improvement. I enjoy using Power BI and other tools to transform raw data into actionable business insights.
      </p>
      <h2 className="mt-10 mb-4 text-2xl font-semibold">Work Experience & Education Timeline</h2>
      <ul className="border-l-4 border-blue-500 ml-6 mb-8">
        {timelineItems.map(({ year, title, description }, idx) => (
          <li key={idx} className="mb-6 pl-4">
            <span className="font-semibold text-blue-600">{year}</span>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
      <h2 className="mt-10 mb-4 text-2xl font-semibold">Certifications</h2>
      <ul className="list-disc list-inside">
        {certifications.map((cert, idx) => (
          <li key={idx}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}
  