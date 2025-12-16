"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    social: [
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="relative mt-20 px-4 py-8 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Glassmorphism container */}
        <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl px-6 py-8 md:px-12 md:py-12">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ceaa96]/10 via-[#b7866f]/10 to-[#8b5641]/10 rounded-2xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ceaa96] via-[#b7866f] to-[#8b5641] bg-clip-text text-transparent mb-4">
                  Mantra
                </h3>
                <p className="text-white/70 max-w-sm mb-6">
                  Crafting exceptional digital experiences with elegance and innovation.
                </p>
                <div className="flex gap-4">
                  {links.social.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ceaa96]/20 transition-all duration-300"
                    >
                      {link.label[0]}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Company Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {links.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Legal Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {links.legal.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"
          />

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60"
          >
            <p>© {currentYear} Mantra. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with{" "}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#ceaa96]"
              >
                ♥
              </motion.span>{" "}
              by Mantra Team
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
