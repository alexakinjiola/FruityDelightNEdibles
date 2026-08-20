import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-pulp pt-32 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="font-display text-8xl font-bold text-mango mb-2">404</p>
        <h1 className="font-display text-2xl text-jungle mb-3">
          Looks like this page wandered off the menu.
        </h1>
        <p className="text-ink-soft mb-8">Let's get you back to something delicious.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-zest hover:bg-zest-2 text-white font-bold px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(242,118,15,0.55)] transition-all hover:-translate-y-1"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
