import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import MenuCard from "../components/MenuCard";
import { menuItems, eventMenuItems, buildWhatsAppLink } from "../data/menu";
import { IconWhatsApp } from "../components/Icons";
import grilledChicken from "../assets/grilled-chicken.jpg";
import chickenFries from "../assets/chicken-fries.jpg";

const beverages = menuItems.filter((m) => m.category === "Beverages");
const treats = menuItems.filter((m) => m.category === "Treats");

export default function Menu() {
  return (
    <div>
      <section className="bg-jungle text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-zest/10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.16em] text-[0.72rem] font-extrabold text-mango mb-4"
          >
            Our Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.4rem)] text-balance"
          >
            Six ways to relish your day.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/75 text-[1.05rem] leading-relaxed max-w-xl mx-auto"
          >
            Tap any item below for the full story — ingredients, flavour options, and a
            one-tap way to order it straight to our WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* BEVERAGES */}
      <section className="py-24 sm:py-28 bg-pulp">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Fresh Beverages"
            title="Blended, pressed and shaken fresh."
            desc="Every drink is made to order — nothing pre-batched, nothing sitting around."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beverages.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TREATS */}
      <section className="py-8 sm:py-10 bg-pulp pb-24 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Treats"
            title="Light bites that still feel indulgent."
            desc="Fresh-cut and layered daily — the perfect companion to any drink above."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {treats.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CATERING / EVENT MENU */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="For Events & Corporate Bookings"
            title="Beyond the menu — our full catering spread."
            desc="For parties, corporate functions and campus outlets, we also prepare a full finger-food lineup."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {eventMenuItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-pulp border border-black/5 rounded-[20px] p-6"
              >
                <h4 className="font-display text-lg text-jungle mb-2">{item.name}</h4>
                <p className="text-sm text-ink-soft leading-relaxed mb-3">{item.longDesc}</p>
                <p className="text-xs text-ink-soft/70">
                  <span className="font-bold text-ink">Best for:</span> {item.bestFor}
                </p>
              </motion.div>
            ))}
          </div>

          <ScrollReveal className="bg-jungle-2 rounded-[28px] p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-center overflow-hidden">
            <div className="grid grid-cols-2 gap-3 h-full">
              <img src={grilledChicken} alt="Grilled chicken" className="rounded-2xl object-cover w-full h-full max-h-56" />
              <img src={chickenFries} alt="Chicken and chips" className="rounded-2xl object-cover w-full h-full max-h-56" />
            </div>
            <div className="text-white">
              <h4 className="font-display text-2xl text-mango mb-3">Planning an event?</h4>
              <p className="text-white/78 text-[0.95rem] leading-relaxed mb-6">
                Tell us your headcount, date and location — we'll put together a package that
                covers drinks, treats and finger foods for your guests.
              </p>
              <a
                href={buildWhatsAppLink(
                  "Hi Fruity Delights, I'm planning an event and would like a catering quote. Here are the details: (date, headcount, location)"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zest hover:bg-zest-2 text-white font-bold px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(242,118,15,0.55)] transition-all hover:-translate-y-1"
              >
                <IconWhatsApp className="w-4 h-4" />
                Get a Catering Quote
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
