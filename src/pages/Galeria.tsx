import { useState, useEffect } from 'react';

export default function Galeria() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState({ src: '', alt: '', title: '', location: '' });

  const openLightbox = (img: any) => {
    setActiveImage(img);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative z-20 bg-surface pt-20 pb-24 px-8">
      {/* Hero Header */}
      <header className="relative h-[614px] min-h-[450px] w-full flex items-end overflow-hidden -mx-8 -mt-20 mb-8 px-8">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-10"></div>
        <img referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcXxeDen3p6OCFhAtEePBd7bDy1oJzr5U60k2sWgtoMZ-iAeIyxlJ2NMZMDxsax6WUpOiE56jueO3qk_-tanlpgV1KfAdcPPpyUZYYj0-3bAzBw9BAeStMRbjx_6eEaXS2PuB6PO7UZd7jjGCWL-3PwrAxgXvC1AMbUyoMZNdMz8LZOr7tvAzR1A5BWqs0yZEcsO16C3lLQlTr2DRiOVgiOj_3--pbOMICGgZakoU5OzqnKpPhYkgh0BMbw2EMMifk3IbCgnj42_A" alt="Hero" />
        <div className="relative z-20 pb-16 max-w-7xl mx-auto w-full">
          <span className="inline-block py-1 px-4 mb-4 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-widest uppercase font-headline">
            Exploración Visual
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface mb-4">
            Galería de la <span className="text-primary">Cumbre</span>
          </h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            Capturando la esencia indomable de la cordillera. Un recorrido visual por las expediciones más desafiantes de la Patagonia.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-headline text-sm font-bold tracking-wide transition-all">
              Todos
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-bright text-on-surface-variant hover:text-on-surface font-headline text-sm font-medium tracking-wide transition-all">
              Paisajes
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-bright text-on-surface-variant hover:text-on-surface font-headline text-sm font-medium tracking-wide transition-all">
              Acción
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-bright text-on-surface-variant hover:text-on-surface font-headline text-sm font-medium tracking-wide transition-all">
              Comunidad
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-label text-sm uppercase tracking-widest">
            <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>sort</span>
            <span>Ordenar por: Recientes</span>
          </div>
        </div>

        {/* Mosaic Grid */}
        <div className="masonry-grid">
          {/* Item 1 */}
          <div onClick={() => openLightbox({ 
              src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBI3aZt98Eo3lS5fBLlrOaXZcMZIcC_Ej1SA86OSFryWmaHBe1Ok3E7mPD6sSZ0Ypb2lqCIOi82TtLTmjan4Yji5WBcugB4nxug-c-YZufJpB7XTrZ6qRr5crX6mnOXk0GbVIui2VrM-lhbkHx6W1XSFeei-S1m4YtT76RQhc2PGjvvIJCKVnDF13CzpdgUHrX7AcpARxhoEvHXcDS8Slx-FLqB6pwVNzgBonws6MVcTmyifHIkRAIDntKuTV2o9em4Fx0nvWjcXo', 
              alt: 'Fitz Roy peaks', 
              title: 'Amanecer en el Torre', 
              location: 'El Chaltén, Santa Cruz' 
          })} className="masonry-item-tall group relative overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
            <img referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBI3aZt98Eo3lS5fBLlrOaXZcMZIcC_Ej1SA86OSFryWmaHBe1Ok3E7mPD6sSZ0Ypb2lqCIOi82TtLTmjan4Yji5WBcugB4nxug-c-YZufJpB7XTrZ6qRr5crX6mnOXk0GbVIui2VrM-lhbkHx6W1XSFeei-S1m4YtT76RQhc2PGjvvIJCKVnDF13CzpdgUHrX7AcpARxhoEvHXcDS8Slx-FLqB6pwVNzgBonws6MVcTmyifHIkRAIDntKuTV2o9em4Fx0nvWjcXo" alt="Fitz Roy peaks" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-primary font-headline text-xs font-bold uppercase tracking-widest mb-1">El Chaltén, Santa Cruz</p>
              <h3 className="text-xl font-bold font-headline leading-tight">Amanecer en el Torre</h3>
              <p className="text-on-surface-variant text-sm mt-2 font-label">Por: Lucas Almada</p>
            </div>
          </div>

          {/* Item 2 */}
          <div onClick={() => openLightbox({ 
              src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqvVy63-_pay_6FuIlJ5UoIJBO5Op6u2d-8wtGW06Idz-OyGVB-ed37spnSTVbVRwoBuCT7L8_q4_UMnWze4vOoG3ceqPqZKXv-g2cGlJ8pmScgoDmwM6CwoNJkdLreAOG5bmIsZBAEanzHjD0GbSIM31Ac10pQjTOSnHJtePZ3kQLC2fUF-UAqas-IhGAZtlDddz18mqEpHIhwFZGwsx4pSJ9CXRZvHROUUa0tzSGe4-Auy7_ztM-J-Bseebyx0MxCNkIuU9UpY4', 
              alt: 'Climber in Patagonia', 
              title: 'Desafiando la Gravedad', 
              location: 'Escalada Vertical' 
          })} className="masonry-item-wide group relative overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
            <img referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqvVy63-_pay_6FuIlJ5UoIJBO5Op6u2d-8wtGW06Idz-OyGVB-ed37spnSTVbVRwoBuCT7L8_q4_UMnWze4vOoG3ceqPqZKXv-g2cGlJ8pmScgoDmwM6CwoNJkdLreAOG5bmIsZBAEanzHjD0GbSIM31Ac10pQjTOSnHJtePZ3kQLC2fUF-UAqas-IhGAZtlDddz18mqEpHIhwFZGwsx4pSJ9CXRZvHROUUa0tzSGe4-Auy7_ztM-J-Bseebyx0MxCNkIuU9UpY4" alt="Climber" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-secondary font-headline text-xs font-bold uppercase tracking-widest mb-1">Escalada Vertical</p>
              <h3 className="text-xl font-bold font-headline leading-tight">Desafiando la Gravedad</h3>
              <p className="text-on-surface-variant text-sm mt-2 font-label">Por: Martina Rossi</p>
            </div>
          </div>

          {/* Item 3 */}
          <div onClick={() => openLightbox({ 
              src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChAfOCqLNBF2h0z7c9DRvxYrtGFdo8vARLwUkgMSZMrHpcdz6nCSxemh4upcgUNDVU9VmvbCniSJYdDs3hN2PlHv_DEsVAaDGST6Yx0s4I5Fh8LvLOieldD2-OzFxVO2gHyjAj6VQP4Gi_Ln7qea1y2us_5Kz6Fr_CF4l2gae9cLOSqckhYyXk4vKP6FgmyhmBUsTnRaUmJ851cNiF0JHSBk4MSXWHIrPWHP8_DZSEPydWdaBH41PpaP1EejkqLKGe4tb9shPd_oE', 
              alt: 'High altitude camp', 
              title: 'Noches de Refugio', 
              location: 'Campamento Base' 
          })} className="masonry-item-square group relative overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
            <img referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChAfOCqLNBF2h0z7c9DRvxYrtGFdo8vARLwUkgMSZMrHpcdz6nCSxemh4upcgUNDVU9VmvbCniSJYdDs3hN2PlHv_DEsVAaDGST6Yx0s4I5Fh8LvLOieldD2-OzFxVO2gHyjAj6VQP4Gi_Ln7qea1y2us_5Kz6Fr_CF4l2gae9cLOSqckhYyXk4vKP6FgmyhmBUsTnRaUmJ851cNiF0JHSBk4MSXWHIrPWHP8_DZSEPydWdaBH41PpaP1EejkqLKGe4tb9shPd_oE" alt="Camp" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-tertiary font-headline text-xs font-bold uppercase tracking-widest mb-1">Campamento Base</p>
              <h3 className="text-xl font-bold font-headline leading-tight">Noches de Refugio</h3>
              <p className="text-on-surface-variant text-sm mt-2 font-label">Por: Comunidad AR</p>
            </div>
          </div>

          {/* Item 4 */}
          <div onClick={() => openLightbox({ 
              src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIr-os0L_-yVg7L-53BiMTEj8XJCyU0XWc6PympQTS1JIvnuf_ZELucplYoFDSXkz-Sc7aDB4D0vxMlGf931IQwIJTc4ECnRGgbqFqYcdxrQ8dZtdUSMicv4xHCr_G8OB3LPcFpJf2O7FSeyWLlN5sTWestA3rfu71ezYhFtvTdnZduKDtLXpHjIJaF_gRQ5I_gOp-oIlmPWh0C8h5ejAjGNKXjS5-qGl9NJLUBi6TPjV4v8OEANorVrj9PauacWdtV_ljHONZeW4', 
              alt: 'Glacial lake reflection', 
              title: 'Espejo de Hielo', 
              location: 'Lago Argentino' 
          })} className="masonry-item-square group relative overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
            <img referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIr-os0L_-yVg7L-53BiMTEj8XJCyU0XWc6PympQTS1JIvnuf_ZELucplYoFDSXkz-Sc7aDB4D0vxMlGf931IQwIJTc4ECnRGgbqFqYcdxrQ8dZtdUSMicv4xHCr_G8OB3LPcFpJf2O7FSeyWLlN5sTWestA3rfu71ezYhFtvTdnZduKDtLXpHjIJaF_gRQ5I_gOp-oIlmPWh0C8h5ejAjGNKXjS5-qGl9NJLUBi6TPjV4v8OEANorVrj9PauacWdtV_ljHONZeW4" alt="Lake" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-primary font-headline text-xs font-bold uppercase tracking-widest mb-1">Lago Argentino</p>
              <h3 className="text-xl font-bold font-headline leading-tight">Espejo de Hielo</h3>
              <p className="text-on-surface-variant text-sm mt-2 font-label">Por: Facundo Diaz</p>
            </div>
          </div>

          {/* Item 5 */}
          <div onClick={() => openLightbox({ 
              src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD61BCL4IVReAu5kuTlhJaWz58y-O9OCiZzbcu7_Z60u6GoiEbNj9CWCdytH_9kTCGU5GIyUf6NeaJKlefO9n9CWrineW6WFOAKSvumAzZ34PiMfNn_KpTrc6pXq8uYLa27SMB6f_Ozx_XLB0ra1qje3U5yZ35_rVxIHLUy3_UnoO5c5RzFvLqrrzmj6-RKrdrYKzxHTHwHXSdjBy2qRFs2mfzoshRA9NAvoA7FlqKJDsFZfod6pScc61R_a-epSgNeFChCP1Ydvsk', 
              alt: 'Hiker on summit', 
              title: 'La Cumbre del Domuyo', 
              location: 'Ascenso Final' 
          })} className="masonry-item-tall group relative overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
            <img referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD61BCL4IVReAu5kuTlhJaWz58y-O9OCiZzbcu7_Z60u6GoiEbNj9CWCdytH_9kTCGU5GIyUf6NeaJKlefO9n9CWrineW6WFOAKSvumAzZ34PiMfNn_KpTrc6pXq8uYLa27SMB6f_Ozx_XLB0ra1qje3U5yZ35_rVxIHLUy3_UnoO5c5RzFvLqrrzmj6-RKrdrYKzxHTHwHXSdjBy2qRFs2mfzoshRA9NAvoA7FlqKJDsFZfod6pScc61R_a-epSgNeFChCP1Ydvsk" alt="Hiker" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-secondary font-headline text-xs font-bold uppercase tracking-widest mb-1">Ascenso Final</p>
              <h3 className="text-xl font-bold font-headline leading-tight">La Cumbre del Domuyo</h3>
              <p className="text-on-surface-variant text-sm mt-2 font-label">Por: Sofia Paz</p>
            </div>
          </div>

          {/* Item 6 */}
          <div onClick={() => openLightbox({ 
              src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnucehXeowOThzQJc5uMJYmw9TL0tVA58FzFrUszE9ILn5FULhNBoy7uvcpUjDy0_RQX3ID0ifIiU34aVL7jG7P3C6UXBUDIYMQxDlPDZ0-Hz5h7m5whLKaikQ5Hi-Bco2JOacfIEDq4fRcHz98TjXddFNqoHekznVprN1Jl31dQe6gCraYkIomPxHbxZYV0AlcwgVKS5e1sH0gNs2LnkBcJeQ1FaCa65p02W4Q1zhvQTPi60-K7oVyveb0AeTPHu74hSJd6e7VTI', 
              alt: 'Climbing gear close up', 
              title: 'Líneas de Vida', 
              location: 'Equipamiento' 
          })} className="masonry-item-wide group relative overflow-hidden rounded-xl bg-surface-container-high cursor-pointer">
            <img referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnucehXeowOThzQJc5uMJYmw9TL0tVA58FzFrUszE9ILn5FULhNBoy7uvcpUjDy0_RQX3ID0ifIiU34aVL7jG7P3C6UXBUDIYMQxDlPDZ0-Hz5h7m5whLKaikQ5Hi-Bco2JOacfIEDq4fRcHz98TjXddFNqoHekznVprN1Jl31dQe6gCraYkIomPxHbxZYV0AlcwgVKS5e1sH0gNs2LnkBcJeQ1FaCa65p02W4Q1zhvQTPi60-K7oVyveb0AeTPHu74hSJd6e7VTI" alt="Gear" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-tertiary font-headline text-xs font-bold uppercase tracking-widest mb-1">Equipamiento</p>
              <h3 className="text-xl font-bold font-headline leading-tight">Líneas de Vida</h3>
              <p className="text-on-surface-variant text-sm mt-2 font-label">Por: Tomas Ruiz</p>
            </div>
          </div>
        </div>

        {/* Pagination/Load More */}
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-outline-variant hover:border-primary transition-all duration-300">
            <span className="font-headline font-bold text-sm uppercase tracking-widest group-hover:text-primary">Cargar más expediciones</span>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform group-hover:translate-y-1">expand_more</span>
          </button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden bg-black/95 backdrop-blur-md">
          {/* Close Button */}
          <button onClick={closeLightbox} className="absolute top-6 right-6 z-[110] text-white/50 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          {/* Main Content Container */}
          <div onClick={closeLightbox} className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Image Wrapper */}
            <div className="relative max-w-full max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img referrerPolicy="no-referrer" alt={activeImage.alt} src={activeImage.src} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl ring-1 ring-white/10" />
            </div>
            
            {/* Info Bar */}
            <div className="mt-6 text-center">
              <p className="text-primary font-headline text-xs font-bold uppercase tracking-widest mb-1">{activeImage.location}</p>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-white">{activeImage.title}</h2>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary text-on-primary shadow-2xl shadow-primary/20 flex items-center justify-center group hover:scale-110 transition-transform active:scale-95">
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_a_photo</span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-headline font-bold text-sm uppercase tracking-tight">Subir Foto</span>
      </button>
    </main>
  );
}
