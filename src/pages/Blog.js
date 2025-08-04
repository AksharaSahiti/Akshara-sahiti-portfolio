
import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center mb-4 shadow-lg"
      >
        <span role="img" aria-label="construction worker" style={{ fontSize: 60 }}>
          👷‍♂️
        </span>
      </motion.div>
      <p className="text-lg font-bold text-gray-700 dark:text-gray-300">Blog Under Construction!</p>
      <p className="text-gray-600 dark:text-gray-400">Check back soon.</p>
    </div>
  );
}
  