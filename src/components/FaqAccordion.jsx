import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../data/menu";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="border border-black/10 rounded-2xl bg-white overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink text-[0.95rem]">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0 w-7 h-7 rounded-full bg-pulp-2 text-zest flex items-center justify-center text-lg font-bold"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
