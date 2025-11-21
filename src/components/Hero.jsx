import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] w-full overflow-hidden bg-[#071635] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">SEDECO — Livraison fiable pour les entreprises ambitieuses</h1>
          <p className="mt-5 text-white/80 text-lg sm:text-xl max-w-2xl">Partenaire logistique moderne pour micro-entreprises et sociétés qui exigent ponctualité, transparence et performance. Notre flotte connectée assure un suivi précis et des délais maîtrisés.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-6 py-3 rounded-full bg-blue-500/90 hover:bg-blue-400 transition-colors">Demander un partenariat</a>
            <a href="#services" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10">Découvrir nos services</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#071635]/0 via-[#071635]/40 to-[#071635]" />
    </section>
  );
}
