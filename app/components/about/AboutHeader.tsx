'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutHeader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="pt-32 pb-16 px-6 bg-toolnest-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-toolnest-text mb-6"
            variants={itemVariants}
          >
            About GrockTool
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-toolnest-text/80 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Your all-in-one smart tool directory.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeader;