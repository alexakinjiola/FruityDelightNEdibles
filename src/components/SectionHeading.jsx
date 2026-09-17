import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  center = false,
  light = false,
  className = "",
}) {
  return (
    <ScrollReveal
      className={`max-w-xl mb-12 ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="uppercase tracking-[0.16em] text-[0.72rem] font-extrabold text-zest mb-3">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={`font-display font-bold text-[clamp(1.9rem,3.4vw,2.7rem)] text-balance ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
      {desc && (
        <p className={`mt-4 text-[1.05rem] leading-relaxed ${light ? "text-white/70" : "text-ink-soft"}`}>
          {desc}
        </p>
      )}
    </ScrollReveal>
  );
}
