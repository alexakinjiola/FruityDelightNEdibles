import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { coreValues } from "../data/menu";
import { valueIcons } from "../components/Icons";
import sandwich from "../assets/sandwich.jpg";
import grilledChicken from "../assets/grilled-chicken.jpg";

const pillars = [
  {
    label: "Objective",
    title: "Foremost & fresh",
    body: "To be the go-to name for healthy, mouth-watering fruit drinks and finger foods — tailored to our customers, hygiene never optional.",
  },
  {
    label: "Mission",
    title: "Made with care",
    body: "Freshly prepared beverages and finger foods from well-curated, home-grown recipes — bringing relish to every tastebud.",
  },
  {
    label: "Vision",
    title: "Africa's go-to",
    body: "To become Africa's destination for quality fruit beverages, appetizers and finger foods — known for excellent service.",
  },
];

const timeline = [
  { year: "Year 1", text: "Started small in Ibadan with a handful of smoothie and juice flavours." },
  { year: "Year 2–3", text: "Grew into full finger-food catering — grilled chicken, sandwiches, parfaits and more." },
  { year: "Year 4+", text: "Now serving individuals, events and corporate clients across Oyo, Osun and Ogun State." },
  { year: "Today", text: "Working towards outlets at university campuses, starting conversations with school communities." },
];

export default function About() {
  return (
    <div>
      {/* HEADER */}
      <section className="bg-jungle text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-mango/10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.16em] text-[0.72rem] font-extrabold text-mango mb-4"
          >
            About Fruity Delights &amp; Edibles
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.4rem)] text-balance"
          >
            A small kitchen with a big appetite for flavour.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-white/75 text-[1.05rem] leading-relaxed max-w-2xl mx-auto"
          >
            Fruity Delights &amp; Edibles is rethinking what fruit beverages and finger foods
            look like in Nigeria — through offerings like smoothies, grilled chicken, parfaits,
            milkshakes, mocktails and sandwiches, all built around quality and hygiene.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 sm:py-28 bg-pulp">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <div className="rounded-[28px] overflow-hidden shadow-xl">
              <img src={sandwich} alt="Loaded sandwich" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="uppercase tracking-[0.16em] text-[0.72rem] font-extrabold text-zest mb-3">Our Story</p>
            <h2 className="font-display font-bold text-[clamp(1.7rem,3vw,2.3rem)] text-ink text-balance">
              From a small outlet to a name people trust for events.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              What started as a small outlet in Ibadan has grown into a name trusted for
              individual orders, celebrations and corporate bookings across the South-West —
              without ever losing the home-kitchen touch that got us here. For more than four
              years, we've kept our day-to-day operations aligned with standard procedures,
              committed to delivering exactly what's promised.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We're currently in conversation with university communities to bring our
              beverages and finger foods closer to campus life — starting with a proposed
              outlet near a university cafeteria, where production and logistics would remain
              fully ours to manage.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Objective, mission and vision."
            desc="Three statements that shape every decision — from what's on the menu to how it's delivered."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-pulp border border-black/5 rounded-[22px] p-8"
              >
                <p className="uppercase tracking-[0.16em] text-[0.68rem] font-extrabold text-zest mb-3">{p.label}</p>
                <h4 className="font-display text-xl text-jungle mb-3">{p.title}</h4>
                <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 sm:py-28 bg-jungle text-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Core Values"
            title="The four things we never compromise on."
            light
            center
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((v, i) => {
              const Icon = valueIcons[v.icon];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/5 border border-white/10 hover:border-mango/30 hover:bg-mango/10 rounded-[22px] p-6 transition-colors text-center"
                >
                  <Icon className="w-11 h-11 text-mango mb-4 mx-auto" />
                  <h4 className="font-display text-lg text-white mb-1.5">{v.title}</h4>
                  <p className="text-[0.84rem] text-white/62 leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 sm:py-28 bg-pulp">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Journey"
            title="Four years of getting fresher, not bigger for the sake of it."
            center
          />
          <div className="relative pl-8 border-l-2 border-zest/30">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-zest border-4 border-pulp" />
                <p className="font-display text-lg text-jungle font-bold mb-1">{t.year}</p>
                <p className="text-ink-soft text-sm leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFICATION / CTA */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <p className="uppercase tracking-[0.16em] text-[0.72rem] font-extrabold text-zest mb-3">
              Why Partner With Us
            </p>
            <h2 className="font-display font-bold text-[clamp(1.7rem,3vw,2.3rem)] text-ink text-balance">
              Reliable enough to build your event around.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              We're already delivering the same quality of service in multiple locations
              across the South-West, and we hold ourselves to standard operating procedures on
              every single order — whether it's one smoothie or a hundred plates for a
              corporate function.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-7 bg-zest hover:bg-zest-2 text-white font-bold px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(242,118,15,0.55)] transition-all hover:-translate-y-1"
            >
              Talk to Us About Your Event
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-[28px] overflow-hidden shadow-xl">
              <img src={grilledChicken} alt="Grilled chicken" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
