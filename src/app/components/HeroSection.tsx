import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import svgPaths from "../../imports/svg-1x9azbz691";
import img3DRenderBg from "figma:asset/4e685114e3f605c2602459ba39a1323ad2ba8056.png";
import imgRobotFigure from "figma:asset/9bd75428d3e464c523759e2198ffc6b8a416ebec.png";
import imgRobotHead from "figma:asset/cbe3b422a4efd26e1adf3e6f830824e8b8d28c30.png";

/* ── SVG Icons ── */

function CalendarIcon() {
  return (
    <svg className="shrink-0" width="17" height="17" viewBox="0 0 14.6043 15.3167" fill="none">
      <path d={svgPaths.p32b02380} stroke="#FF633B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06861" />
      <path d={svgPaths.p23303880} stroke="#FF633B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06861" />
      <path d={svgPaths.p3ee49d00} stroke="#FF633B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06861" />
      <path d="M0.890507 4.80874H13.7138" stroke="#FF633B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06861" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="shrink-0" width="17" height="17" viewBox="0 0 15.6709 15.6709" fill="none">
      <circle cx="7.83544" cy="7.83544" r="7.12406" stroke="#FF633B" strokeWidth="1.42278" />
      <path d={svgPaths.p13c8e200} stroke="#FF633B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06861" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="shrink-0" width="14" height="17" viewBox="0 0 12.4671 15.3167" fill="none">
      <path d={svgPaths.p192ccec0} stroke="#FF633B" strokeLinecap="round" strokeWidth="1.06861" />
      <path d={svgPaths.p29cc6a00} stroke="#FF633B" strokeWidth="1.06861" />
      <path d={svgPaths.p307039c0} stroke="#FF633B" strokeWidth="1.06861" />
    </svg>
  );
}

/* ── Floating particles ── */

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#E8491D]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── Countdown Timer ── */

