import { Clock, Package, ShieldCheck, TrendingUp } from "lucide-react";

export default function Highlights() {
  const cards = [
    {
      icon: Clock,
      title: "Rapidité maîtrisée",
      desc: "Ramassage en 2h, livraisons J+0/J+1 selon zones. Suivi en temps réel.",
    },
    {
      icon: Package,
      title: "Gestion des colis",
      desc: "Traçabilité complète, notifications SMS/Email, retours simplifiés.",
    },
    {
      icon: ShieldCheck,
      title: "Fiabilité et sécurité",
      desc: "Contrôles qualité, assurance colis, procédures anti-perte.",
    },
    {
      icon: TrendingUp,
      title: "Pensé pour les partenaires",
      desc: "SLA clairs, reporting hebdo, optimisation des coûts de transport.",
    },
  ];

  return (
    <section className="bg-[#0b1b3f] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
