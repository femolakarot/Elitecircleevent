import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export function RegisterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Limited seats available. Secure your place at the most anticipated creative tech event in Lagos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {!submitted ? (
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

              <form
                onSubmit={handleSubmit}
                className="relative bg-[#111111] rounded-lg p-8 md:p-10"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      className="text-gray-400 block mb-2"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.05em" }}
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your name"
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#E8491D]/50 focus:outline-none transition-all duration-300"
                        style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 300 }}
                      />
                      {focusedField === "name" && (
                        <motion.div
                          className="absolute -inset-[1px] rounded border border-[#E8491D]/30 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layoutId="focus-ring"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-gray-400 block mb-2"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.05em" }}
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="your@email.com"
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#E8491D]/50 focus:outline-none transition-all duration-300"
                        style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 300 }}
                      />
                      {focusedField === "email" && (
                        <motion.div
                          className="absolute -inset-[1px] rounded border border-[#E8491D]/30 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layoutId="focus-ring"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    className="text-gray-400 block mb-2"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.05em" }}
                  >
                    Your Role / Profession
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      onFocus={() => setFocusedField("role")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g. Graphic Designer, Developer, Content Creator"
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#E8491D]/50 focus:outline-none transition-all duration-300"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 300 }}
                    />
                    {focusedField === "role" && (
                      <motion.div
                        className="absolute -inset-[1px] rounded border border-[#E8491D]/30 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        layoutId="focus-ring"
                      />
                    )}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#E8491D] text-white rounded flex items-center justify-center gap-2 hover:bg-[#d13d14] transition-colors duration-300 group relative overflow-hidden"
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
                </motion.button>

                <p
                  className="text-gray-600 text-center mt-4"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 300 }}
                >
                  By registering, you agree to receive event updates via email.
                </p>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-[#111111] border border-[#E8491D]/20 rounded-lg p-10 text-center relative overflow-hidden"
            >
              {/* Celebratory particles */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#E8491D] rounded-full"
                  style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: [0, 1, 0], opacity: [1, 0.6, 0], y: [0, -30] }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              ))}

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-[#E8491D]/10 border border-[#E8491D]/30 flex items-center justify-center mx-auto mb-5"
              >
                <Sparkles size={24} className="text-[#E8491D]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", fontWeight: 600 }}
                >
                  You're In!
                </h3>
                <p
                  className="text-gray-400 mb-6"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.7 }}
                >
                  Thank you for registering, {formData.name}! We'll send confirmation details to {formData.email}.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", role: "" }); }}
                  className="text-[#E8491D] hover:underline"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400 }}
                >
                  Register another attendee
                </button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
