import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import MenuCard from "../components/MenuCard";
import { menuItems, coreValues, healthBenefits, buildWhatsAppLink } from "../data/menu";
import { valueIcons, IconWhatsApp } from "../components/Icons";
import smoothieOrange from "../assets/smoothie-orange.jpg";
import smoothieStrawberry from "../assets/smoothie-strawberry.jpg";

const marqueeItems = ["Smoothies", "Mocktails", "Milkshakes", "Fruit Parfait", "Fresh Juices", "Fruit Salad"];
const marqueeEmoji = ["🍓", "🍹", "🥤", "🍨", "🍊", "🥗"];

export default function Home() {
  const waLink = buildWhatsAppLink("Hi Fruity Delights, I'd like to place an order.");

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-[radial-gradient(120%_90%_at_78%_8%,#1C5C3B_0%,#0F3324_55%)] text-white pt-[168px] pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center pb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-mango/15 border border-mango/35 px-4 py-2 rounded-full text-[0.72rem] uppercase tracking-[0.12em] font-extrabold text-mango mb-6"
            >
              Ibadan &middot; Osun &middot; Ogun State
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-[clamp(2.6rem,5.2vw,4.1rem)] text-white"
            >
              Bringing <span className="text-mango">Relish</span>
              <br />
              to Your Tastebuds.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-[1.14rem] leading-relaxed text-white/78 max-w-lg"
            >
              Premium finger foods and fresh fruit beverages, blended daily for individuals,
              celebrations, and corporate clients who want it fresh, healthy and
              Instagram-worthy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-zest hover:bg-zest-2 text-white font-bold px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(242,118,15,0.55)] transition-all hover:-translate-y-1"
              >
                See the Menu
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/50 hover:bg-white/10 text-white font-bold px-7 py-4 rounded-full transition-all hover:-translate-y-1"
              >
                <IconWhatsApp className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-9"
            >
              {[
                ["4+ yrs", "Serving fresh, daily"],
                ["6", "Signature drinks & treats"],
                ["3", "States we serve"],
              ].map(([n, l]) => (
                <div key={l}>
                  <b className="block font-display text-2xl text-mango">{n}</b>
                  <span className="text-[0.8rem] text-white/65">{l}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative flex justify-center items-center order-first lg:order-last">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-7 border-2 border-dashed border-mango/35 rounded-[48%_52%_55%_45%/55%_45%_55%_45%]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[380px] aspect-[1/1.12] rounded-[48%_52%_55%_45%/55%_45%_55%_45%] overflow-hidden shadow-2xl border-[6px] border-white/10"
            >
              <img src={smoothieOrange} alt="Freshly blended fruit smoothie" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute top-[6%] left-[-4%] sm:left-[-8%] bg-white text-ink px-[18px] py-3 rounded-2xl shadow-lg font-bold text-[0.85rem] flex items-center gap-2"
            >
              🍊 <span>Fresh Daily<small className="block font-semibold text-ink-soft text-[0.68rem]">No shortcuts</small></span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-[8%] right-[-4%] sm:right-[-10%] bg-white text-ink px-[18px] py-3 rounded-2xl shadow-lg font-bold text-[0.85rem] flex items-center gap-2"
            >
              ✅ <span>Hygiene First<small className="block font-semibold text-ink-soft text-[0.68rem]">Every batch</small></span>
            </motion.div>
          </div>
        </div>

        {/* marquee */}
        <div className="bg-zest text-white overflow-hidden whitespace-nowrap border-t border-white/25">
          <div className="inline-block py-3.5 animate-[scrollLeft_26s_linear_infinite]">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-hand font-bold text-2xl mx-4.5">
                {marqueeEmoji[i % marqueeItems.length]} {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 sm:py-28 bg-pulp">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          <ScrollReveal className="relative">
            <div className="relative w-full max-w-[420px] mx-auto aspect-square rounded-[58%_42%_45%_55%/45%_55%_45%_55%] overflow-hidden shadow-xl border-[6px] border-leaf/15">
              <img src={smoothieStrawberry} alt="Strawberry fruit smoothies" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-jungle text-white px-5 py-4 rounded-2xl shadow-xl max-w-[190px]">
              <b className="font-display text-2xl text-mango block">100%</b>
              <span className="text-[0.78rem] text-white/75">Fresh fruit, home-grown recipes</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="uppercase tracking-[0.16em] text-[0.72rem] font-extrabold text-zest mb-3">About Us</p>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.4vw,2.7rem)] text-ink text-balance">
              A small kitchen with a big appetite for flavour.
            </h2>
            <p className="mt-5 text-ink-soft text-[1.05rem] leading-relaxed">
              Fruity Delights &amp; Edibles is rethinking what fruit beverages and finger foods
              look like in Nigeria — from silky smoothies to grilled chicken and chips. Every
              order is made fresh and held to a high standard of hygiene, because your
              tastebuds deserve better than average.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 font-bold text-jungle hover:text-zest transition-colors"
            >
              Read our full story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Menu"
            title="Six ways to relish your day."
            desc="A quick taste of the menu — tap any card for the full details and flavour options."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.slice(0, 3).map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border-2 border-jungle text-jungle hover:bg-jungle hover:text-white font-bold px-7 py-3.5 rounded-full transition-all"
            >
              View Full Menu
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* VALUES TEASER */}
      <section className="py-24 sm:py-28 bg-jungle text-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The four things we never compromise on."
            desc="Simple principles, applied to every cup, plate and delivery."
            light
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
                  className="bg-white/5 border border-white/10 hover:border-mango/30 hover:bg-mango/10 rounded-[22px] p-6 transition-colors"
                >
                  <Icon className="w-11 h-11 text-mango mb-4" />
                  <h4 className="font-display text-lg text-white mb-1.5">{v.title}</h4>
                  <p className="text-[0.84rem] text-white/62 leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HEALTH STRIP */}
      <section className="bg-mango py-12">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-10 flex-wrap justify-between">
          <ScrollReveal>
            <h3 className="font-display text-2xl text-jungle max-w-[260px]">
              Good for your tastebuds. Better for your body.
            </h3>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3 flex-1">
            {healthBenefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="bg-jungle/10 border border-jungle/18 px-4 py-2.5 rounded-full text-[0.84rem] font-bold text-jungle"
              >
                {b}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-pulp">
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.8rem)] text-ink text-balance">
            Planning something special? Let's cater it.
          </h2>
          <p className="mt-4 text-ink-soft text-[1.05rem] max-w-xl mx-auto">
            From birthday mocktails to corporate lunch trays — tell us what you're celebrating
            and we'll bring the flavour.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-zest hover:bg-zest-2 text-white font-bold px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(242,118,15,0.55)] transition-all hover:-translate-y-1"
            >
              Get a Catering Quote
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
