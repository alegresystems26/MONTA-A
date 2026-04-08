import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Expediciones', path: '/expediciones' },
    { name: 'GALERÍA', path: '/galeria' },
    { name: 'Equipamiento', path: '/equipamiento' },
    { name: 'Cursos', path: '/cursos' },
  ];

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setMobileMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      document.body.style.overflow = '';
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl bg-zinc-950/60 flex justify-between items-center px-4 md:px-8 py-4 max-w-full">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-zinc-50 font-headline uppercase">MONTAÑA AR</Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-headline tracking-wide uppercase text-sm transition-colors ${
                  isActive
                    ? 'text-sky-400 border-b-2 border-sky-400 pb-1'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          {location.pathname === '/equipamiento' && (
            <button className="hidden md:block material-symbols-outlined text-zinc-400 hover:text-sky-400 transition-all">search</button>
          )}
          <button className="hidden md:block bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl font-headline text-sm uppercase tracking-wider font-bold transition-all hover:scale-95 active:scale-90 shadow-lg shadow-primary/10">
            Unite a la Cumbre
          </button>
          <button className="md:hidden text-zinc-50 z-50" onClick={toggleMobileMenu}>
            <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 pt-20">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-headline tracking-wide uppercase text-2xl transition-colors ${
                  isActive
                    ? 'text-sky-400 border-b-2 border-sky-400 pb-1'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button className="mt-8 bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-headline text-lg uppercase tracking-wider font-bold transition-all shadow-lg shadow-primary/10">
            Unite a la Cumbre
          </button>
        </div>
      )}
    </>
  );
}
