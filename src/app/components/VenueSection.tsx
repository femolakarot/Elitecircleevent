import { motion } from "motion/react";
import { MapPin, Navigation, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VenueSection() {
  return (
    <section id="venue" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8491D]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559833064-6f4573ec1ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWdvcyUyME5pZ2VyaWElMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzcxNDgwMjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lagos, Nigeria"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

              {/* Scan lines */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(232,73,29,0.02) 3px, rgba(232,73,29,0.02) 6px)",
                }}
              />

              {/* Overlay info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-[#E8491D] mb-2">
                  <Navigation size={14} />
                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em" }}>
                    LAGOS, NIGERIA
                  </span>
                </div>
                <h3
                  className="text-white"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", fontWeight: 600 }}
                >
                  Cafe One Lekki
                </h3>
              </div>
            </div>

            {/* Corner accents */}
            <motion.div
              className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[#E8491D]/30"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[#E8491D]/30"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span
              className="text-[#E8491D] uppercase mb-3 block"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em" }}
            >
              Event Venue
            </span>
            <h2
              className="text-white mb-5"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 600, lineHeight: 1.2 }}
            >
              The <span className="text-[#E8491D]">Location</span>
            </h2>
            <p
              className="text-gray-400 mb-8"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.8 }}
            >
              Join us at Cafe One Lekki, a vibrant creative space in the heart of Lagos's most dynamic
              district. Located on Admiralty Way, the venue offers the perfect atmosphere for
              creative discourse and networking.
            </p>

            {/* Venue Details */}
            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, title: "Address", value: "Cafe One Lekki, Admiralty Way, Lekki Phase 1, Lagos" },
                { icon: Clock, title: "Doors Open", value: "11:00 AM WAT" },
                { icon: Users, title: "Capacity", value: "200 seats (limited availability)" },
              ].map((detail) => (
                <motion.div
                  key={detail.title}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 bg-[#111111] border border-white/5 rounded hover:border-[#E8491D]/15 transition-colors duration-300"
                >
                  <detail.icon size={16} className="text-[#E8491D] mt-0.5 shrink-0" />
                  <div>
                    <span
                      className="text-white block mb-0.5"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 500 }}
                    >
                      {detail.title}
                    </span>
                    <span
                      className="text-gray-500"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 300 }}
                    >
                      {detail.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, x: 3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#E8491D]/30 text-[#E8491D] rounded hover:bg-[#E8491D]/5 hover:border-[#E8491D]/50 transition-all duration-300"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 500 }}
            >
              <Navigation size={14} />
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
