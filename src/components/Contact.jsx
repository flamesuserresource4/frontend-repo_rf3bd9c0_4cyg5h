import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      setStatus('Envoi...');
      // Frontend-only demo: display confirmation
      await new Promise(r => setTimeout(r, 600));
      setStatus('Message envoyé. Nous vous recontactons rapidement.');
      e.currentTarget.reset();
    } catch (e) {
      setStatus("Erreur d'envoi. Réessayez.");
    }
  }

  return (
    <section id="contact" className="bg-[#071635] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h2>
            <p className="mt-4 text-white/80">Parlons de vos volumes, de vos SLA et de votre croissance.</p>
            <div className="mt-6 space-y-2 text-white/80">
              <p>Téléphone: <span className="text-white">01 84 00 00 00</span></p>
              <p>Adresse: <span className="text-white">12 rue du Port, 75000 Paris</span></p>
              <p>Mail: <span className="text-white">partenariats@sedeco.fr</span></p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-sm text-white/70">Nom</label>
              <input name="nom" required className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Entreprise</label>
              <input name="entreprise" required className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-blue-400" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Téléphone</label>
                <input name="phone" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-blue-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/70">Message</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 rounded-full bg-blue-500/90 hover:bg-blue-400 transition-colors" type="submit">
                Envoyer
              </button>
              <span className="text-sm text-white/70">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
