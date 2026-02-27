import { motion } from "motion/react";
import { Cpu, Palette, Lightbulb, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI in Creative Workflows",
    description: "Explore how artificial intelligence is reshaping the tools and processes creatives use daily.",
  },
  {
    icon: Palette,
    title: "Design Evolution",
    description: "Understand how design thinking evolves alongside technology and digital transformation.",
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description: "Discover strategies to leverage AI as a creative partner, not a replacement.",
  },
  {
    icon: Zap,
    title: "Future-Proof Skills",
    description: "Learn the skills and mindsets that will keep creatives relevant in the AI era.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#E8491D]/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#E8491D]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#E8491D] uppercase mb-3 block"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em" }}
          >
            About the Event
          </motion.span>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Where Creativity Meets
            <span className="text-[#E8491D]"> Technology</span>
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.8 }}
          >
            The Whitespace Event by Whitespace Creatorverse brings together visionaries, designers, and technologists
            to explore the intersection of AI and human creativity. Join us for an immersive experience that
            will challenge your perspective on the future of creative work.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 bg-[#111111] border border-white/5 rounded hover:border-[#E8491D]/25 transition-all duration-500"
            >
              {/* Hover glow behind card */}
              <div className="absolute -inset-[1px] rounded bg-gradient-to-b from-[#E8491D]/0 to-[#E8491D]/0 group-hover:from-[#E8491D]/10 group-hover:to-transparent transition-all duration-500 -z-10 blur-xl opacity-0 group-hover:opacity-100" />

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center mb-4 border border-[#E8491D]/20 rounded bg-[#E8491D]/5 group-hover:bg-[#E8491D]/15 group-hover:border-[#E8491D]/40 transition-all duration-500">
                <feature.icon size={18} className="text-[#E8491D]" />
              </div>

              <h3
                className="text-white mb-2 group-hover:text-[#E8491D] transition-colors duration-300"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 500 }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-500"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.7 }}
              >
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E8491D] to-[#FF6B3D] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}