function CountdownTimer() {
  const eventDate = new Date("2026-04-18T11:00:00+01:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = Math.max(0, eventDate - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="relative w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center">
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-lg border border-[#E8491D]/20 bg-[#0a0a0a]/70 backdrop-blur-sm" />
              <div className="absolute inset-0 rounded-lg bg-[#E8491D]/[0.03]" />
              <span
                className="relative text-white"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 600,
                }}
              >
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span
              className="text-gray-500 mt-1.5"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <motion.span
              className="text-[#E8491D]/40 mb-5"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: 300 }}
            >
              :
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Hero Section ── */

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const leftRobotX = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rightRobotX = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* ── Parallax Background ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={img3DRenderBg}
          alt=""
          className="absolute w-[120%] max-w-none h-auto min-h-full object-cover blur-[21px] opacity-[0.54]"
        />
      </motion.div>

      {/* ── Scroll darken overlay ── */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none z-[1]"
        style={{ opacity: overlayOpacity }}
      />

      {/* ── Floating particles ── */}
      <Particles />

      {/* ── Left robot head — floating + parallax ── */}
      <motion.div
        className="absolute -left-20 bottom-0 w-[300px] h-[300px] pointer-events-none hidden lg:block z-[2]"
        style={{ x: leftRobotX }}
        animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="-scale-y-100 rotate-180 w-full h-full">
          <img src={imgRobotHead} alt="" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* ── Right robot figures — floating + parallax ── */}
      <motion.div
        className="absolute -right-6 bottom-0 w-[300px] h-[520px] mix-blend-lighten pointer-events-none hidden lg:block z-[2]"
        style={{ x: rightRobotX }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={imgRobotFigure} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        className="absolute -right-2 top-[58%] w-[280px] h-[500px] mix-blend-lighten pointer-events-none hidden lg:block z-[2]"
        style={{ x: rightRobotX }}
        animate={{ y: [0, -18, 0], rotate: [0, -0.5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="-scale-y-100 rotate-180 w-full h-full blur-[6px]">
          <img src={imgRobotFigure} alt="" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[3]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,99,59,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,99,59,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Radial glow accents ── */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none z-[3]"
        style={{ background: "radial-gradient(circle, rgba(232,73,29,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto px-6 pt-28 pb-20"
        style={{ y: contentY }}
      >
        {/* ── Header bar ── */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center gap-2 mb-8 w-full max-w-[480px]"
        >
          <motion.div
            className="w-full h-[2px] bg-white origin-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p
            className="text-white uppercase text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(7px, 1.1vw, 10px)",
              fontWeight: 500,
              letterSpacing: "3px",
            }}
          >
            The Whitespace Event by Whitespace Creatorverse
          </p>
          <motion.div
            className="w-full h-[2px] bg-white origin-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* ── "Design and Digital Evolution" ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-[#FF643B] text-center mb-1"
        >
          Design and Digital Evolution
        </motion.p>

        {/* ── Theme badge + "AI & the" — TIGHT gap ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex items-center justify-center gap-3 leading-none"
        >
          {/* Theme badge */}
          <div className="relative px-3 py-1.5 rounded-lg flex items-center justify-center self-center">
            <div className="absolute inset-0 bg-[#1c1c1c] mix-blend-hard-light rounded-lg pointer-events-none" />
            <div className="absolute inset-[-1.5px] border-[1.5px] border-[#FF633B] rounded-[9px] pointer-events-none" />
            <span
              className="relative text-white"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(12px, 1.5vw, 17px)",
                fontWeight: 600,
                letterSpacing: "-0.05em",
              }}
            >
              Theme
            </span>
          </div>

          <h1
            className="bg-clip-text"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(48px, 8vw, 97px)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              backgroundImage: "linear-gradient(182deg, #ffffff 19%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(1.3px 1.3px 0px #be2d07) drop-shadow(0px 0.6px 0px #f8b9a9)",
            }}
          >
            AI &amp; the
          </h1>
        </motion.div>

        {/* ── "Creative" — VERY tight to "AI & the" ── */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-clip-text"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(60px, 11vw, 133px)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
            marginTop: "-0.05em",
            backgroundImage: "linear-gradient(182deg, #ffffff 19%, #999999 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(1.7px 1.7px 0px #be2d07) drop-shadow(0px 0.9px 0px #f8b9a9)",
          }}
        >
          Creative
        </motion.h1>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="text-white text-center max-w-xl mt-6 mb-8"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(13px, 1.5vw, 15px)",
            fontWeight: 500,
            lineHeight: 1.8,
          }}
        >
          As a creative, will Artificial Intelligence take your place, or you would use it to stand out in your niche?
        </motion.p>

        {/* ── Countdown Timer ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        {/* ── Event Details Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-5 mb-10"
        >
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <span
              className="text-white"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(12px, 1.4vw, 16px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
              }}
            >
              Saturday 18th April, 2026
            </span>
          </div>
          <div className="w-[2px] h-5 bg-[#fcecd5] hidden sm:block" />
          <div className="flex items-center gap-2">
            <ClockIcon />
            <span
              className="text-white"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(12px, 1.4vw, 16px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
              }}
            >
              11:00am
            </span>
          </div>
          <div className="w-[2px] h-5 bg-[#fcecd5] hidden sm:block" />
          <div className="flex items-center gap-2">
            <LocationIcon />
            <span
              className="text-white"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(12px, 1.4vw, 16px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
              }}
            >
              Cafe One Lekki, Admiralty Way, Lagos Nigeria
            </span>
          </div>
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center gap-4"
        >
          {/* Primary — pulsing glow */}
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="relative px-8 py-3.5 bg-[#E8491D] text-white rounded overflow-hidden group"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "21px",
            }}
          >
            {/* Pulsing glow ring */}
            <motion.div
              className="absolute -inset-1 rounded-lg bg-[#E8491D]/30 blur-md -z-10"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">Reserve Your Spot</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8491D] to-[#FF6B3D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3.5 border border-[#E8491D] text-white rounded hover:bg-[#E8491D]/10 transition-colors duration-300"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "21px",
            }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span
          className="text-gray-500 uppercase"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "9px", fontWeight: 400, letterSpacing: "0.15em" }}
        >
          Scroll
        </span>
        <motion.div className="w-5 h-8 border border-gray-600 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-1.5 bg-[#E8491D] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}