import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import wsLogo from "figma:asset/3abd7bb38ef2137fe04ded38e67d9a3debbcc35e.png";

export function Footer() {
  return (
    <footer className="relative bg-[#080808] border-t border-white/5 pt-14 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#E8491D]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={wsLogo} alt="Whitespace" className="w-8 h-8 rounded-full object-contain invert" />
              <span
                className="text-white"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em" }}
              >
                Whitespace Creatorverse
              </span>
            </div>
            <p
              className="text-gray-500 max-w-xs"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.7 }}
            >
              A community dedicated to empowering creatives with tools, knowledge, and connections for the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {["About", "Speakers", "Agenda", "Venue", "Register"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 4 }}
                  className="text-gray-500 hover:text-[#E8491D] transition-colors w-fit"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 300 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em" }}
            >
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2.5">
              <span
                className="text-gray-500"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 300 }}
              >
                hello@whitespace.io
              </span>
              <span
                className="text-gray-500"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 300 }}
              >
                Lagos, Nigeria
              </span>
              <div className="flex gap-3 mt-2">
                {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 border border-white/5 rounded text-gray-600 hover:text-[#E8491D] hover:border-[#E8491D]/20 transition-colors"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 400 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-gray-600"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 300 }}
          >
            &copy; 2026 Whitespace Creatorverse. All rights reserved.
          </span>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-600 hover:text-[#E8491D] transition-colors"
          >
            <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.08em" }}>
              Back to Top
            </span>
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
