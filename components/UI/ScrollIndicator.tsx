"use client"
import { motion } from 'framer-motion'
import React from 'react'

const ScrollIndicator = () => {
  return (
    <>
    {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 "
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
      </>
  )
}

export default ScrollIndicator