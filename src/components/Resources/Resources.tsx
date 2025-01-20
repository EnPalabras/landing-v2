import Link from 'next/link'
import juegosImageMobile from '@/../public/images/mobile/2.jpg'
import ruletaImageMobile from '@/../public/images/mobile/3.jpg'

export const Resources = () => {
  return (
    <section className="bg-[#E9DBF7] flex flex-col items-center justify-center w-full ">
      <div
        className="bg-[#FAF7FE] px-4 py-10 sm:py-12 lg:p-20 pb-0 w-full shadow-2xl "
        style={{
          borderTopRightRadius: '3rem',
          borderTopLeftRadius: '3rem',
          fontFamily: 'GothamRounded, sans-serif',
        }}
        id="recursos"
      >
        <div className="text-center text-[#6E5686] max-w-6xl mx-auto flex flex-col gap-4">
          <h2
            className="font-extrabold mb-4 text-6xl text-center lg:text-left text-[#6E5686] text-balance"
            style={{
              fontFamily: 'GothamUltra, sans-serif',
            }}
          >
            Recursos para tu equipo
          </h2>
          <p
            className="font-extrabold text-3xl text-center lg:text-left py-2 mb-2 tracking-wider"
            style={{
              fontFamily: 'GothamUltra, sans-serif',
            }}
          >
            ¿Por qué es importante fomentar conversaciones en tu equipo?
          </p>
          <p className="font-semibold text-xl py-2 max-w-5xl tracking-wide text-justify lg:text-left text-pretty">
            Las conversaciones auténticas no solo mejoran el rendimiento, sino
            que impulsan el crecimiento personal y profesional de tu equipo.
          </p>
          <p
            className="text-lg text-[#6E5686] py-2 leading-relaxed mb-6 text-justify lg:text-left 
          max-w-5xl tracking-wide text-pretty"
          >
            Fomentar la comunicación genuina permite construir confianza,
            resolver conflictos y despertar nuevas ideas. Cuando cada miembro se
            siente escuchado y valorado, el compromiso y la colaboración crecen,
            y con ellos, los resultados.
          </p>
        </div>
        <div
          className="lg:px-0 mx-auto max-w-6xl"
          style={{
            fontFamily: 'GothamRounded, sans-serif',
          }}
        >
          <div className="grid grid-cols-1 gap-6 mx-auto mt-6  lg:grid-cols-2">
            <div className="overflow-hidden bg-white rounded shadow ">
              <div className="p-5 flex flex-col space-between justify-between h-full">
                <h3
                  className="text-3xl  font-extrabold text-[#6E5686] pb-5 pt-2"
                  style={{
                    fontFamily: 'GothamUltra, sans-serif',
                  }}
                >
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
                  <h3
                    className="text-3xl py-2 font-extrabold text-[#6E5686]"
                    style={{
                      fontFamily: 'GothamUltra, sans-serif',
                    }}
                  >
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
