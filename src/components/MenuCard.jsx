import { motion } from "framer-motion";
import { menuIcons } from "./Icons";
import { useMenuModal } from "../context/MenuModalContext";

export default function MenuCard({ item, index = 0 }) {
  const { openItem } = useMenuModal();
  const Icon = menuIcons[item.icon];

  return (
    <motion.button
      type="button"
      onClick={() => openItem(item)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotate: -0.6 }}
      whileTap={{ scale: 0.98 }}
      className="ticket-notch text-left bg-white rounded-[22px] p-7 pl-8 border border-black/10 shadow-[0_16px_34px_-22px_rgba(32,28,22,0.35)] relative w-full cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-zest"
    >
      <span className="absolute left-[30px] top-4 bottom-4 border-l-2 border-dashed border-black/10" />
      <span className="block pl-5">
        <span className="flex items-center justify-between mb-4">
          <span className="w-14 h-14 rounded-full bg-pulp-2 flex items-center justify-center text-zest group-hover:bg-mango/25 transition-colors">
            {Icon && <Icon className="w-7 h-7" />}
          </span>
          <span className="text-ink-soft/50 text-xs font-semibold uppercase tracking-wide flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            View details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </span>
        <span className="block font-display text-[1.35rem] font-bold text-jungle mb-2">
          {item.name}
        </span>
        <span className="block text-sm text-ink-soft leading-relaxed mb-4">
          {item.shortDesc}
        </span>
        <span className="font-hand text-xl font-bold text-watermelon -rotate-2 inline-block">
          {item.tag}
        </span>
      </span>
    </motion.button>
  );
}
