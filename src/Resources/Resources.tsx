import Link from 'next/link'
import capsula from '@/../public/assets/capsulaimg.webp'

import juegosImageMobile from '@/../public/images/mobile/2.jpg'
import ruletaImageMobile from '@/../public/images/mobile/3.jpg'

export const Resources = () => {
  return (
    <section className="bg-[#E9DBF7] flex flex-col items-center justify-center w-full ">
      <div
        className="bg-[#FAF7FE] p-10 sm:p-12 lg:p-20 pb-0 w-full"
        style={{
          borderTopRightRadius: '2.5rem',
          borderTopLeftRadius: '2.5rem',
        }}
        id="recursos"
      >
        <div className="text-center text-[#6E5686] max-w-6xl mx-auto flex flex-col gap-4">
          <h2 className="font-extrabold mb-4 text-6xl text-center md:text-left text-[#6E5686] text-balance">
            Recursos para tu equipo
          </h2>
          <p className="font-extrabold text-3xl text-center md:text-left py-2 mb-2 tracking-wider">
            ¿Por qué es importante fomentar conversaciones en tu equipo?
          </p>
          <p className="font-semibold text-xl text-left py-2 max-w-5xl tracking-wide">
            Las conversaciones auténticas no solo mejoran el rendimiento, sino
            que impulsan el crecimiento personal y profesional de tu equipo.
          </p>
          <p className="text-lg text-[#6E5686] py-2 leading-relaxed mb-6 text-left max-w-5xl font-light tracking-wide">
            Fomentar la comunicación genuina permite construir confianza,
            resolver conflictos y despertar nuevas ideas. Cuando cada miembro se
            siente escuchado y valorado, el compromiso y la colaboración crecen,
            y con ellos, los resultados.
          </p>
        </div>
        <div className="px-4 lg:px-0 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-2">
            <div className="overflow-hidden bg-white rounded shadow ">
              <div className="p-5 flex flex-col space-between justify-between h-full">
                <h3 className="text-3xl font-extrabold text-gray-900 pb-5">
                  {' '}
                  Regalá En Palabras <br />
                  <br />
                </h3>
                <img
                  loading="lazy"
                  fetchPriority="low"
                  className="object-cover rounded-md w-full h-full object-center"
                  src={juegosImageMobile.src}
                  alt="Regalá productos En Palabras"
                />
                <div>
                  <div className="mt-5 ">
                    <h4 className="text-black text-2xl font-bold">
                      {' '}
                      Regalos Empresariales{' '}
                    </h4>
                    <span className="text-lg font-semibold">
                      personalizados o listos para regalar
                    </span>
                  </div>
                  <p className="mt-4 text-base text-gray-600 text-justify">
                    Elegí entre personalizar nuestros juegos de preguntas para
                    crear experiencias únicas, o disfrutá de nuestras opciones
                    ya diseñadas. Un regalo que inspira conexión
                  </p>
                  <Link
                    href="https://mayoristas.enpalabras.com.ar/"
                    target="_blank"
                    className="inline-flex items-center justify-center mt-8 mb-4 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
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
              <div className="p-5 flex flex-col space-between justify-between h-full">
                <div className="pb-5">
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    {' '}
                    Llevá En Palabras a las reuniones de equipo{' '}
                  </h3>
                </div>
                <div className="relative">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    className="object-cover rounded-md w-full h-full object-center"
                    src={ruletaImageMobile.src}
                    alt="Jugá con nuestra Ruleta"
                  />
                </div>
                <div>
                  <div className="mt-5 ">
                    <h4 className="text-black text-2xl font-bold">
                      {' '}
                      Jugá con la Ruleta Online{' '}
                    </h4>
                    <span className="text-lg font-semibold">¡GRATIS!</span>
                  </div>
                  <p className="mt-4 text-base text-gray-600 text-justify">
                    ¡Transformá tus reuniones con nuestra{' '}
                    <b>Ruleta de Preguntas</b>! Rompé el hielo, genera
                    conversaciones auténticas y fortalecé la conexión en tu
                    equipo. Ideal para reuniones virtuales
                  </p>
                  <Link
                    href="https://mayoristas.enpalabras.com.ar/"
                    target="_blank"
                    className="inline-flex items-center justify-center mt-8 mb-4 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
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
        </div>
      </div>
    </section>
  )
}

export default Resources
