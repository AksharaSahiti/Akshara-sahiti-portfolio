
import React from 'react';
import { AcademicCapIcon, ChartBarIcon, PuzzlePieceIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';

const skills = [
  { icon: ChartBarIcon, name: 'Data Analysis' },
  { icon: PresentationChartBarIcon, name: 'Power BI' },
  { icon: AcademicCapIcon, name: 'Business Process Modeling' },
  { icon: PuzzlePieceIcon, name: 'Problem Solving' },
  { icon: ChartBarIcon, name: 'Requirements Gathering' },
  { icon: PresentationChartBarIcon, name: 'Project Management' },
];

export default function Skills() {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map(({ icon: Icon, name }, idx) => (
          <div key={idx} className="flex items-center space-x-4 p-4 border rounded-lg shadow hover:shadow-lg transition">
            <Icon className="h-10 w-10 text-blue-600" />
            <span className="text-lg font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
  