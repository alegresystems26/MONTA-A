export default function Cursos() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center px-8 mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-60" data-alt="expansive majestic snow-capped mountain range at dawn with misty valleys and soft purple and blue light gradients" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxNaf3bNGQe6jLGPCGzCQg7dFGCEdJaoii4kDpC8BoFbk8Hdx_PxfJSpHVGdMZrT5xQ_ZM-HEqxz-vf2R7Bne54AD-tPQINsWUa0Tg20WndTu0OSYrPkyg1Uphz71wiuDm526W3obzxZ0mAp9fZK6SZb8QJWI0YRooID4zWCUUZvjrH7gemz8Y7-Fl3BWftCwLUulGASYSESRFOwd1DcYLj-275zohKchWnhPIvcisTRtWI1trUfcc1HKVEjViK0KjCoWerOGKYeU" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-6 leading-none">
            FORJANDO EL <br /><span className="text-primary">CONOCIMIENTO</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl font-body leading-relaxed">
            Capacitación técnica de alto nivel. Desde los primeros pasos en el sendero hasta la maestría en paredes de roca y terrenos de avalancha.
          </p>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="px-8 mb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight">NUESTRA ACADEMIA</h2>
          <div className="flex gap-4">
            <span className="bg-surface-container-high px-4 py-1 rounded-full text-xs font-label uppercase tracking-widest text-on-surface-variant border border-outline-variant/10">Filtros</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Rock Climbing Course */}
          <div className="md:col-span-8 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-high transition-all duration-300 hover:bg-surface-bright">
            <div className="relative h-[400px]">
              <img referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" data-alt="climber on a sheer granite cliff face in midday sun, focused expression with climbing chalk on hands and gear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDZPyiXkDtfT3LsqRrnNzGcH6GNfS7cTYOXn8nK_xattTMyESBgenng927aXp2CFgr8qccWGHQItOFBpKGHGMv7WKvOQbd6wvy1scqfHnc_LEyL2S6mAeYQar87GDmPbOe7Px01saBbF0bz0weLFFVNUcLm74hqK8DUxNVlJe3kMLlRefJ2WzEeJ1iYdhJUKI39OXhWnKGGJS43d84cBjF_5GmhhtXlWemnt-2HYSaViiKFDSc74PpCPj63qmwVs7xuULx8PMnrmo" alt="Climbing" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase">Intermedio</span>
                <h3 className="text-4xl font-headline font-bold mb-2">Escalada en Roca</h3>
                <p className="text-on-surface-variant line-clamp-2 max-w-lg mb-4">Maniobras de cuerda, sistemas de seguridad y técnicas de progresión en granito y caliza.</p>
                <div className="flex gap-6 items-center">
                  <span className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">schedule</span> 4 Semanas</span>
                  <span className="flex items-center gap-2 text-sm text-primary"><span className="material-symbols-outlined text-sm">workspace_premium</span> Certificación AR</span>
                </div>
              </div>
            </div>
          </div>
          {/* Mountaineering Initiation */}
          <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-high transition-all duration-300 hover:bg-surface-bright">
            <div className="relative h-full flex flex-col">
              <div className="h-64 overflow-hidden">
                <img referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" data-alt="line of mountaineers roped together ascending a snowy ridge under a clear blue sky with sharp mountain peaks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv1VgluFZhnZKjEyaraQP2Dl4g3rm-ldlpjNxBB0s5ymxrpZEtmnYeOmBrZ9vxNUdxa3IQxu0ScNT1Bzz2c5tJhmdpumkKxziadMXHivKWpE6qSfu0WJxSBX92UaP4ScVCU55BpRd1oq2iKweC6oh-FP7WAauTcwmyMnMI0r5i2i4MEYFi7ix_0vhQ3UP0gEEaRNRoW-Ef4msPg17jXKPvz4n8T6bdvlvoGP5JwWnr6JmcFohDIusPtU4KAvp_i4gvStsw0DtBQyg" alt="Initiation" />
              </div>
              <div className="p-6 flex-grow">
                <span className="inline-block bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase">Principiante</span>
                <h3 className="text-2xl font-headline font-bold mb-2">Iniciación al Montañismo</h3>
                <p className="text-on-surface-variant text-sm mb-6">El primer paso para conquistar las grandes cumbres. Equipamiento, orientación y climatología.</p>
                <button className="w-full py-3 bg-surface-variant border border-outline-variant/20 rounded-lg text-primary-fixed font-bold text-sm hover:bg-surface-container-highest transition-colors">
                  Ver Programa
                </button>
              </div>
            </div>
          </div>
          {/* Avalanche Safety */}
          <div className="md:col-span-12 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-high transition-all duration-300 hover:bg-surface-bright">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block bg-error-container text-on-error-container px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase">Seguridad Crítica</span>
                <h3 className="text-4xl font-headline font-bold mb-4 leading-tight">Seguridad en Avalanchas <br />(AIARE Nivel 1)</h3>
                <p className="text-on-surface-variant mb-8 text-lg">Aprendé a leer el manto nivoso, gestionar el riesgo y ejecutar rescates de alta velocidad. Esencial para esquí de montaña y expediciones invernales.</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-surface-container-low rounded-lg">
                    <div className="text-primary text-2xl font-bold">15</div>
                    <div className="text-xs text-on-surface-variant uppercase">Cupos Máximos</div>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-lg">
                    <div className="text-primary text-2xl font-bold">96h</div>
                    <div className="text-xs text-on-surface-variant uppercase">Teoría + Práctica</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-xl font-bold w-fit transition-transform hover:scale-105">
                  Inscribirse Ahora
                </button>
              </div>
              <div className="relative overflow-hidden min-h-[300px]">
                <img referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700" data-alt="rescue team training in deep snow with transceivers and probes in a dramatic alpine winter landscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNYPeyvbcEMkFY8iy4SVjk6Yx1nQfcyKItrnTSIIU-PKZWYah31-vDpNcTgw0ffHCNxYv-HvfumW-GizXXamp3b4ZJXg6qH6hgMe0KZCSAW_D-tEpdh3Nfk3GiHI8_D3Va4EeRLhac-fq9mOnrYLANdhbkAl5VwM0RS67y1zb3XhUbc0PUBtyS67g5EVaOCSFDxyJ0B7aEUFQop4VARjoyvD_eNS5hQNR2tMy2Qex_VB0MQT5YH5ve1BFhvFNsYOZBaYrkizkb22o" alt="Avalanche" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-surface-container-high hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-4">CALENDARIO DE FECHAS</h2>
            <p className="text-on-surface-variant">Próximas capacitaciones disponibles para la temporada actual.</p>
          </div>
          <div className="space-y-4">
            {/* Event 1 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container rounded-xl border border-outline-variant/10 transition-all hover:bg-surface-container-high">
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <div className="text-center min-w-[60px]">
                  <div className="text-primary font-headline text-3xl font-bold">12</div>
                  <div className="text-xs uppercase text-on-surface-variant">OCT</div>
                </div>
                <div>
                  <h4 className="font-bold text-lg font-headline">Iniciación al Montañismo</h4>
                  <span className="text-sm text-on-surface-variant">Lugar: Refugio Frey, Bariloche</span>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="hidden lg:block">
                  <div className="text-xs uppercase text-on-surface-variant mb-1">Disponibilidad</div>
                  <div className="w-32 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-primary"></div>
                  </div>
                </div>
                <button className="text-primary border border-primary/20 hover:bg-primary/10 px-6 py-2 rounded-lg font-bold text-sm transition-colors">Reservar Lugar</button>
              </div>
            </div>
            {/* Event 2 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container rounded-xl border border-outline-variant/10 transition-all hover:bg-surface-container-high">
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <div className="text-center min-w-[60px]">
                  <div className="text-secondary font-headline text-3xl font-bold">25</div>
                  <div className="text-xs uppercase text-on-surface-variant">OCT</div>
                </div>
                <div>
                  <h4 className="font-bold text-lg font-headline">Seguridad en Avalanchas I</h4>
                  <span className="text-sm text-on-surface-variant">Lugar: Valle de las Leñas</span>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="hidden lg:block">
                  <div className="text-xs uppercase text-on-surface-variant mb-1">Disponibilidad</div>
                  <div className="w-32 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                    <div className="w-[30%] h-full bg-secondary"></div>
                  </div>
                </div>
                <button className="text-secondary border border-secondary/20 hover:bg-secondary/10 px-6 py-2 rounded-lg font-bold text-sm transition-colors">Últimos Cupos</button>
              </div>
            </div>
            {/* Event 3 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container rounded-xl border border-outline-variant/10 transition-all hover:bg-surface-container-high">
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <div className="text-center min-w-[60px]">
                  <div className="text-primary font-headline text-3xl font-bold">05</div>
                  <div className="text-xs uppercase text-on-surface-variant">NOV</div>
                </div>
                <div>
                  <h4 className="font-bold text-lg font-headline">Escalada en Roca Nivel II</h4>
                  <span className="text-sm text-on-surface-variant">Lugar: Sierra de la Vigilancia</span>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="hidden lg:block">
                  <div className="text-xs uppercase text-on-surface-variant mb-1">Disponibilidad</div>
                  <div className="w-32 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-primary"></div>
                  </div>
                </div>
                <button className="text-primary border border-primary/20 hover:bg-primary/10 px-6 py-2 rounded-lg font-bold text-sm transition-colors">Inscribirse</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="px-8 py-32">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-headline font-bold mb-6">NIVELES DE CERTIFICACIÓN</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">Nuestros estándares siguen las normativas internacionales de seguridad y pedagogía en montaña.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="relative pt-8">
            <div className="absolute top-0 left-0 text-6xl font-headline font-bold text-surface-variant -z-10 opacity-40">01</div>
            <h5 className="text-xl font-bold mb-4 font-headline uppercase tracking-wider text-primary">Bronce: Base</h5>
            <p className="text-on-surface-variant text-sm leading-relaxed">Fundamentos de senderismo, equipo técnico básico y primeros auxilios en zonas remotas.</p>
          </div>
          <div className="relative pt-8">
            <div className="absolute top-0 left-0 text-6xl font-headline font-bold text-surface-variant -z-10 opacity-40">02</div>
            <h5 className="text-xl font-bold mb-4 font-headline uppercase tracking-wider text-tertiary">Plata: Técnico</h5>
            <p className="text-on-surface-variant text-sm leading-relaxed">Dominio de cuerdas, escalada deportiva, progresión en glaciares y orientación avanzada.</p>
          </div>
          <div className="relative pt-8">
            <div className="absolute top-0 left-0 text-6xl font-headline font-bold text-surface-variant -z-10 opacity-40">03</div>
            <h5 className="text-xl font-bold mb-4 font-headline uppercase tracking-wider text-secondary">Oro: Experto</h5>
            <p className="text-on-surface-variant text-sm leading-relaxed">Liderazgo de expediciones, escalada tradicional, rescate técnico y gestión de avalanchas.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 mb-24">
        <div className="bg-primary/10 rounded-3xl p-12 md:p-24 text-center border border-primary/20 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/20 rounded-full blur-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 relative z-10">¿DUDAS SOBRE TU NIVEL?</h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto relative z-10">Agendá una llamada gratuita con uno de nuestros instructores certificados para armar tu plan de entrenamiento personalizado.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">Hablar con un Guía</button>
            <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-colors">Descargar Prospecto 2024</button>
          </div>
        </div>
      </section>
    </main>
  );
}
