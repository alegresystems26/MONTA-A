import { useState, useEffect } from 'react';

export default function Equipamiento() {
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
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-60" data-alt="dramatic wide shot of professional mountain climbing gear resting on a rock with snow-capped peaks in the background at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD60vmJBfDfpy2HNfdyRGHDGteX01s-HBnFrejOovgALj-_AeWIWbcYM7YUbJNTcPT_ZWLrO_rOVvsnhfEt9KALw6I1-iQg8Kx_seNHbkYrjQdj2dcCP6-eXAgltTcPf7Sr_wapCBEDb24XI4OrCYJHss4jDOJ--m1nydymXGB2qDh_MlmPXEAevDV0NdRfyNkPZ-PSpks5DtzMEEFnguXE2kBOKspV_2q3QDpbvldnk-e-fXH-m9OlTUv9zxjChABiQMPG2PyKpw" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest mb-6">
            Calidad Técnica Certificada
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-none tracking-tighter mb-6">
            EL ARTE DE LA <br /><span className="text-primary">SUPERVIVENCIA</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Equipamiento de alta montaña diseñado para soportar las condiciones más extremas. Alquiler técnico y catálogo exclusivo para expediciones en Los Andes.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center gap-2 hover:bg-primary-dim transition-colors">
              Explorar Catálogo
              <span className="material-symbols-outlined">north_east</span>
            </button>
            <button className="px-8 py-4 border border-outline-variant hover:bg-surface-variant transition-colors rounded-xl font-bold">
              Alquiler Técnico
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid Categories */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          {/* Calzado */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container">
            <img className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" data-alt="close-up of rugged professional mountaineering boots with crampon attachments on a rocky surface with high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4WD4WRNwWJSGO7Xvj_wOJkcrCn5h01zHRudJfDr2p-gicBahOZ5qtuqX0v7J9OHUoWQJu0TigRRO2Db1AGy_xPDdGbF0IT4ulsJNWI6p4PS971rJ8ScPrzu4rAWNZoH3cb0-26YRiHyGflK7xumYeOq7xKUGmBCWIhw2AmvopIiv0sJR3flp3LaarsWsxeRDcvlaYo6a1YTNjexxOjqOUxrKjvbIJCE2mCW6kM6wFRIzL7oPxUBqXL-RFHU2ofemOuhna27wNAxk" alt="Calzado" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline text-3xl font-bold mb-2">Calzado Técnico</h3>
              <p className="text-on-surface-variant mb-4">Botas dobles y rígidas para terrenos glaciares.</p>
              <a className="text-primary flex items-center gap-2 font-bold group" href="#">
                Ver Productos <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Abrigo */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-surface-container">
            <img className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" data-alt="high-tech orange down jacket layered over a technical mid-layer in a mountain environment with soft focus alpine glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg0_OZkoV72rdxGxN9GvOAac3lTiYPUIZHtqHCXdDmb4Wcn_Q4Xp-FsQad0cjW7k72J0p84XVlfLjaCdFFWuofcmAXZH9OmkA_uZYQq12xkhJYlkSyQRpDjELybraxNZhE1Il1NxED7MTxdyKLDx0ywE-lt9sg6vCaWv-AJTGjdKPVt616eceyIH0RojETwgIIo-bUUlhGqUwEWksj2IGrq-tT_D2ueuvfzld-xGwTi_H0629XmKNcrWGePVwb6rslZcN7Hy_whyk" alt="Abrigo" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-headline text-2xl font-bold mb-2">Indumentaria y Abrigo</h3>
              <p className="text-on-surface-variant mb-4">Sistemas de capas para -30°C.</p>
            </div>
          </div>
          {/* Seguridad */}
          <div className="relative group overflow-hidden rounded-xl bg-surface-container">
            <img className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" data-alt="climbing ropes and metal carabiners organized on a technical backpack in a high-altitude setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2wEchwgPPmtX_kGMWMNrDDPE7r5YJLoG2Bg0JT-WCnAvK3axJXgDqQ9GZ67lcf17XFVVnlCmJDWUJggYOahGObtQTvFnV9Nh839Hu0PPsVpHb2YpJJwgAMHEvyrXIVhQLLO0BBN_rU0U-N7mm_Yz12zoEWs04OWiagDy_7DSXRzlUkhmT6GJO6vtFt3h3c3fVoC29SAnlnQaN5Dul_sFtL-RcOqDUjq1cS0-neJldl8aK1SaKAGjCr6c1nbzvOVJpkWpkGZTCopg" alt="Seguridad" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent p-6 flex flex-col justify-end">
              <h3 className="font-headline text-xl font-bold mb-1 text-sky-400">Seguridad</h3>
              <p className="text-xs text-on-surface-variant">Arneses y cuerdas certificadas.</p>
            </div>
          </div>
          {/* GPS & Tech */}
          <div className="relative group overflow-hidden rounded-xl bg-surface-container">
            <img className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" data-alt="modern satellite communication device and map laying on a flat surface with subtle blue glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4GIe5NbkbUEcIUJfd_Ud4mN-8T1GWN3gTXRPIq52l9pmNANziP9ThB26GR960YTehHHMthMcUUhwQLCvuh9yW569Vxyl0_JNzIVuokGjcIdVHzF_oF1fPtHot6a0IFt8ntyqBpM88yb2Ynw7MavijkTPlf0IdBXczCy02RIA9PPEbBGHAQGSUqORRNTV2LCfduKJKXnfE2-WLoDeOc3lNRbpWbMV_v_dZMsgGGlrfD48DrD0Mt8uyEwWK64uHVH9hJ0uT8hwP710" alt="Navegación" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent p-6 flex flex-col justify-end">
              <h3 className="font-headline text-xl font-bold mb-1 text-tertiary">Navegación</h3>
              <p className="text-xs text-on-surface-variant">GPS y balizas de emergencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="bg-surface-container-low py-24">
        <div className="px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-2">Recomendados de la Cumbre</h2>
              <p className="text-on-surface-variant">Elegidos por nuestros guías expertos para esta temporada.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-surface-container-high rounded-xl overflow-hidden group">
              <div className="h-80 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="professional yellow mountaineering tent set up on a snowy peak under a starry sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVwc5DFQ3qvnSdS3_T5UkPL2gRo3gO74V_kJMkzyRLDUACNm4x0CDEkf7yq-5KeSIkj0EMnoOIewYB32tv128erW4wpzSjnm00Q6RQSxgmc4mEGvbnCbB1AeRBjA-pmGNDO4hrQzQCE0mzlz15zrD4aWuDF0fvtOzLvHODKwQ4wc7xH_1pMMhU_ImTImV0wYsZmz0Qm21c6aU_mBPG7TgaTs3goInlm7WGSmnY9WR_xpaWqgR_2AP9NhdFPX0xqm720QodSfO0REg" alt="Carpa" />
                <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold font-label">RENTAL DISPONIBLE</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-headline text-xl font-bold">Marmot Thor 3P</h4>
                  <span className="text-primary font-bold">$450.00</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Carpa de 4 estaciones diseñada para vientos de hasta 100km/h y nevadas extremas.</p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-sm text-tertiary">ac_unit</span>
                  <span className="text-xs text-on-surface-variant">-40°C Rating</span>
                </div>
                <button className="w-full py-3 bg-surface rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">Detalles Técnicos</button>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="bg-surface-container-high rounded-xl overflow-hidden group">
              <div className="h-80 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="close up of technical ice axe and crampons with sharp steel teeth on ice background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUsoDmv5VwPyd_WMcFT4t3r2Eebj4AsWBudU2b-4Bv3Js4IxwswobDaZH7IcNNcdtHT9ECADvcZv3OC2UjNGLviQFoXZ2XGPubzXRIzTGCLfhrxEHTGF9WLXmsfmHkjfO6v_LCq69Fpjjg9cl5tfiBDxfi_DBP8gdp9JuH9lwiyUSDhznSawLHd3CqZ6nRakID8zo9seYojzLBX76zqUQtTFs8P5xxuTvkyQJFXcBcwDSQ2gFmS7anBXYC0X_doM2wxH9oY8tjEM0" alt="Piolet" />
                <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold font-label">NUEVO</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-headline text-xl font-bold">Petzl Sum'Tec</h4>
                  <span className="text-primary font-bold">$220.00</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Piolet modular para alpinismo técnico, equilibrio perfecto entre ligereza y anclaje.</p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-sm text-tertiary">architecture</span>
                  <span className="text-xs text-on-surface-variant">Acero Forjado</span>
                </div>
                <button className="w-full py-3 bg-surface rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">Detalles Técnicos</button>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="bg-surface-container-high rounded-xl overflow-hidden group">
              <div className="h-80 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="professional blue mountaineering backpack with many technical straps and compartments" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUZxuCzCkX6hfD2soZ0L1En6Gj1XjDkIPcmiRzRWG4zuNEBXr-OLBBBMVWgbCZDm28KrUyp8nbp7zM_V9KYfG908EBI4JOabymmgKIlZTFX5g42NrGRYDmZGeFpFN608nK5nOHlxNYnYFGLYiDrvTUF-3KuHqtgQWcdLEbQx5tAFlMd1dlI7VDWdlNIfDQ3ShyG3wNLBOeo_s7T3SjBUyUYB9Q5LLzmiRUefxW62c7dkjnCWtBI5cUH5ouVFwg_xqtC_x7TMUbDcQ" alt="Mochila" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-headline text-xl font-bold">Osprey Aether 65</h4>
                  <span className="text-primary font-bold">$380.00</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Mochila técnica con sistema de carga estable para expediciones de larga duración.</p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-sm text-tertiary">inventory_2</span>
                  <span className="text-xs text-on-surface-variant">65 Litros</span>
                </div>
                <button className="w-full py-3 bg-surface rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">Detalles Técnicos</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Service Callout */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="glass-panel rounded-xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">¿Preparando tu primera gran <span className="text-secondary">Expedición?</span></h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-xl">
              No necesitas invertir miles de dólares en equipo propio para comenzar. Ofrecemos alquiler de kits completos con mantenimiento certificado después de cada uso.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Mantenimiento y desinfección técnica.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Asesoramiento por guías de montaña.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Seguro de equipo incluido.</span>
              </li>
            </ul>
            <button className="px-10 py-4 bg-secondary text-on-secondary font-bold rounded-xl hover:scale-105 transition-all">
              Consultar Tarifas de Alquiler
            </button>
          </div>
          <div className="flex-1 w-full h-[400px]">
            <img className="w-full h-full object-cover rounded-xl shadow-2xl" data-alt="neatly organized shelf of mountaineering helmets, boots, and ropes in a professional gear shop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWXnyI0JPPz-Rq8COX1AGOO2Dv7A9Id4IyuipPZ6v1xbvEH_TXhqxOlgk8XRBGwdNDa3M34PTHIfWpkFUXwOEa1eDoMauZ5eEfUd6Ngq-vk1abeY_SHYezEMI81BLUYwoCRG1mWfLN8tYRnHIK6hk8Zz2M-xNw7-_oZnweiCzCcAXOZM6dUAKUag9ot5q2qkUeCDFaT7HX9rBrsKjid6BPlUwbfX7FJ5YDjwI_Tob4A5A1ikWxZOIPzXyX0FkzT-84ZGDeTLNE_30" alt="Rental" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-surface-container py-16">
        <div className="px-8 max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">verified</span>
            <span className="font-headline font-bold uppercase tracking-widest text-sm">Certificación UIAA</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">health_and_safety</span>
            <span className="font-headline font-bold uppercase tracking-widest text-sm">Garantía de Vida</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">travel_explore</span>
            <span className="font-headline font-bold uppercase tracking-widest text-sm">Testado en Los Andes</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">eco</span>
            <span className="font-headline font-bold uppercase tracking-widest text-sm">Equipamiento Sostenible</span>
          </div>
        </div>
      </section>
    </main>
  );
}
