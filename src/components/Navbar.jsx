import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { buildWhatsAppLink } from "../data/menu";
import { IconWhatsApp } from "./Icons";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const waLink = buildWhatsAppLink("Hi Fruity Delights, I'd like to place an order.");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-jungle/85 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-jungle/40 backdrop-blur-sm py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Fruity Delights N Edibles logo"
              className="w-11 h-11 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <span className="font-display font-bold text-white leading-tight text-[1.02rem]">
              Fruity Delights
              <span className="block font-body font-semibold text-[0.62rem] tracking-[0.14em] uppercase text-mango">
                N Edibles
              </span>
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative text-sm font-semibold py-1 transition-colors ${
                    isActive ? "text-mango" : "text-white/85 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-mango rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex items-center gap-2 bg-zest hover:bg-zest-2 text-white font-bold text-sm px-6 py-3 rounded-full shadow-[0_14px_30px_-10px_rgba(242,118,15,0.55)] transition-colors"
            >
              <IconWhatsApp className="w-4 h-4" />
              Order on WhatsApp
            </motion.a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <span className="w-6 h-0.5 bg-white block" />
              <span className="w-6 h-0.5 bg-white block" />
              <span className="w-6 h-0.5 bg-white block" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-jungle flex flex-col items-center justify-center gap-8"
          >
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl leading-none p-2"
            >
              &times;
            </button>
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4, ease: "easeOut" }}
              >
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-3xl ${isActive ? "text-mango" : "text-white"}`
                  }
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * links.length, duration: 0.4 }}
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-zest text-white font-bold px-7 py-3.5 rounded-full mt-2"
            >
              <IconWhatsApp className="w-4 h-4" />
              Order on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
