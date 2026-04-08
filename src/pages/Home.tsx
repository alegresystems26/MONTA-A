export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[1024px] flex items-center px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-60" data-alt="cinematic wide angle shot of the majestic Andes mountains peaks at dawn with dramatic blue and orange lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKkBsqT-H2-WwNHW7L2SA68GZBv5eIaTEVYYG3c-UXf4P_MBvzDYBLuk6JkvqAwsGk378JTgQLMCTN89lDI4GLilDz9w91BWicJ8mLrQajWsU9SQXsrar-F26ZWHoorikSnC8ImyfZy1mrvjZ8Prs24UiJXLgb-s85V-UsBcaANTnjv6JFN2U8xbQXKwn1GwBKbPGtUM_JRK9EiBuzE7PA-KMgoVqR2AdmdNtPux7KCg_c37mo9LTtHlbEFq-mGRNRlBCwb3pdo5I" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-8">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>mountain_flag</span>
            Exploración Argentina
          </div>
          <h1 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
            LA CUMBRE<br />
            <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">ES EL COMIENZO</span>
          </h1>
          <p className="max-w-xl text-lg text-on-surface-variant font-medium leading-relaxed mb-10">
            La red definitiva para montañistas en Argentina. Desde el Fitz Roy hasta el Aconcagua, conectamos a los apasionados con el equipamiento, el conocimiento y la comunidad más resiliente.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold text-lg hover:scale-105 transition-transform">
              Explorar Expediciones
            </button>
            <button className="px-8 py-4 bg-surface-container-high border border-outline-variant/30 backdrop-blur-md rounded-xl font-bold text-lg hover:bg-surface-bright transition-colors">
              Ver Guías Locales
            </button>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">RECURSOS TÉCNICOS</h2>
            <p className="text-on-surface-variant max-w-md">Todo lo necesario para tu próxima salida, desde alquiler de equipo hasta formación profesional.</p>
          </div>
          <a className="text-primary font-bold flex items-center gap-2 group" href="#">
            Ver todos los recursos 
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Equipamiento Card */}
          <div className="md:col-span-2 md:row-span-2 bg-surface-container rounded-xl overflow-hidden relative group cursor-pointer">
            <img referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="high-end mountain climbing gear laid out on a dark slate background including ropes carabiners and ice axes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2jSlkcRZSvRQpg_uRaLq3hWBL4VcA1cy1jdySyRVQmWUodTGOMKY7qnJ4OKPyp0sIMMBJMP6rC38tdkT96VPkk0Wr_HIFDHdmNNO0ynaSo5QJ7aCN2A5VQSCgTxMXDepL9NVBNPOXiVMlnZ4O2ptsfGQ54an4C7wK7lkofjCUr7dx1DwPdKVjSqNeViZObgMOr1E6pgOR0DfheUWFD0sRvSp9iCBNY36OBRduteuN8VeavK1GvCjdSLHjqrLJQqOxhwPOXGpho-8" alt="Equipamiento" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="material-symbols-outlined text-primary mb-4 text-4xl">handyman</span>
              <h3 className="font-headline text-2xl font-bold mb-2">Equipamiento Pro</h3>
              <p className="text-on-surface-variant text-sm">Reseñas y guías de compra de las mejores marcas para el clima patagónico.</p>
            </div>
          </div>
          {/* Cursos Card */}
          <div className="md:col-span-2 bg-surface-container-high rounded-xl overflow-hidden relative group cursor-pointer">
            <img referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" data-alt="mountain climbing instructor showing students how to tie knots in a snowy alpine environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1omeBNbMGx0nCKC4oEOv55Z6tp5XyrFFquo3wlYyAyfYATsWRRlk6JV5eaFP0jUTb70oYVEvKXmqLsa-4m_2qo9LbUv0DBz0_Z-3MOoN3u5wjpLvOOQXnlEG4g5iXboJYs5gS4t7mr1WbCHNBXvfHXIZUtY-eZ5AIsqIWQRm-4ilf9JzMuqjV9Q6qEKP-3yBAmkNLSLhG9yN_Vb2wERowRE5XM1BvnUYpuHTKDZoFpw3cRhiLXBexKfEgy2QszJPiWjJWj8UIHs0" alt="Cursos" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high to-transparent"></div>
            <div className="absolute inset-0 flex items-center p-8">
              <div className="max-w-xs">
                <h3 className="font-headline text-xl font-bold mb-2">Cursos de Montaña</h3>
                <p className="text-on-surface-variant text-sm">WFR, Orientación y Escalada en Hielo con certificación nacional.</p>
              </div>
            </div>
          </div>
          {/* Alquileres Card */}
          <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between group hover:bg-surface-bright transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-secondary text-3xl">backpack</span>
            <div>
              <h3 className="font-headline text-lg font-bold mb-1">Alquileres</h3>
              <p className="text-on-surface-variant text-xs">Puntos de entrega en Bariloche, El Chaltén y Mendoza.</p>
            </div>
          </div>
          {/* Comunidad Card */}
          <div className="bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between group hover:bg-surface-bright transition-colors cursor-pointer border border-outline-variant/10">
            <span className="material-symbols-outlined text-tertiary text-3xl">photo_camera</span>
            <div>
              <h3 className="font-headline text-lg font-bold mb-1">Galería de la Cumbre</h3>
              <p className="text-on-surface-variant text-xs">Explora expediciones a través de fotos y videos compartidos por nuestra comunidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            <img referrerPolicy="no-referrer" className="rounded-lg shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-1000" data-alt="silhouetted hiker standing on a jagged peak overlooking a sea of clouds at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjJDOSc0-FjwIunheJyEpXt6vZfn6qxMV3Qd2lORHN-WGAKcxmPx5UWDKkH6SYaVqB3gwLXAKvDX5UZTksgvq6OdUUlbfuwk-EJAgA4hWRYziGcaJT6PhRe7SGnw9m5I4u2iGX_iTwoggmaas81lm4ICXn3Bce67IVOGiPjob5bNYqb1nmBYP14FHtQzeD5RpNor0XZOH-JQVH1DNGxpp_uIjdicmLD6WXIU_qRnKZdxBOKKCk57C1PF--tA-MVh3xVECWY4eDlw4" alt="Misión" />
            <div className="absolute -bottom-6 -right-6 bg-surface p-6 rounded-lg shadow-xl z-20 hidden md:block border border-outline-variant/20">
              <p className="font-headline text-4xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">150+</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Rutas Mapeadas</p>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-5xl font-bold mb-8 leading-tight">NUESTRA MISIÓN:<br />REDEFINIR EL LÍMITE</h2>
            <div className="space-y-6 text-on-surface-variant text-lg">
              <p>En <span className="text-on-surface font-bold">MONTAÑA AR</span>, no solo escalamos; construimos una infraestructura de seguridad y conocimiento para que cada salida sea una experiencia transformadora.</p>
              <p>Creemos en el montañismo responsable, en el respeto por los parques nacionales y en el poder de la red para salvar vidas y fomentar el descubrimiento.</p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                <img referrerPolicy="no-referrer" alt="Member 1" className="w-12 h-12 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArFo87oZPTxRmsD_t7ghmeeoNq2thq67Y_3a1wPvev2CbgeqPO4JQLFGahnA1-0F1g8pIvrYtjSuCTgkoYHBtCXKIHNhTSBuPi5J3eS-kKWdjWUE6cWQzG3C6r7jRjr_BBI8mvnufuZsWLhcZWHefLEmuc-DIyouMPv7p-Y1Tf3puypv3WCGX0fDTgjDdT-5vTWwgJJb45Wv5fZnOY0GWXBq2u1_urkeMuVNnnub4-w-278Eb5BClZt73kaau09Lf5koFlzhn56u8" />
                <img referrerPolicy="no-referrer" alt="Member 2" className="w-12 h-12 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVvbrN6tFlgkBM42xaeYu1fZUn5M4Ih91LD_tdp3rApGzT18ieJ35wX11TsiG3pgwjFYjdY2I0dca6mFmWQGuKCI7EaF8r32BLH-K4yEUg68CDc_3gxwta86bRlxsEAt_3i9N1sViPpIpYhfebnqMY-jDQK_hQaN3TRMijPXPx4p8XqLabX85E-03Jsj827NSLR6NlekFJ49E1pzHcAR08Gz-pVNuW6KPPnD1IDcT5M7jeDhJZohW7KN5Y_pDL7RDP9mq9MuLYY5A" />
                <img referrerPolicy="no-referrer" alt="Member 3" className="w-12 h-12 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB5p8T0jMzi9D0OP0OsyhVXEafhthHhhk7D0ygGp_bkGCBk95XobMulF0HhleciUF24qbY2eIrS9MaSm8wV8pFCFdlONCuPo-_myPtWfcHGb08_UCfdxL6uWpSK__e_rTaNDLZr2IAQmbSFcOxF9mh-4wnWG-rBnIBo3FuWJ7wmquubgK6H_hJm34l0_6QnjbQpkkxerdikb3h9Xnpr7StwwzDAXR4IbzaU5G8vClPkI_6-c86J6LDwlJJMg6rlK9UB4atkr4yGGs" />
              </div>
              <p className="text-sm font-medium">Únete a más de <span className="text-primary font-bold">4,000</span> expedicionarios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-12 text-center">FEED DE ACTIVIDAD EN VIVO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feed Item 1 */}
          <div className="bg-surface-container rounded-xl overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold">@patagonia_explorers</p>
                  <p className="text-[10px] uppercase text-on-surface-variant">Hace 2 horas • El Chaltén</p>
                </div>
              </div>
              <p className="text-sm text-on-surface mb-4">"Ascenso exitoso a la Aguja Guillaumet. Condiciones de hielo estables pero viento en aumento hacia la tarde."</p>
            </div>
            <img referrerPolicy="no-referrer" className="w-full h-48 object-cover group-hover:brightness-110 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY3dNTz_Fs0Iy-v6DcW-jYghAe6JWjRDPVbGvBCUOlrKwj5IjrHSxp_LJC2M4CRE_4fte006Spo16OR0KLkXJSWgvfVJXyjFMG-dOgrDx0T6G5OzedHWFKyBzlpcfmaEAwCbIHEMZrjMpz_u8nCxuUINrNz9C-s6TwXo9nLeFhBYQdrasKxlMia276PhD41HFngFTPtSi_S0BoQMYEv3hFaex5vJqJpsS_lTN7yAq8dgKixV9PYwCR1NP9DdefFZJDxWQud08wfXw" alt="Feed 1" />
            <div className="p-4 flex justify-between border-t border-outline-variant/10">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer hover:text-secondary transition-colors">favorite</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer hover:text-primary transition-colors">chat</span>
              </div>
              <span className="text-[10px] font-bold text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded uppercase">Experto</span>
            </div>
          </div>
          {/* Feed Item 2 */}
          <div className="bg-surface-container rounded-xl overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold">@mendoza_summit</p>
                  <p className="text-[10px] uppercase text-on-surface-variant">Hace 5 horas • Aconcagua</p>
                </div>
              </div>
              <p className="text-sm text-on-surface mb-4">"Campo Colera hoy a las 8am. Despejado pero con temperaturas de -20°C. Listos para el intento de cumbre mañana."</p>
            </div>
            <img referrerPolicy="no-referrer" className="w-full h-48 object-cover group-hover:brightness-110 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfU7KbYdbQyOcRLxOUqXdilEeO4GA1WHmPXbSDwezBnUbqOZAxbfMFpeG4JtQ2DgnLurCpL03Vo7yC_yMNOLpQSt5-ntz9xQGvhwsVpNV327LD2mFW8S82co-slEhb7GwnpXnmYvgpg3zgjZsb6ifWUrjqvMRlAMisZYx97wsfRF2u65_uEsPxWhSBPlMuw1B9TNKYIvhm_XfIKiz33CRQ1Zi5Ttpgn1vTMSzjFym6EA0Xzm9_jTn-w_pm5eBPRfLOxlD0NQhrNTI" alt="Feed 2" />
            <div className="p-4 flex justify-between border-t border-outline-variant/10">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer hover:text-secondary">favorite</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer hover:text-primary">chat</span>
              </div>
              <span className="text-[10px] font-bold text-primary-container bg-primary-container/10 px-2 py-0.5 rounded uppercase">Alta Montaña</span>
            </div>
          </div>
          {/* Feed Item 3 */}
          <div className="bg-surface-container rounded-xl overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold">@bariloche_trek</p>
                  <p className="text-[10px] uppercase text-on-surface-variant">Hace 8 horas • Refugio Frey</p>
                </div>
              </div>
              <p className="text-sm text-on-surface mb-4">"Travesía de los filos completada. La nieve está blanda en las caras norte, se recomienda raquetas."</p>
            </div>
            <img referrerPolicy="no-referrer" className="w-full h-48 object-cover group-hover:brightness-110 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATX5A2BAf4rSVGXo_xEAd5rNh9mqj-CX-1q6glQmpa8xV5h3qWxN6mc7pYY_1bpptJwQH2eMui4MrCLd05ugQq8fnJGT2fGj5YUtUBRUEEQt4LUxiJR1UWDLAzEosBSHug3gi6rGyJ1N3vlM2Ld1PGiLZGqmgWiPOecEXSNSboDmXLF_OxaZrxXIzxUA-Hi2u32Unh68QXw6IVVuFIpa8pUdmLspCR6sDmJqibbMxEKZZC0POyc9GZ6xh2-lYZtjHSQHGjjHPUQ5M" alt="Feed 3" />
            <div className="p-4 flex justify-between border-t border-outline-variant/10">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer hover:text-secondary">favorite</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer hover:text-primary">chat</span>
              </div>
              <span className="text-[10px] font-bold text-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded uppercase">Trekking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Membresía Section */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-bold mb-4">NIVELES DE MEMBRESÍA</h2>
            <p className="text-on-surface-variant">Elige tu rol en la montaña y accede a beneficios exclusivos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Base Member */}
            <div className="bg-surface-container p-10 rounded-xl border border-outline-variant/20 hover:border-primary/50 transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-2">Miembro Base</h3>
                  <p className="text-on-surface-variant text-sm">Para entusiastas que están empezando.</p>
                </div>
                <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">cloud</span>
              </div>
              <div className="text-4xl font-bold mb-8">$0 <span className="text-sm text-on-surface-variant font-medium">/ siempre</span></div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Acceso al feed de actividad</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Mapas básicos offline</li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant/50"><span className="material-symbols-outlined text-lg">cancel</span> Alertas climáticas satelitales</li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant/50"><span className="material-symbols-outlined text-lg">cancel</span> Descuentos en refugios</li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-outline-variant font-bold hover:bg-surface-bright transition-colors">Registrarse Gratis</button>
            </div>
            {/* Summit Member */}
            <div className="bg-surface-container-high p-10 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-secondary px-4 py-1 rounded-bl-xl font-bold text-[10px] uppercase tracking-widest text-on-secondary">Recomendado</div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-2">Miembro Cumbre</h3>
                  <p className="text-on-surface-variant text-sm">Para montañistas experimentados.</p>
                </div>
                <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>landscape</span>
              </div>
              <div className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">$2.500 <span className="text-sm text-on-surface-variant font-medium">/ mes</span></div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Todo lo del plan Base</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Alertas climáticas por SMS/Sat</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> 15% Descuento en Alquileres</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Acceso a rutas exclusivas GPS</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold hover:scale-[1.02] transition-transform">Elegir Plan Cumbre</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
