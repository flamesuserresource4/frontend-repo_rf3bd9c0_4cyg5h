export default function Partners() {
  const avantages = [
    "Tarifs dégressifs selon le volume",
    "SLA et tracking en temps réel",
    "Intégration simple (API/CSV)",
    "Support dédié B2B",
  ];

  const temoignages = [
    { cite: "En 3 mois, nos retards ont chuté de 42%.", author: "Nadia, e-commerce beauté" },
    { cite: "Reporting clair, coûts maîtrisés.", author: "Karim, micro-entreprise textile" },
    { cite: "Process pro et équipe réactive.", author: "Sophie, marketplace locale" },
  ];

  return (
    <section id="partenaires" className="bg-[#071635] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Partenaires — grandir ensemble</h2>
            <p className="mt-4 text-white/80">Nous accompagnons micro-entreprises et sociétés avec des engagements clairs et des outils simples.</p>
            <ul className="mt-6 space-y-3">
              {avantages.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/70">Exemple de volume mensuel: 12 500 colis, 94% livrés en J+1, 6% en J+2. Taux de satisfaction: 4.8/5.</p>
            </div>

            <div className="mt-8">
              <a href="#contact" className="px-6 py-3 rounded-full bg-blue-500/90 hover:bg-blue-400 transition-colors">Demander un partenariat</a>
            </div>
          </div>

          <div className="space-y-4">
            {temoignages.map((t, i) => (
              <figure key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <blockquote className="text-white/90">“{t.cite}”</blockquote>
                <figcaption className="mt-2 text-sm text-white/60">{t.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
