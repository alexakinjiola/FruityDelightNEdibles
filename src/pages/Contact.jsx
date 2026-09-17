import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import QuickOrderForm from "../components/QuickOrderForm";
import FaqAccordion from "../components/FaqAccordion";
import { locations, buildWhatsAppLink } from "../data/menu";
import { IconWhatsApp } from "../components/Icons";

const contactPoints = [
  { icon: "💬", label: "0806 719 1065 (WhatsApp)", href: buildWhatsAppLink("Hi Fruity Delights, I'd like to place an order.") },
  { icon: "✉️", label: "Fruitydelightsandedibles@gmail.com", href: "mailto:Fruitydelightsandedibles@gmail.com" },
  { icon: "🕒", label: "Sales from 9am daily", href: null },
  { icon: "📍", label: "Ajongolo community, Akobo-Ojurin, Ibadan", href: null },
];

export default function Contact() {
  return (
    <div>
      <section className="bg-jungle text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-mango/10" />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.16em] text-[0.72rem] font-extrabold text-mango mb-4"
            >
              Get In Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.4rem)] text-balance"
            >
              Ready to relish?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-white/75 text-[1.05rem] leading-relaxed max-w-md"
            >
              Tell us what you're craving, or ask about a package for your next event. We
              usually reply within the hour.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-9 flex flex-col gap-4"
            >
              {contactPoints.map((c) => {
                const Wrapper = c.href ? "a" : "div";
                return (
                  <Wrapper
                    key={c.label}
                    href={c.href || undefined}
                    target={c.href ? "_blank" : undefined}
                    rel={c.href ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3.5 font-semibold text-white hover:text-mango transition-colors"
                  >
                    <span className="w-11 h-11 rounded-xl bg-mango/12 border border-mango/30 flex items-center justify-center flex-shrink-0">
                      {c.icon}
                    </span>
                    {c.label}
                  </Wrapper>
                );
              })}
            </motion.div>
          </div>

          <ScrollReveal delay={0.1}>
            <QuickOrderForm />
          </ScrollReveal>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24 sm:py-28 bg-pulp">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Where We Serve"
            title="Based in Ibadan. Reaching three states."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-black/5 rounded-[20px] p-7"
              >
                <span className="w-10 h-10 rounded-full bg-zest flex items-center justify-center text-white mb-4">
                  📍
                </span>
                <h4 className="font-display text-lg text-jungle mb-1.5">{loc.title}</h4>
                <p className="text-sm text-ink-soft leading-relaxed">{loc.desc}</p>
                {loc.isBase && (
                  <span className="inline-block mt-3 text-[0.7rem] font-bold uppercase tracking-wide text-zest bg-pulp-2 px-3 py-1 rounded-full">
                    Home Base
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            eyebrow="Good to Know"
            title="Frequently asked questions"
            center
          />
          <FaqAccordion />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-jungle text-white text-center">
        <ScrollReveal className="max-w-2xl mx-auto px-6">
          <h2 className="font-display font-bold text-[clamp(1.7rem,3vw,2.3rem)] text-balance">
            Craving something fresh right now?
          </h2>
          <a
            href={buildWhatsAppLink("Hi Fruity Delights, I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-7 bg-zest hover:bg-zest-2 text-white font-bold px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(242,118,15,0.55)] transition-all hover:-translate-y-1"
          >
            <IconWhatsApp className="w-4 h-4" />
            Message Us on WhatsApp
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
}
