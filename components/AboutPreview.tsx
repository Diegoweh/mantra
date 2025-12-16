"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  const features = [
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions",
      icon: "✨",
    },
    {
      title: "Excellence",
      description: "Delivering quality in every detail",
      icon: "🎯",
    },
    {
      title: "Passion",
      description: "Driven by creativity and dedication",
      icon: "🔥",
    },
  ];

  return (
    <section className="py-20 px-4 my-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#ceaa96] font-semibold uppercase tracking-wider text-sm"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
            >
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-[#ceaa96] via-[#b7866f] to-[#8b5641] bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg mb-8 leading-relaxed"
            >
              We are a team of passionate creators, designers, and developers dedicated to
              transforming ideas into exceptional digital experiences. With years of expertise
              and a commitment to innovation, we bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#8b5641] via-[#b7866f] to-[#ceaa96] shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Learn More About Us</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl group cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ceaa96]/10 via-[#b7866f]/10 to-[#8b5641]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl"
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
