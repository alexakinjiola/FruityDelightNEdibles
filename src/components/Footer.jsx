import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { buildWhatsAppLink } from "../data/menu";

export default function Footer() {
  const year = new Date().getFullYear();
  const waLink = buildWhatsAppLink("Hi Fruity Delights, I'd like to place an order.");

  return (
    <footer className="bg-[#0B2A1D] text-white/60 pt-14 pb-7">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-9 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Fruity Delights logo" className="w-10 h-10 rounded-full" />
              <span className="font-display text-white text-lg">Fruity Delights N Edibles</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Bringing Relish to Your Tastebuds — premium finger foods and fresh fruit
              beverages for individuals, events and corporate clients across Ibadan, Osun and
              Ogun State.
            </p>
          </div>
          <div>
            <h5 className="text-white text-xs uppercase tracking-[0.1em] mb-4">Explore</h5>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-mango transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="hover:text-mango transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-mango transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-mango transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-xs uppercase tracking-[0.1em] mb-4">Contact</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-mango transition-colors">0806 719 1065</a></li>
              <li><a href="mailto:Fruitydelightsandedibles@gmail.com" className="hover:text-mango transition-colors break-all">Fruitydelightsandedibles@gmail.com</a></li>
              <li>Ajongolo community, Akobo-Ojurin, Ibadan</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-wrap justify-between gap-2 text-xs">
          <span>&copy; {year} Fruity Delights N Edibles. All rights reserved.</span>
          <span>Made fresh, every day.</span>
        </div>
      </div>
    </footer>
  );
}
