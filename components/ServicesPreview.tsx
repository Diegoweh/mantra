"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "💻",
      color: "from-[#ceaa96] to-[#b7866f]",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces that users love",
      icon: "🎨",
      color: "from-[#b7866f] to-[#8b5641]",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
      icon: "📱",
      color: "from-[#8b5641] to-[#ceaa96]",
    },
    {
      title: "Branding",
      description: "Complete brand identity and visual strategy",
      icon: "✨",
      color: "from-[#ceaa96] to-[#8b5641]",
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns to grow your online presence",
      icon: "📊",
      color: "from-[#b7866f] to-[#ceaa96]",
    },
    {
      title: "Consulting",
      description: "Expert guidance for your digital transformation",
      icon: "🚀",
      color: "from-[#8b5641] to-[#b7866f]",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#ceaa96] font-semibold uppercase tracking-wider text-sm"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
          >
            What We{" "}
            <span className="bg-gradient-to-r from-[#ceaa96] via-[#b7866f] to-[#8b5641] bg-clip-text text-transparent">
              Offer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to your unique needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl mb-4 relative z-10"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-xl font-semibold text-white backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-[#ceaa96]/20 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">View All Services</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ceaa96]/20 via-[#b7866f]/20 to-[#8b5641]/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
