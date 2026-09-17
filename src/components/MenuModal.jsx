import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { menuIcons, IconWhatsApp } from "./Icons";
import { useMenuModal } from "../context/MenuModalContext";
import { buildWhatsAppLink } from "../data/menu";

export default function MenuModal() {
  const { activeItem, closeItem } = useMenuModal();

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeItem();
    }
    if (activeItem) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeItem, closeItem]);

  const Icon = activeItem ? menuIcons[activeItem.icon] : null;

  const waMessage = activeItem
    ? `Hi Fruity Delights, I'd like to order: ${activeItem.name}. Please let me know availability, flavour options and pricing.`
    : "";

  return (
    <AnimatePresence>
      {activeItem && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-jungle/70 backdrop-blur-sm"
            onClick={closeItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-modal-title"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative bg-pulp w-full sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-t-[28px] sm:rounded-[28px] shadow-2xl"
          >
            <button
              onClick={closeItem}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-ink shadow-md transition-colors"
            >
              &times;
            </button>

            <div className="bg-gradient-to-br from-jungle to-jungle-2 px-8 pt-10 pb-16 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-mango/10" />
              <div className="absolute right-10 bottom-0 w-24 h-24 rounded-full bg-zest/10" />
              <span className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-mango relative z-10">
                {Icon && <Icon className="w-8 h-8" />}
              </span>
              <p className="eyebrow text-mango text-xs font-extrabold uppercase tracking-[0.16em] mt-5 relative z-10">
                {activeItem.category}
              </p>
              <h3 id="menu-modal-title" className="font-display text-3xl font-bold text-white mt-2 relative z-10">
                {activeItem.name}
              </h3>
              <span className="font-hand text-xl text-mango -rotate-1 inline-block mt-1 relative z-10">
                {activeItem.tag}
              </span>
            </div>

            <div className="px-8 py-7 -mt-8 relative z-10">
              <div className="bg-white rounded-2xl p-6 shadow-[0_16px_34px_-22px_rgba(32,28,22,0.35)]">
                <p className="text-ink-soft leading-relaxed text-[0.95rem]">
                  {activeItem.longDesc}
                </p>

                {activeItem.highlights && (
                  <ul className="mt-5 space-y-2.5">
                    {activeItem.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
                        <svg className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
                          <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {activeItem.flavours && (
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-ink-soft/70 mb-2">
                      Popular options
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeItem.flavours.map((f) => (
                        <span
                          key={f}
                          className="text-xs font-semibold bg-pulp-2 text-jungle px-3 py-1.5 rounded-full"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeItem.bestFor && (
                  <p className="mt-5 text-xs text-ink-soft/80">
                    <span className="font-bold text-ink">Best for:</span> {activeItem.bestFor}
                  </p>
                )}
              </div>

              <motion.a
                href={buildWhatsAppLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-zest hover:bg-zest-2 text-white font-bold py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(242,118,15,0.55)] transition-colors"
              >
                <IconWhatsApp className="w-5 h-5" />
                Order {activeItem.name} on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
