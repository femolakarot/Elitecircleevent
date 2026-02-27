import { motion } from "motion/react";
import { Clock, Mic2, PanelTop, Coffee, Wrench, Users } from "lucide-react";

const agenda = [
  { time: "11:00 AM", title: "Doors Open & Networking", description: "Arrive, connect with fellow creatives, and get settled.", type: "general", icon: Users },
  { time: "11:30 AM", title: "Opening Keynote: The Creative's Dilemma", description: "Oluwafemi sets the stage for the conversation about AI's role in creative industries.", type: "keynote", icon: Mic2 },
  { time: "12:15 PM", title: "AI Tools for Creatives: A Live Demo", description: "Tope Oni showcases cutting-edge AI tools transforming design, writing, and content creation.", type: "talk", icon: Wrench },
  { time: "1:00 PM", title: "Panel: Will AI Replace Creatives?", description: "An open discussion featuring diverse perspectives from designers, developers, and AI experts.", type: "panel", icon: PanelTop },
  { time: "2:00 PM", title: "Lunch & Creative Showcase", description: "Enjoy refreshments while exploring creative works by local digital artists.", type: "break", icon: Coffee },
  { time: "3:00 PM", title: "Workshop: Future-Proofing Your Craft", description: "Hands-on session on integrating AI into your creative workflow effectively.", type: "workshop", icon: Wrench },
  { time: "4:30 PM", title: "Closing Remarks & Networking", description: "Final thoughts, community building, and next steps for the Whitespace movement.", type: "general", icon: Users },
];

export function AgendaSection() {
  return (
    <section id="agenda" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#E8491D]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
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
            Event Schedule
          </span>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            The <span className="text-[#E8491D]">Agenda</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical glowing line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-[1px]">
            <div className="w-full h-full bg-white/5" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#E8491D] to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          <div className="flex flex-col gap-2">
            {agenda.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.time + item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative flex gap-5 pl-12 md:pl-14 py-5"
                >
                  {/* Dot on timeline */}
                  <motion.div
                    className="absolute left-[14px] md:left-[18px] top-7 w-3 h-3 rounded-full border-2 border-[#E8491D] bg-[#0d0d0d] z-10"
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
                  />

                  {/* Content card */}
                  <div className="flex-1 p-5 bg-[#111111]/60 border border-white/[0.04] rounded-lg group-hover:border-[#E8491D]/15 group-hover:bg-[#111111] transition-all duration-500">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded bg-[#E8491D]/10 flex items-center justify-center shrink-0">
                        <Icon size={13} className="text-[#E8491D]" />
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock size={11} />
                        <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 400 }}>
                          {item.time}
                        </span>
                      </div>
                    </div>
                    <h3
                      className="text-white group-hover:text-[#E8491D] transition-colors duration-300"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 500 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-500 mt-1"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.6 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
