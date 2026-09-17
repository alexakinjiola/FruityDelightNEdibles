import { useState } from "react";
import { motion } from "framer-motion";
import { menuItems, buildWhatsAppLink } from "../data/menu";
import { IconWhatsApp } from "./Icons";

export default function QuickOrderForm() {
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  function toggle(itemName) {
    setSelected((prev) =>
      prev.includes(itemName) ? prev.filter((n) => n !== itemName) : [...prev, itemName]
    );
  }

  function handleSend() {
    let msg = "Hi Fruity Delights, I'd like to order: ";
    msg += selected.length ? selected.join(", ") : "(please let me know what's available)";
    if (name.trim()) msg += `. My name is ${name.trim()}`;
    if (note.trim()) msg += `. Note: ${note.trim()}`;
    window.open(buildWhatsAppLink(msg), "_blank", "noopener");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white text-ink rounded-[26px] p-8 sm:p-9 shadow-[0_20px_50px_-20px_rgba(15,51,36,0.35)]"
    >
      <h3 className="font-display text-2xl font-bold text-jungle mb-1">Quick Order</h3>
      <p className="text-sm text-ink-soft mb-6">
        Tick what you'd like — we'll open WhatsApp with your order ready to send.
      </p>

      <div className="flex flex-col gap-2.5 mb-6">
        {menuItems.map((item) => {
          const checked = selected.includes(item.name);
          return (
            <label
              key={item.id}
              className={`flex items-center gap-3 border rounded-2xl px-4 py-3 cursor-pointer transition-colors ${
                checked ? "border-zest bg-pulp-2" : "border-black/10 hover:border-zest/60"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(item.name)}
                className="w-[18px] h-[18px] accent-[#F2760F]"
              />
              <span className="text-sm font-semibold flex-1">{item.name}</span>
            </label>
          );
        })}
      </div>

      <div className="mb-4">
        <label htmlFor="orderName" className="block text-xs font-bold text-ink-soft mb-1.5">
          Your name
        </label>
        <input
          id="orderName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Ada Bello"
          className="w-full border border-black/10 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zest"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="orderNote" className="block text-xs font-bold text-ink-soft mb-1.5">
          Anything else? (date, location, quantity)
        </label>
        <textarea
          id="orderNote"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="e.g. 20 milkshakes for Saturday, delivered to Bodija"
          className="w-full border border-black/10 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zest resize-none"
        />
      </div>

      <motion.button
        type="button"
        onClick={handleSend}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        className="w-full inline-flex items-center justify-center gap-2 bg-zest hover:bg-zest-2 text-white font-bold py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(242,118,15,0.55)] transition-colors"
      >
        <IconWhatsApp className="w-5 h-5" />
        Send Order on WhatsApp
      </motion.button>
    </motion.div>
  );
}
