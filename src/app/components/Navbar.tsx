import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import wsLogo from "figma:asset/3abd7bb38ef2137fe04ded38e67d9a3debbcc35e.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.03 }}
        >
          <img src={wsLogo} alt="Whitespace" className="w-8 h-8 rounded-full object-contain invert" />
          <span className="text-white" style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em" }}>
            Whitespace
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Speakers", "Agenda", "Venue"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="text-gray-400 hover:text-[#E8491D] transition-colors relative group"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400, letterSpacing: "0.05em" }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E8491D] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="#register"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2 bg-[#E8491D] text-white rounded hover:bg-[#d13d14] transition-colors"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 500 }}
          >
            Register Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4"
        >
          {["About", "Speakers", "Agenda", "Venue"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-[#E8491D] transition-colors"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 400 }}
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2.5 bg-[#E8491D] text-white rounded text-center hover:bg-[#d13d14] transition-colors"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 500 }}
          >
            Register Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
