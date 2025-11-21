import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Partners from './components/Partners';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#071635]">{/* Navy background */}
      <Navbar />
      <main className="pt-16">{/* offset for fixed nav */}
        <Hero />
        <Highlights />
        <Partners />
        <Services />
        <Contact />
        <footer className="bg-[#0b1b3f] text-white/60 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SEDECO — Tous droits réservés</p>
            <p className="text-sm">Design minimal, animations légères, transitions douces</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App