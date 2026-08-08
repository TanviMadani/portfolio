import React from 'react'
import { motion } from 'motion/react'

export const SkillDataProvider = ({ src, name, index }) => {
  const animationDelay = 0.05; // Quick delay sequence
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * animationDelay, duration: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-3"
    >
      <div className="skills-box flex items-center justify-center w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] p-2 relative bg-[var(--background)]">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={src}
          alt={name}
          className="object-contain w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(0,191,255,0.8)] transition-all duration-300"
        />
      </div>
      <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-center group-hover:text-primary transition-colors duration-300 w-full truncate">
        {name}
      </span>
    </motion.div>
  )
}
