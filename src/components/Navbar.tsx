import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Expediciones', path: '/expediciones' },
    { name: 'GALERÍA', path: '/galeria' },
    { name: 'Equipamiento', path: '/equipamiento' },
    { name: 'Cursos', path: '/cursos' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl bg-zinc-950/60 flex justify-between items-center px-8 py-4 max-w-full">
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
          <button className="material-symbols-outlined text-zinc-400 hover:text-sky-400 transition-all">search</button>
        )}
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl font-headline text-sm uppercase tracking-wider font-bold transition-all hover:scale-95 active:scale-90 shadow-lg shadow-primary/10">
          Unite a la Cumbre
        </button>
      </div>
    </nav>
  );
}
