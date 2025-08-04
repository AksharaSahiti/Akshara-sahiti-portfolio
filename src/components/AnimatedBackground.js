
import React from 'react';
import { motion } from 'framer-motion';

// Abstract floating circles background
export default function AnimatedBackground() {
  const circles = Array.from({ length: 20 });
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.3, 0] }}
          transition={{ repeat: Infinity, duration: 6 + i, delay: i * 0.3 }}
          className="absolute rounded-full bg-blue-300 dark:bg-blue-700 opacity-30"
          style={{ width: 100, height: 100 }}
        />
      ))}
    </div>
  );
}
  