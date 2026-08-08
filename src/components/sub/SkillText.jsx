import React from 'react';
import { motion } from 'motion/react';

export const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center mt-8 mb-4'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl text-primary font-bold mt-2 text-center mb-4 tracking-wide"
      >
        Skills & Technologies
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-text font-medium text-center"
      >
        Crafting modern solutions with the right tools.
      </motion.div>
    </div>
  )
}
