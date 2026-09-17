import { motion } from "framer-motion";
import { buildWhatsAppLink } from "../data/menu";
import { IconWhatsApp } from "./Icons";

export default function WhatsAppFloatingButton() {
  const waLink = buildWhatsAppLink("Hi Fruity Delights, I'd like to place an order.");

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-[60px] h-[60px] rounded-full bg-[#25D366] shadow-[0_16px_34px_-10px_rgba(37,211,102,0.6)] flex items-center justify-center text-white"
      style={{ width: 60, height: 60 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <IconWhatsApp className="w-7 h-7 relative z-10" />
    </motion.a>
  );
}
