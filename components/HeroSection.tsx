"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo con animación */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
          className="mb-12 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/heroLogo.svg"
              alt="Mantra Logo"
              width={200}
              height={200}
              className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Título principal con animación de texto */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r text-white bg-clip-text"
          >
            Welcome to
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white"
          >
            Mantra
          </motion.span>
        </motion.h1>

        {/* Subtítulo con efecto de aparición */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-2xl mx-auto"
        >
          Experience the perfect blend of elegance and innovation
        </motion.p>

        {/* Botones CTA con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#8b5641] via-[#b7866f] to-[#ceaa96] shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold text-white backdrop-blur-xl bg-black/40 border border-white/20 hover:bg-white/50 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Elementos decorativos animados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ceaa96]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b7866f]/20 rounded-full blur-3xl"
          />
        </div>
      </div>

      
    </section>
  );
}
