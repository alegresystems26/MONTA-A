export default function Footer() {
  return (
    <footer className="bg-zinc-950 w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-lg font-bold text-zinc-100 font-headline tracking-tighter">MONTAÑA AR</div>
        <p className="font-body text-zinc-500 text-sm">© 2024 MONTAÑA AR. La cumbre te espera.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <a className="font-body text-zinc-500 text-sm hover:text-sky-300 transition-colors" href="#">Seguridad</a>
        <a className="font-body text-zinc-500 text-sm hover:text-sky-300 transition-colors" href="#">Membresías</a>
        <a className="font-body text-zinc-500 text-sm hover:text-sky-300 transition-colors" href="#">Contacto</a>
        <a className="font-body text-zinc-500 text-sm hover:text-sky-300 transition-colors" href="#">Términos</a>
        <a className="font-body text-zinc-500 text-sm hover:text-sky-300 transition-colors" href="#">Privacidad</a>
      </div>
      <div className="flex gap-4">
        <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-zinc-400 hover:text-primary transition-all" href="#">
          <span className="material-symbols-outlined text-xl">share</span>
        </a>
        <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-zinc-400 hover:text-primary transition-all" href="#">
          <span className="material-symbols-outlined text-xl">public</span>
        </a>
      </div>
    </footer>
  );
}
