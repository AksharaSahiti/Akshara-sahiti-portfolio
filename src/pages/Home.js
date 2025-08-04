
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <img
        src="/assets/profilepic.jpg"
        alt="Akshara Sahiti"
        className="rounded-full w-40 h-40 object-cover shadow-lg mb-6"
      />
      <h1 className="text-5xl font-extrabold text-blue-700 mb-2">
        Akshara Sahiti
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
        Business Analyst and Project Coordinator
      </h2>
      <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-300">
        I am a dynamic <b>Business Analyst and Project Coordinator</b> driven by data, insights, and a passion for solving business challenges. With experience delivering actionable solutions through Power BI, requirements documentation, and cross-functional teamwork, I bridge the gap between stakeholders and technical teams to drive measurable success.
      </p>
    </main>
  );
}
  