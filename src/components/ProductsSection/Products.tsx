import {
  SheetAnoNuevo,
  SheetDesconectados,
  SheetDescubriendo,
  SheetDestapados,
  SheetJournal,
  SheetPersonalizadas,
} from './SheetsData'

export default function Products() {
  return (
    <section className="bg-[#6E5686] w-full">
      <div
        className="hidden md:block py-10  
        sm:pt-12 lg:pt-16 pb-12 w-full rounded-b-3xl bg-[#FAF7FE]"
        style={{
          borderBottomRightRadius: '2.5rem',
          borderBottomLeftRadius: '2.5rem',
        }}
        id="productos"
      >
        <div className="px-4 mx-auto sm:px-12 lg:px-16 ">
          <h3 className="leading-tight text-[#6E5686] text-center tracking-wide text-2xl font-semibold">
            Descubrí nuestros productos
          </h3>

          <div
            className="grid transition-all duration-300 grid-cols-1 gap-6 mx-auto 
        mt-4 lg:mt-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
          >
            <div className="overflow-hidden bg-[#FAF7FE] rounded shadow">
              <div className="p-5 ">
                <div className="relative border-b border-gray-200">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    className="object-cover w-full h-full"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-regalo-empresas1-57ebcbfc96842f074916685182180725-640-0.webp"
                    alt="Desconectados para empresas"
                  />

                  <div className="absolute top-4 left-4 ">
                    <span
                      className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-[#FAF7FE] rounded-full"
                    >
                      {' '}
                      Juegos{' '}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {' '}
                    Personalizá tu Juego{' '}
                  </span>
                  <p className="mt-5 text-2xl font-semibold">
                    {' '}
                    Cartas Personalizadas{' '}
                  </p>
                  <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                    Te invitamos a crear cartas con preguntas personalizadas
                    sobre la cultura o experiencia de tu marca. Nos compartís tu
                    idea y el equipo de En palabras la transforma una charla
                    amigable y profunda.
                  </p>
                  <SheetPersonalizadas />
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-[#FAF7FE] rounded shadow">
              <div className="p-5 ">
                <div className="relative border-b border-gray-200">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    className="object-cover w-full h-full"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp"
                    alt="Juego de Cartas Desconectados"
                  />

                  <div className="absolute top-4 left-4 ">
                    <span
                      className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-[#FAF7FE] rounded-full"
                    >
                      {' '}
                      Juegos{' '}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {' '}
                    Jugá y Conectá{' '}
                  </span>
                  <p className="mt-5 text-2xl font-semibold"> Desconectados </p>
                  <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                    Es una invitación a encontrarnos con nuestra familia, pareja
                    y amistades. Las cartas que encontraran tienen el objetivo
                    de funcionar como disparadores para compartir creencias y
                    sensaciones que, muchas veces, el ritmo de vida nos lo
                    impide.
                  </p>
                  <SheetDesconectados />
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-[#FAF7FE] rounded shadow">
              <div className="p-5 ">
                <div className="relative border-b border-gray-200">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    className="object-scale-down "
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/img_3580-f1782d1433931301bc17195816596939-1024-1024.webp"
                    alt="Juego de Cartas Descubriendo"
                  />

                  <div className="absolute top-4 left-4 ">
                    <span
                      className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-[#FAF7FE] rounded-full"
                    >
                      {' '}
                      Juegos{' '}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {' '}
                    Juga con los mas chicos{' '}
                  </span>
                  <p className="mt-5 text-2xl font-semibold"> Descubriendo </p>
                  <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                    Conectar con los/as niños/as no siempre es fácil, y la
                    rutina puede complicar estos momentos. Descubriendo te
                    invita a compartir preguntas que abren oportunidades para
                    conocerse, aprender y desarrollar habilidades mientras
                    juegan.
                  </p>
                  <SheetDescubriendo />
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-[#FAF7FE] rounded shadow">
              <div className="p-5 ">
                <div className="relative border-b border-gray-200">
                  <img
                    className="object-scale-down"
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/destapados-juego-de-cartas-para-previas1-7fcace62e2e91e71a216685193063177-1024-1024.webp"
                    alt="Destapados Juego de Cartas para Previas"
                  />

                  <div className="absolute top-4 left-4 ">
                    <span
                      className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-[#FAF7FE] rounded-full"
                    >
                      {' '}
                      Juegos{' '}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {' '}
                    EXPLORÁ Y DESTAPÁ TABÚES
                  </span>
                  <p className="mt-5 text-2xl font-semibold"> Destapados </p>
                  <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                    Destapados es un disparador de encuentros festivos e
                    íntimos, corporales y emocionales. Las cartas buscan
                    destapar los estereotipos y prejuicios que se acarrean,
                    invitándonos a sumergirnos libremente en nuestros
                    pensamientos, emociones, preferencias y, si así lo desean,
                    su cuerpo.
                  </p>
                  <SheetDestapados />
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-[#FAF7FE] rounded shadow">
              <div className="p-5 ">
                <div className="relative border-b border-gray-200">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    className="object-scale-down"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/ano-nuevo-21-f8bd8bdad5b29c1ad216679475830811-640-0.webp"
                    alt="Juego de Cartas Año Nuevo"
                  />

                  <div className="absolute top-4 left-4 ">
                    <span
                      className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-[#FAF7FE] rounded-full"
                    >
                      {' '}
                      Juegos{' '}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {' '}
                    Hacé tu balance{' '}
                  </span>
                  <p className="mt-5 text-2xl font-semibold">
                    {' '}
                    Edición Año Nuevo{' '}
                  </p>
                  <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                    Es una invitación a reflexionar sobre el año que pasó para
                    recibir el nuevo con mayor conciencia. Las cartas funcionan
                    como disparadores para revisar lo vivido, cerrar etapas y
                    conectar con los deseos y objetivos para el próximo ciclo.
                  </p>
                  <SheetAnoNuevo />
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-[#FAF7FE] rounded shadow">
              <div className="p-5">
                <div className="relative border-b border-gray-200">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    className="object-scale-down "
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/journal-3_-c6e7033b0fcbc780b017012740186645-640-0.webp"
                    alt="Journal de En Palabras"
                  />

                  <div className="absolute top-4 left-4 ">
                    <span
                      className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-[#FAF7FE] rounded-full"
                    >
                      {' '}
                      Journal{' '}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {' '}
                    Conectá con vos mismo{' '}
                  </span>
                  <p className="mt-5 text-2xl font-semibold"> Journal </p>
                  <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                    Es un diario personal que te invita a dialogar sinceramente
                    con vos mismo. Incluye preguntas diarias y dinámicas para
                    ayudarte a salir del <i>"modo automático"</i> y embarcarte
                    en un viaje de autoconocimiento profundo.
                  </p>
                  <SheetJournal />
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>

      <div
        className="block md:hidden antialiased bg-[#FAF7FE] pt-12 pb-12 w-full
      rounded-b-3xl"
        style={{
          borderBottomRightRadius: '2.5rem',
          borderBottomLeftRadius: '2.5rem',
        }}
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
          <h3 className="leading-tight text-[#6E5686] text-center text-xl tracking-wide mb-8 font-semibold">
            Descubrí nuestros productos
          </h3>

          <div className="grid gap-4 grid-cols-1">
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-8 py-4">
              <span className="text-lg font-bold text-gray-900 ">
                Cartas Personalizadas
              </span>
              <SheetPersonalizadas />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-8 py-4">
              <span className="text-lg font-bold text-gray-900 ">
                Desconectados
              </span>
              <SheetDesconectados />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-8 py-4">
              <span className="text-lg font-bold text-gray-900 ">
                Descubriendo
              </span>
              <SheetDescubriendo />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-8 py-4">
              <span className="text-lg font-bold text-gray-900 ">Journal</span>
              <SheetJournal />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-8 py-4">
              <span className="text-lg font-bold text-gray-900 ">
                Destapados
              </span>
              <SheetDestapados />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-8 py-4">
              <span className="text-lg font-bold text-gray-900 ">
                Año Nuevo
              </span>
              <SheetAnoNuevo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
