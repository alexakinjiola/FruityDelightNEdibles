import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import smoothieOrange from "../assets/smoothie-orange.jpg";
import smoothieStrawberry from "../assets/smoothie-strawberry.jpg";
import sandwich from "../assets/sandwich.jpg";
import grilledChicken from "../assets/grilled-chicken.jpg";
import chickenFries from "../assets/chicken-fries.jpg";
import chickenWings from "../assets/chicken-wings.jpg";

const photos = [
  { src: smoothieOrange, alt: "Fresh orange smoothie", caption: "Fresh Orange Smoothie", span: "sm:col-span-3 sm:row-span-3" },
  { src: smoothieStrawberry, alt: "Strawberry smoothies", caption: "Strawberry Smoothie Duo", span: "sm:col-span-3 sm:row-span-2" },
  { src: sandwich, alt: "Loaded sandwich", caption: "Loaded Sandwich", span: "sm:col-span-3 sm:row-span-2" },
  { src: grilledChicken, alt: "Grilled chicken", caption: "Chargrilled Chicken", span: "sm:col-span-2 sm:row-span-2" },
  { src: chickenFries, alt: "Chicken and chips", caption: "Chicken & Chips Platter", span: "sm:col-span-2 sm:row-span-2" },
  { src: chickenWings, alt: "Crispy chicken wings", caption: "Crispy Fried Wings", span: "sm:col-span-2 sm:row-span-2" },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <section className="bg-jungle text-white pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.16em] text-[0.72rem] font-extrabold text-mango mb-4"
          >
            Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.4rem)] text-balance"
          >
            A taste of what leaves our kitchen.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/75 text-[1.05rem] max-w-xl mx-auto"
          >
            Tap any photo for a closer look.
          </motion.p>
        </div>
      </section>

      <section className="py-24 sm:py-28 bg-pulp">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-6 auto-rows-[110px] sm:auto-rows-[120px] gap-4">
            {photos.map((p, i) => (
              <motion.button
                key={p.caption}
                type="button"
                onClick={() => setActive(p)}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-[20px] overflow-hidden group cursor-zoom-in row-span-2 ${p.span}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{p.caption}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-jungle/90 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 text-white text-3xl leading-none"
              >
                &times;
              </button>
              <img src={active.src} alt={active.alt} className="w-full rounded-2xl shadow-2xl" />
              <p className="text-white text-center mt-4 font-semibold">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
