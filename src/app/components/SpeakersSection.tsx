import { motion } from "motion/react";
import { Mic, Star } from "lucide-react";
import imgOluwafemi from "../../assets/3a129ec13a8990e799880530018cfa085bd0c4dd.png";
import imgTopeOni from "../../assets/84a66ce2b0e91c2cff9d001be5fe09755f39378a.png";
import imgRichardEnoch from "../../assets/91ddf75524bbd817b1084da45ed0126fd0661650.png";

const speakers = [
  {
    name: "Oluwafemi Akingbola",
    role: "Lead Creative",
    org: "Whitespace Creatorverse",
    tag: "Host",
    image: imgOluwafemi,
    bio: "A multidisciplinary Visual communicator and serial entrepreneur shaping Africa's creative-tech future through immersive design and innovation.",
  },
  {
    name: "Babatope Oni",
    role: "CTO / Co-Founder",
    org: "GICBANC",
    tag: "Speaker",
    image: imgTopeOni,
    bio: "A seasoned software architect and tech executive driving innovation, product growth, and enterprise-scale impact across fintech and mobility.",
  },
  {
    name: "Richard Enoch",
    role: "Creative Lead & Product Designer",
    org: "",
    tag: "Speaker",
    image: imgRichardEnoch,
    imageClass: "scale-[1.55] object-center opacity-90 brightness-[0.72] contrast-110 group-hover:scale-[1.65]",
    bio: "A creative lead and product designer leveraging design thinking, emerging technologies, and AI to craft impactful digital experiences.",
  },
];

export function SpeakersSection() {
  return (
    <section id="speakers" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#E8491D]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#E8491D]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-[#E8491D] uppercase mb-3 block"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em" }}
          >
            Featured Voices
          </span>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Meet the <span className="text-[#E8491D]">Speakers</span>
          </h2>
        </motion.div>

        {/* Speakers Grid — matching Figma screenshot */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative bg-[#111111] border border-white/5 rounded-lg overflow-hidden hover:border-[#E8491D]/20 transition-all duration-500"
            >
              {/* Image Area — grayscale, bottom-fading */}
              <div className="relative h-72 overflow-hidden bg-[#1a1a1a]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className={`w-full h-full object-cover object-top grayscale opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ${speaker.imageClass ?? ""}`}
                />
                {/* Bottom fade into card background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

                {/* Tag badge — positioned bottom-right of image area */}
                <div className="absolute bottom-4 right-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#E8491D] text-white rounded-sm"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 500 }}
                  >
                    {speaker.tag === "Host" ? <Mic size={12} /> : <Star size={12} />}
                    {speaker.tag}
                  </span>
                </div>
              </div>

              {/* Content area — dark bg with info */}
              <div className="p-6 relative bg-[#111111]">
                {/* Small orange accent line */}
                <div className="absolute top-0 left-6 w-10 h-[3px] bg-[#E8491D]" />

                <h3
                  className="text-white mt-2"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: 600 }}
                >
                  {speaker.name}
                </h3>
                <p
                  className="text-[#E8491D] mb-0.5"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 500 }}
                >
                  {speaker.role}
                </p>
                <p
                  className="text-gray-500 mb-4"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.03em" }}
                >
                  {speaker.org}
                </p>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.7 }}
                >
                  {speaker.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
