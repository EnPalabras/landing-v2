import Link from 'next/link'
import ruletaimg from '@/../public/assets/ruleta.jpg'
import instagramimg from '@/../public/assets/igimg.jpg'
import capsula from '@/../public/assets/capsula.jpg'

export default function Servicios() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24 w-full ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              <span className="">Otras</span>{' '}
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5 translate-y-2"></span>
                <span className="relative"> formas de conectar </span>
              </span>
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Descubri más sobre cómo podemos ayudarte a conectar con vos mismo
              y con tu equipo
            </p>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
              <div className="relative">
                <Link
                  href="https://www.enpalabras.com.ar/capsula-del-tiempo/"
                  target="_blank"
                  className="block aspect-w-4 aspect-h-3"
                >
                  <img
                    className="object-cover  w-full h-full max-h-[230px] "
                    src={capsula.src}
                    //src="https://acdn.mitiendanube.com/stores/001/705/915/products/buzo-con-pregunta-en-palabras1-f6ce24eba3378b9db116883282838709-640-0.webp"
                    alt=""
                  />
                </Link>

                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                    {' '}
                    Experiencias{' '}
                  </span>
                </div>
              </div>
              <div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {' '}
                  Conectá con tu yo del futuro
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <Link
                    href="https://www.enpalabras.com.ar/capsula-del-tiempo/"
                    target="_blank"
                    className="text-black"
                  >
                    {' '}
                    Capsula del Tiempo{' '}
                  </Link>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Escribile un mensaje a tu yo del futuro y programalo para
                  recibilo en el momento que quieras leerlo.
                </p>
                <Link
                  href="https://www.enpalabras.com.ar/capsula-del-tiempo/"
                  target="_blank"
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Conocer más
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
              <div className="relative">
                <Link
                  href="https://enpalabrasjuegos.com.ar"
                  target="_blank"
                  className="block aspect-w-4 aspect-h-3"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={ruletaimg.src}
                    //src="https://acdn.mitiendanube.com/stores/001/705/915/products/destapados-juego-de-cartas-para-previas1-7fcace62e2e91e71a216685193063177-640-0.webp"
                    alt=""
                  />
                </Link>

                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                    {' '}
                    Juegos{' '}
                  </span>
                </div>
              </div>
              <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {' '}
                Juga con tu equipo{' '}
              </span>
              <p className="mt-5 text-2xl font-semibold">
                <Link
                  href="https://enpalabrasjuegos.com.ar"
                  target="_blank"
                  className="text-black"
                >
                  {' '}
                  Ruleta de Preguntas{' '}
                </Link>
              </p>
              <p className="mt-4 text-base text-gray-600">
                Animate romper el hielo en tus reuniones con nuestra ruleta de
                preguntas y descubrí nuevas formas de conectar.
              </p>
              <Link
                href="https://www.enpalabrasjuegos.com.ar/"
                target="_blank"
                className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
              >
                Conocer más
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
              <div className="relative">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src={instagramimg.src}
                    // src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
                    alt=""
                  />
                </a>

                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                    {' '}
                    Comunidad{' '}
                  </span>
                </div>
              </div>
              <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {' '}
                Conectá con En Palabras{' '}
              </span>
              <p className="mt-5 text-2xl font-semibold">
                <a href="#" title="" className="text-black">
                  {' '}
                  Seguinos en Instagram
                </a>
              </p>
              <p className="mt-4 text-base text-gray-600">
                Conocé todas las novedades, beneficios y experiencias que
                creamos para vos.
                <br />
                <br />
              </p>
              <Link
                href="https://www.instagram.com/enpalabrass"
                target="_blank"
                className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
              >
                Conocer más
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
