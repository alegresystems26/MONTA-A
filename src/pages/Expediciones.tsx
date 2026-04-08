import { useState, useEffect } from 'react';

export default function Expediciones() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => {
    setActiveModal(id);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <header className="relative h-[716px] w-full flex items-end overflow-hidden">
        <img referrerPolicy="no-referrer" alt="El Chaltén Hero" className="absolute inset-0 w-full h-full object-cover" data-alt="panoramic view of Mt Fitz Roy in El Chaltén with dramatic peaks under a soft blue morning sky and morning mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv3WVfVLJ9dX6XpN1A-EFCEalLm5sbQjlOXyUvkVTja_fsSbrpucillGHFeSOqvTwpdEB3Cq5aEvMpdGG2wm8jvdQSzMO5c9j6TpZaG-MY8LVufb5l_c8L6qOmj4RCBS_pLosPBsUzg9C-6gXqCUFkpE3SGKT90HzVYNa3CeAdOG8lXZU1qeGzrdKcZvCB1FDWw0i1qDSqqsp_9yKP-NbbMoz5ovbMw2w9iILwzLLLEuCIY1cNAK_mILnS8sOYITqToRinmT6ygOc"/>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div className="relative w-full max-w-7xl mx-auto px-8 pb-16">
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-white mb-4">PRÓXIMAS<br/>SALIDAS</h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Diseñamos experiencias de alta montaña en los rincones más salvajes de la Patagonia y la Cordillera de los Andes.
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-background/80 backdrop-blur-md py-6 px-8 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Filtrar por:</span>
            {/* Dificultad Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
                <span className="text-sm">Dificultad</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
            {/* Duración Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
                <span className="text-sm">Duración</span>
                <span className="material-symbols-outlined text-sm">schedule</span>
              </button>
            </div>
            <div className="h-6 w-px bg-outline-variant/30 mx-2"></div>
            {/* Tags Fast Filter */}
            <div className="flex gap-2">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold font-label tracking-wide flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                MÁS POPULARES
              </span>
              <span className="bg-surface-variant text-on-surface-variant px-4 py-1.5 rounded-full text-xs font-bold font-label tracking-wide cursor-pointer hover:bg-surface-bright transition-colors">
                ALTA MONTAÑA
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 px-4 py-2 rounded-full w-full md:w-64">
            <span className="material-symbols-outlined text-outline text-lg">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline/50 outline-none" placeholder="Buscar destino..." type="text"/>
          </div>
        </div>
      </section>

      {/* Expedition Grid (Bento Style & Asymmetric Layout) */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1: El Chaltén (Large) */}
          <div className="md:col-span-8 group relative rounded-xl overflow-hidden bg-surface-container-high transition-transform duration-500 hover:scale-[1.01] cursor-pointer" onClick={() => openModal('modal-fitzroy')}>
            <div className="h-[500px] overflow-hidden relative">
              <img referrerPolicy="no-referrer" alt="El Chaltén Trekking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="rugged mountain landscape with snow-capped granite peaks under a golden hour sun with long shadows and alpine flora" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAemeHSZBh1w_HzfttSkIlpxNHYUKGkzVhgnwHE-xR-rmPlAI0Akq-opk7BvgRqe44FjItVKjxYfeAxlTA_0UZYlRLRzW194Pm8mpbTy9rs-BTxfC6C6xJKXeXZ-No1tvwAUp8r5QIQn2fksOJK4WtR_BuhFJkDw0327fqBx6hGBDf3BCIS7yS7F42Zd-z2DibYRyOpvbqrfVeQM6wHCl3l7kyJpBEAtvTDk9ZP9mdCNHetOe_L8VW4KykPa8ZYHjebbI_QoN1GTTs"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="glass-panel text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">7 DÍAS</span>
                <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">MODERADO</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-4xl font-headline font-bold text-white mb-2">Expedición Fitz Roy &amp; Torre</h3>
                  <div className="flex items-center gap-6 text-on-surface-variant text-sm">
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg text-primary">calendar_today</span> 15 Nov - 22 Nov</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg text-primary">group</span> 4/12 Cupos</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg text-primary">person</span> Guía: F. Moreno</span>
                  </div>
                </div>
                <button className="bg-white text-background h-12 w-12 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          {/* Card 2: Aconcagua (Side vertical) */}
          <div className="md:col-span-4 group relative rounded-xl overflow-hidden bg-surface-container-high transition-transform duration-500 hover:scale-[1.01] cursor-pointer" onClick={() => openModal('modal-aconcagua')}>
            <div className="h-full min-h-[400px] overflow-hidden relative">
              <img referrerPolicy="no-referrer" alt="Aconcagua Summit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="stunning high altitude view of Aconcagua summit with glaciers and blue sky from a neighboring peak" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-_lNGNHxVsBkb13hYZ7PzKyjyl3qWyshTJRBjdDHB6xsBpZuV0EBTnfivKvubjQlNr6MubtlLsaqSA4GwhABcqrt3TKs3eajSKWdWNX3lG46m7ICMalgJCr8GP_0v9q2_z28c8Gh5Jme0A8JJRP8dB0X0zuBluHaidP34kOrYWZ6RnGAqpWfCImZC9i8Pon8wKNp6pTI3b62rbV9_gZBDhQVR0toTapNE2n28bzouX5eNUFU_VOXpnNP7fwtLBCCXW5wycSehqzE"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">EXPERTO</span>
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-headline font-bold text-white mb-4">Techo de América: Aconcagua 6962m</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                    <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
                    04 Ene - 24 Ene (20 Días)
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                    <span className="material-symbols-outlined text-primary text-lg">hotel_class</span>
                    Logística Full Incluida
                  </div>
                </div>
                <span className="text-2xl font-headline font-bold text-primary">$2.400 <span className="text-xs text-on-surface-variant font-normal">USD</span></span>
              </div>
            </div>
          </div>
          {/* Card 3: Bariloche (Square-ish) */}
          <div className="md:col-span-6 group relative rounded-xl overflow-hidden bg-surface-container-high transition-transform duration-500 hover:scale-[1.01] cursor-pointer">
            <div className="h-[400px] overflow-hidden relative">
              <img referrerPolicy="no-referrer" alt="Bariloche Lakes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="crystal clear alpine lake in Bariloche reflecting mountains and dense evergreen forest under bright sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_wpf_pAIDBifgTwyceC71WNGO5CN26WhHQtUoRq-MBw0RxnAnaTOKHzHy9bRUC8CRR0XRN88Dxij0f3VfdkUwGP7z-CE2QbO0GHa_8IUlFL64Jjuez4TpclLLktGzw7gweF2et4MbU0Q3hEWRHZ5OAi8Lh3r8CWNNMmbBAPwepsCsJJO5c1VPoBOmQL1UChPhaQ_p83O5PaC9jDgN2XSRBD_ReD5uA95TmnDFON6mK1wyylVV2r_taU-BzqTlOZbG2fpcOPPPYtY"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs font-label text-primary font-bold tracking-widest uppercase mb-1 block">ESCAPADA</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-2">Cruce de los Lagos</h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 max-w-sm">Explora el Nahuel Huapi desde perspectivas únicas en una travesía de refugio en refugio.</p>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 text-xs text-zinc-300"><span className="material-symbols-outlined text-lg text-primary">schedule</span> 4 Días</span>
                  <span className="flex items-center gap-1 text-xs text-zinc-300"><span className="material-symbols-outlined text-lg text-primary">signal_cellular_alt</span> Fácil</span>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4: Mendoza (Square-ish) */}
          <div className="md:col-span-6 group relative rounded-xl overflow-hidden bg-surface-container-high transition-transform duration-500 hover:scale-[1.01] cursor-pointer">
            <div className="h-[400px] overflow-hidden relative">
              <img referrerPolicy="no-referrer" alt="Mendoza Mountains" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="vineyards at the foot of the snow-capped Andes mountains in Mendoza with clear blue sky and warm afternoon sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASdNyH7Gpn3ZLhBP46pcJYRyxEjBIRpS6rmWQr1CVDY_OcBoH6odH-KKLCKmWiUYwns_Q_kZYfzB9NZosivZKNDdG0Hgv5HGcEG1KFYZbI1c8R2s3ZTcD8y64_sJonaTPFCzlt1B_07uisX6U3t7loGceniu3ARoilMTDN01TuEES71qAH0JCj3EZ61_G27V8m1N5KIFJn8KmpaTX8nwZ_o7oBJjYd1oFM91Xbhb9-UUOL54kjwvFfSyAgMb9HoKqw0vTOWIl_37Q"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs font-label text-primary font-bold tracking-widest uppercase mb-1 block">ALTA MONTAÑA</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-2">Cordón del Plata</h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 max-w-sm">La mejor escuela de altura en Mendoza. Ascenso al Cerro El Plata 5960m.</p>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 text-xs text-zinc-300"><span className="material-symbols-outlined text-lg text-primary">schedule</span> 10 Días</span>
                  <span className="flex items-center gap-1 text-xs text-zinc-300"><span className="material-symbols-outlined text-lg text-primary">signal_cellular_alt</span> Técnico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Section: Newsletter/Community Join */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="bg-surface-container rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-headline font-bold text-white mb-4">¿No encontrás lo que buscás?</h2>
            <p className="text-on-surface-variant max-w-lg">
              Diseñamos expediciones privadas a medida para grupos, empresas o montañistas individuales. Contanos tu objetivo.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input className="bg-background border border-outline-variant px-6 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-full sm:w-64" placeholder="Tu email" type="email"/>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-headline font-bold hover:bg-primary-container transition-all whitespace-nowrap">
              Hablemos
            </button>
          </div>
        </div>
      </section>

      {/* Modals Section */}
      {activeModal === 'modal-fitzroy' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto modal-glass rounded-3xl p-8 md:p-12 shadow-2xl">
            <button className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors" onClick={closeModal}>
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Expedición Patagónica</span>
                <h2 className="text-4xl font-headline font-bold text-white mb-6">Fitz Roy &amp; Cerro Torre</h2>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  Una travesía inolvidable por el corazón del Parque Nacional Los Glaciares. Visitaremos la Laguna de los Tres a los pies del imponente Fitz Roy y caminaremos hasta la Laguna Torre para contemplar las agujas de granito más famosas del mundo.
                </p>
                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest border-b border-outline-variant/20 pb-2">Itinerario</h4>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <span className="text-primary font-bold text-xs">Día 1</span>
                      <span className="text-sm text-zinc-300">Recepción en El Chaltén y charla técnica.</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-bold text-xs">Día 2-3</span>
                      <span className="text-sm text-zinc-300">Trekking a Laguna de los Tres y campamento Poincenot.</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-bold text-xs">Día 4-5</span>
                      <span className="text-sm text-zinc-300">Travesía hacia Laguna Torre y campamento De Agostini.</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-bold text-xs">Día 6-7</span>
                      <span className="text-sm text-zinc-300">Regreso al pueblo y cena de despedida.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <img referrerPolicy="no-referrer" alt="Detail view" className="w-full h-64 object-cover rounded-xl border border-outline-variant/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAemeHSZBh1w_HzfttSkIlpxNHYUKGkzVhgnwHE-xR-rmPlAI0Akq-opk7BvgRqe44FjItVKjxYfeAxlTA_0UZYlRLRzW194Pm8mpbTy9rs-BTxfC6C6xJKXeXZ-No1tvwAUp8r5QIQn2fksOJK4WtR_BuhFJkDw0327fqBx6hGBDf3BCIS7yS7F42Zd-z2DibYRyOpvbqrfVeQM6wHCl3l7kyJpBEAtvTDk9ZP9mdCNHetOe_L8VW4KykPa8ZYHjebbI_QoN1GTTs"/>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">Precio</span>
                    <span className="text-xl font-bold text-white">$1.250 <span className="text-xs text-zinc-500 font-normal">USD</span></span>
                  </div>
                  <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">Dificultad</span>
                    <span className="text-xl font-bold text-sky-400">Media</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest border-b border-outline-variant/20 pb-2">Equipo Necesario</h4>
                  <ul className="text-sm text-zinc-400 space-y-2">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Botas de trekking impermeables</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Mochila 60L + Daypack</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Bolsa de dormir -10°C comfort</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Vestimenta por capas (térmica, polar, impermeable)</li>
                  </ul>
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline font-bold text-lg hover:bg-primary-container transition-all shadow-lg shadow-primary/20">
                  Reservar mi Lugar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'modal-aconcagua' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto modal-glass rounded-3xl p-8 md:p-12 shadow-2xl">
            <button className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors" onClick={closeModal}>
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="text-error font-bold tracking-widest text-xs uppercase mb-2 block">Expedición High-Altitude</span>
                <h2 className="text-4xl font-headline font-bold text-white mb-6">Aconcagua 6.962m</h2>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  El desafío máximo de los Andes. Una expedición de 20 días que requiere preparación física y mental rigurosa. Logística de clase mundial para alcanzar el punto más alto de Occidente.
                </p>
                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest border-b border-outline-variant/20 pb-2">Itinerario de Ascenso</h4>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <span className="text-error font-bold text-xs">Día 1-3</span>
                      <span className="text-sm text-zinc-300">Mendoza, permisos e ingreso a Horcones.</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-error font-bold text-xs">Día 4-8</span>
                      <span className="text-sm text-zinc-300">Trekking a Plaza de Mulas (Campo Base).</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-error font-bold text-xs">Día 9-16</span>
                      <span className="text-sm text-zinc-300">Aclimatación y rotación a campos de altura.</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-error font-bold text-xs">Día 17-20</span>
                      <span className="text-sm text-zinc-300">Día de cumbre y descenso final.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <img referrerPolicy="no-referrer" alt="Detail view" className="w-full h-64 object-cover rounded-xl border border-outline-variant/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-_lNGNHxVsBkb13hYZ7PzKyjyl3qWyshTJRBjdDHB6xsBpZuV0EBTnfivKvubjQlNr6MubtlLsaqSA4GwhABcqrt3TKs3eajSKWdWNX3lG46m7ICMalgJCr8GP_0v9q2_z28c8Gh5Jme0A8JJRP8dB0X0zuBluHaidP34kOrYWZ6RnGAqpWfCImZC9i8Pon8wKNp6pTI3b62rbV9_gZBDhQVR0toTapNE2n28bzouX5eNUFU_VOXpnNP7fwtLBCCXW5wycSehqzE"/>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">Inversión</span>
                    <span className="text-xl font-bold text-white">$2.400 <span className="text-xs text-zinc-500 font-normal">USD</span></span>
                  </div>
                  <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/10">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">Dificultad</span>
                    <span className="text-xl font-bold text-error">Extrema</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest border-b border-outline-variant/20 pb-2">Requisitos Clave</h4>
                  <ul className="text-sm text-zinc-400 space-y-2">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-lg">warning</span> Experiencia previa en +5000m</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-lg">medical_services</span> Certificado médico de aptitud física</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-lg">ac_unit</span> Equipo de alta montaña (-30°C)</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-lg">psychology</span> Mentalidad de perseverancia extrema</li>
                  </ul>
                </div>
                <button className="w-full bg-secondary text-white py-4 rounded-xl font-headline font-bold text-lg hover:bg-secondary-dim transition-all shadow-lg shadow-secondary/20">
                  Postular a la Expedición
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
