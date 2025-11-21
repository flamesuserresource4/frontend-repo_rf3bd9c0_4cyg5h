export default function Services() {
  const zones = [
    { name: "Île-de-France", delais: "J+0/J+1" },
    { name: "Grand Ouest", delais: "J+1" },
    { name: "Rhône-Alpes", delais: "J+1/J+2" },
    { name: "PACA", delais: "J+1/J+2" },
  ];

  const tarifs = [
    { label: "Pli < 500g", price: "4,90€" },
    { label: "Colis S (≤2kg)", price: "6,90€" },
    { label: "Colis M (≤5kg)", price: "8,90€" },
    { label: "Colis L (≤10kg)", price: "12,90€" },
  ];

  const etapes = [
    "Collecte planifiée ou à la demande",
    "Tri et étiquetage automatisés",
    "Acheminement optimisé",
    "Preuve de livraison et reporting",
  ];

  return (
    <section id="services" className="bg-[#0b1b3f] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Services & couverture</h2>
        <p className="mt-3 text-white/80">Réseau fiable, délais maîtrisés, communication transparente.</p>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Zones couvertes</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              {zones.map((z) => (
                <li key={z.name} className="flex items-center justify-between">
                  <span>{z.name}</span>
                  <span className="text-white/60">{z.delais}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Tarifs de base</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              {tarifs.map((t) => (
                <li key={t.label} className="flex items-center justify-between">
                  <span>{t.label}</span>
                  <span className="text-white/60">{t.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-white/50">Tarifs indicatifs hors carburant. Devis personnalisé sur demande.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Process en 4 étapes</h3>
            <ol className="mt-4 space-y-3 text-white/80 list-decimal list-inside">
              {etapes.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
