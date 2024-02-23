'use client';

import { motion } from 'framer-motion';

export default function AnimatedText({ text }: { text: string }) {
  const textToAnimate = text.split(' ');

  return (
    <div className="text-white">
      {textToAnimate.map((word, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: i / 2,
          }}
          key={i}
        >
          {word}{' '}
        </motion.span>
      ))}
    </div>
  );
}
