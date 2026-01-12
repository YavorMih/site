import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Owners } from './pages/Owners';
import { CaseStudies } from './pages/CaseStudies';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Начало', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Цени', path: '/pricing' },
    { name: 'Собственици', path: '/owners' },
    { name: 'Резултати', path: '/results' },
    { name: 'За Нас', path: '/about' },
    { name: 'Контакти', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  // If home and not scrolled: text white, transparent bg
  // If scrolled or not home: text primary, white bg
  const navBgClass = (isHome && !scrolled) ? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur-sm shadow-sm py-4';
  const textColorClass = (isHome && !scrolled) ? 'text-white' : 'text-primary';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={`font-serif text-2xl font-bold tracking-wide ${textColorClass}`}>
              PRIME<span className="text-accent">HOST</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium hover:text-accent transition-colors ${textColorClass}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
                to="/contact" 
                className="bg-accent text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-accent-light transition-colors"
            >
                Безплатна оценка
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${textColorClass}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-white hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white">
                <X size={32} />
            </button>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
             <span className="font-serif text-2xl font-bold tracking-wide block mb-6">
                PRIME<span className="text-accent">HOST</span>
              </span>
             <p className="text-gray-400 font-light text-sm leading-6 mb-6">
               Професионално управление на имоти за Airbnb и Booking. Максимизирайте приходите си без усилия.
             </p>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-6">Бързи връзки</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-accent transition-colors">Услуги</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Цени</Link></li>
              <li><Link to="/results" className="hover:text-accent transition-colors">Резултати</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">За Нас</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-6">Контакти</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="font-medium text-white mb-1">officeprimehost@gmail.com</li>
              <li>София, България</li>
              <li className="pt-2 opacity-60 text-xs">+359 898 795 311</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} PrimeHost Bulgaria. Всички права запазени.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Политика за поверителност</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-primary">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/results" element={<CaseStudies />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;