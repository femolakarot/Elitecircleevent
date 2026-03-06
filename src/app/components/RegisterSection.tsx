import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function RegisterSection() {
  return (
    <section id="register" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      {/* Background accents */}
      <motion.div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,73,29,0.04) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,73,29,0.03) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 73, 29, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 73, 29, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="text-[#E8491D] uppercase mb-3 block"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em" }}
          >
            Join Us
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Reserve Your <span className="text-[#E8491D]">Spot</span>
          </h2>
          <p
            className="text-gray-400"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.7 }}
          >
            Limited to 100 seats. Secure your place at the most anticipated creative tech event in Lagos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] rounded-lg overflow-hidden">
              <motion.div
                className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, #E8491D 10%, transparent 20%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[1px] bg-[#111111] rounded-lg" />
            </div>

            <div className="relative bg-[#111111] rounded-lg p-10 md:p-14 flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 }}
                className="w-16 h-16 rounded-full bg-[#E8491D]/10 border border-[#E8491D]/30 flex items-center justify-center mb-6"
              >
                <Sparkles size={24} className="text-[#E8491D]" />
              </motion.div>

              <h3
                className="text-white mb-3"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", fontWeight: 600 }}
              >
                Ready to Join?
              </h3>
              <p
                className="text-gray-400 mb-8 max-w-md"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.7 }}
              >
                Click below to register on our event page and secure your seat at AI & the Creative.
              </p>

              <motion.a
                href="https://luma.com/t8ej2ur6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#E8491D] text-white rounded flex items-center justify-center gap-2 hover:bg-[#d13d14] transition-colors duration-300 group relative overflow-hidden"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 500 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                />
                <span className="relative z-10">Register Now</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <p
                className="text-gray-600 text-center mt-5"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 300 }}
              >
                You'll be redirected to our registration page on Luma.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
