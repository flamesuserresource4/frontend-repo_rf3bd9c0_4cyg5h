import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#partenaires", label: "Partenaires" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0b1b3f]/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <a href="#accueil" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
          SEDECO
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full bg-blue-500/90 hover:bg-blue-400 text-white transition-colors">
            Demander un partenariat
          </a>
        </div>

        <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-white/10">
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1b3f]/90 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 text-white/90">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 text-center rounded-full bg-blue-500/90 hover:bg-blue-400 text-white transition-colors">
              Demander un partenariat
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
