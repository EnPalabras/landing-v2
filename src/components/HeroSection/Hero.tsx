'use client'

import { Button } from '@/components/ui/button'
import epContenido1 from '@/../public/assets/contenido/epContenido1.webp'

export default function HeroSectionImageWithReviews() {
  return (
    <>
      <section id="hero-section" className="w-full bg-zinc-100">
        <div className="container py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div className="flex flex-col">
              <div className="flex justify-center lg:justify-start">
                <a
                  target="_blank"
                  href="https://www.enpalabras.com.ar/productos/descubriendo-juego-de-cartas-para-ninos/"
                  className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-6 text-sm text-gray-700 bg-white rounded-full  hover:bg-gray-200"
                >
                  <span className="text-xs bg-purple-600 rounded-full text-white px-4 py-1.5 mr-3">
                    Nuevo
                  </span>
                  <span className="text-sm font-medium">
                    Juego para Niños y Adultos <b>Descubriendo</b>
                  </span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl text-center lg:text-start text-balance">
                <span className="text-purple-800">No </span> somos un regalo
                corporativo
              </h1>
              <p className="mt-4 text-lg text-center lg:text-start max-w-3xl mx-auto">
                Somos la conexión que inspira a tu equipo a{' '}
                <b>forjar relaciones más profundas, genuinas y empáticas</b>.
                Fomentamos la colaboración y la creatividad a través de nuestras
                experiencias lúdicas
              </p>
              <div className="mt-7 grid grid-cols-2 place-items-center gap-3 w-full sm:inline-flex justify-center lg:justify-start">
                <a href="#contacto" className="">
                  {' '}
                  <Button size={'lg'}>Contactanos</Button>
                </a>
                <a href="#experiencias">
                  {' '}
                  <Button variant={'outline'} size={'lg'}>
                    Experiencias
                  </Button>
                </a>
              </div>
              <div className="mt-4 lg:mt-6 flex flex-row justify-center lg:justify-start">
                <div className="py-5 flex flex-col justify-center">
                  <div className="flex space-x-1 justify-center lg:justify-start">
                    {star}
                    {star}
                    {star}
                    {star}
                    {star}
                  </div>
                  <p className="mt-3 text-sm">
                    <span className="font-bold">4.9</span> / 5 - más de 5k
                    reviews
                  </p>
                  <div className="mt-4 mx-auto lg:mx-0">
                    <svg
                      id="svg5204"
                      x="0px"
                      y="0px"
                      viewBox="1338.7 1396.4 112.83284 46.938464"
                      width="62"
                      height="26"
                      enableBackground="new 1338.7 1396.4 150 135.8"
                    >
                      <defs id="defs106" />

                      <g
                        id="g85"
                        transform="matrix(0.7417867,0,0,0.7417867,346.53767,305.88326)"
                      >
                        <g id="g74">
                          <path
                            d="m 1378.1,1504.2 h 1.4 v 28 h -5.3 v -24.6 c 0,-0.8 1.7,-3.4 3.9,-3.4 z"
                            id="path60"
                            style={{ fill: '#2d3277' }}
                          />

                          <path
                            d="m 1407.1,1510.4 c -2.6,0 -4.6,1.1 -6,3.3 v -9.5 h -0.6 v 0 c -2.6,0 -4,1.4 -4.7,2.6 v -0.2 16.1 c 0,6.3 3.3,9.5 9.9,9.5 6.6,-0.1 9.8,-3.7 9.8,-10.7 0,-7.3 -2.8,-10.9 -8.4,-11.1 z m -1.6,17.2 c -3,0 -4.5,-2.2 -4.4,-6.4 0.2,-4.1 1.6,-6.1 4.5,-6.1 2.9,0 4.3,2 4.5,6.1 0,4.3 -1.6,6.4 -4.6,6.4 z"
                            id="path62"
                            style={{ fill: '#2d3277' }}
                          />

                          <path
                            d="m 1418.6,1521.2 c 0.2,-6.8 3.5,-10.6 10.6,-10.6 h 1.6 v 5.5 h -2.5 c -3,0 -4.3,1.9 -4.3,5 v 11 h -5.4 z"
                            id="path64"
                            style={{ fill: '#2d3277' }}
                          />

                          <g id="g68">
                            <path
                              d="m 1439.2,1526.7 c 0.9,0.8 2.1,1.2 3.7,1.2 1.1,0 2.1,-0.3 2.9,-0.9 0.8,-0.6 1.3,-1.2 1.5,-1.8 h 5 c -0.8,2.5 -2,4.2 -3.7,5.3 -1.7,1.1 -3.6,1.6 -6,1.6 -1.6,0 -3.1,-0.3 -4.4,-0.8 -1.3,-0.5 -2.4,-1.3 -3.3,-2.2 -0.9,-1 -1.6,-2.1 -2.1,-3.4 -0.5,-1.3 -0.7,-2.8 -0.7,-4.4 0,-1.5 0.3,-3 0.8,-4.3 0.5,-1.3 1.2,-2.5 2.1,-3.4 0.9,-1 2,-1.7 3.3,-2.3 1.3,-0.6 2.7,-0.8 4.3,-0.8 1.7,0 3.3,0.3 4.6,1 1.3,0.7 2.4,1.6 3.2,2.7 0.8,1.1 1.4,2.4 1.8,3.9 0.4,1.4 0.5,3 0.4,4.6 h -14.9 c 0.2,1.9 0.7,3.2 1.5,4 z m 6.4,-10.8 c -0.7,-0.7 -1.7,-1.1 -3.1,-1.1 -0.9,0 -1.7,0.2 -2.3,0.5 -0.6,0.3 -1.1,0.7 -1.4,1.1 -0.4,0.5 -0.6,0.9 -0.8,1.4 -0.2,0.5 -0.2,1 -0.3,1.4 h 9.2 c -0.1,-1.5 -0.6,-2.6 -1.3,-3.3 z"
                              id="path66"
                              style={{ fill: '#2d3277' }}
                            />
                          </g>

                          <rect
                            x="1385.2"
                            y="1504.2"
                            width="5.3000002"
                            height="4.8000002"
                            id="rect70"
                            style={{ fill: '#2d3277' }}
                          />

                          <rect
                            x="1385.2"
                            y="1511.4"
                            width="5.3000002"
                            height="20.700001"
                            id="rect72"
                            style={{ fill: '#2d3277' }}
                          />
                        </g>

                        <g id="g83">
                          <path
                            id="path96_8_"
                            d="m 1481.9,1493.1 c -0.9,1 -2.1,1.6 -3.6,1.6 -1.5,0 -2.7,-0.6 -3.6,-1.6 -0.9,-1 -1.2,-2.7 -1.2,-4.7 0,-2.1 0.4,-3.6 1.2,-4.6 0.9,-1 2.1,-1.6 3.6,-1.6 1.5,0 2.7,0.6 3.6,1.6 0.9,1 1.2,2.7 1.2,4.6 0,1.9 -0.3,3.5 -1.2,4.7 z m 4.2,-12.4 c -1.6,-2.1 -4.3,-3.3 -7.8,-3.3 -3.4,0 -6.2,1 -7.8,3.3 -1.6,2.1 -2.6,4.7 -2.6,7.6 0,3 0.9,5.6 2.6,7.6 1.6,2.1 4.3,3.2 7.8,3.2 3.4,0 6.2,-1 7.8,-3.2 1.6,-2.1 2.6,-4.7 2.6,-7.6 0.1,-2.8 -0.8,-5.4 -2.6,-7.6"
                            style={{ fill: '#2d3277' }}
                          />

                          <path
                            id="path108_8_"
                            d="m 1460.1,1493.1 c -0.7,1 -1.9,1.6 -3.4,1.6 -1.5,0 -2.7,-0.6 -3.3,-1.6 -0.7,-1.2 -1,-2.7 -1,-4.7 0,-1.8 0.3,-3.2 1,-4.3 0.7,-1.2 1.8,-1.8 3.4,-1.8 1,0 1.9,0.3 2.7,0.9 1.2,1 1.9,3 1.9,5.6 -0.3,1.8 -0.5,3.3 -1.3,4.3 z m 6.2,-21.8 c 0,0 -5.4,-0.6 -5.4,3.7 v 5.7 c -0.6,-0.9 -1.3,-1.6 -2.4,-2.3 -0.9,-0.6 -2.1,-0.7 -3.3,-0.7 -2.7,0 -4.8,1 -6.5,3 -1.6,1.9 -2.4,4.8 -2.4,8.4 0,3 0.7,5.6 2.4,7.3 1.6,1.9 4.8,2.7 7.6,2.7 9.9,0 9.7,-8.4 9.7,-8.4 l 0.3,-19.4"
                            style={{ fill: '#2d3277' }}
                          />

                          <path
                            id="path98_8_"
                            d="m 1439.7,1490.6 c 0,1.8 -0.6,3 -1.5,3.7 -1,0.6 -2.1,1 -3.2,1 -0.7,0 -1.3,-0.1 -1.8,-0.6 -0.5,-0.5 -0.7,-1 -0.7,-1.9 0,-1 0.4,-1.8 1.2,-2.3 0.4,-0.3 1.3,-0.6 2.4,-0.7 l 1.2,-0.3 c 0.6,-0.1 1,-0.3 1.5,-0.3 0.3,-0.1 0.7,-0.3 1,-0.4 z m 2.7,-11.7 c -1.8,-0.9 -3.7,-1.3 -6,-1.3 -3.4,0 -5.9,0.9 -7.3,2.7 -0.9,1.2 -1.3,2.6 -1.5,4.3 h 5.1 c 0.1,-0.7 0.4,-1.3 0.7,-1.8 0.6,-0.6 1.5,-0.9 2.7,-0.9 1.2,0 1.9,0.1 2.6,0.4 0.6,0.3 0.9,0.9 0.9,1.8 0,0.7 -0.4,1.2 -1.2,1.5 -0.4,0.1 -1.2,0.3 -2.1,0.4 l -1.8,0.1 c -2.1,0.3 -3.6,0.7 -4.7,1.3 -1.9,1 -2.9,3 -2.9,5.4 0,1.9 0.6,3.4 1.8,4.5 1.2,1 2.7,1.5 4.6,1.6 11.7,0.4 11.6,-6.2 11.6,-7.5 v -7.6 c 0.1,-2.2 -0.7,-4 -2.5,-4.9"
                            style={{ fill: '#2d3277' }}
                          />

                          <path
                            id="path100_8_"
                            d="m 1415.9,1482.2 c 1.3,0 2.3,0.4 3,1.2 0.4,0.6 0.7,1.3 0.7,2.1 h 5.7 c -0.3,-2.9 -1.3,-5 -3,-6 -1.6,-1.2 -3.9,-1.6 -6.6,-1.6 -3.2,0 -5.7,0.9 -7.5,2.9 -1.8,2 -2.7,4.7 -2.7,8.1 0,3.2 0.7,5.6 2.4,7.5 1.6,1.9 4.2,2.9 7.6,2.9 3.4,0 6,-1.2 7.8,-3.4 1,-1.5 1.6,-3 1.8,-4.7 h -5.7 c -0.1,1 -0.4,1.9 -1,2.6 -0.6,0.6 -1.5,1 -2.9,1 -1.8,0 -3.2,-0.9 -3.7,-2.6 -0.3,-0.9 -0.6,-2.1 -0.6,-3.6 0,-1.5 0.1,-2.9 0.6,-3.7 0.9,-1.8 2.1,-2.7 4.1,-2.7"
                            style={{ fill: '#2d3277' }}
                          />

                          <path
                            id="path102_8_"
                            d="m 1404,1477.7 c -11.9,0 -11.1,10.5 -11.1,10.5 v 10.6 h 5.4 v -9.9 c 0,-1.6 0.1,-2.9 0.6,-3.6 0.7,-1.3 2.1,-2.1 4.3,-2.1 0.1,0 0.3,0 0.6,0 0.3,0 0.6,0 0.9,0.1 v -5.4 c -0.3,0 -0.4,0 -0.4,0 -0.1,-0.2 -0.1,-0.2 -0.3,-0.2"
                            style={{ fill: '#2d3277' }}
                          />

                          <path
                            id="path104_8_"
                            d="m 1377.2,1483.2 c 0.7,-0.7 1.8,-1.2 3.2,-1.2 1.2,0 2.3,0.3 3.2,1 0.9,0.7 1.3,1.8 1.3,3.2 h -9.2 c 0.3,-1.2 0.7,-2.2 1.5,-3 z m 7.2,9.9 c -0.1,0.3 -0.4,0.6 -0.7,0.7 -0.7,0.6 -1.8,0.7 -3,0.7 -1.2,0 -2.1,-0.1 -2.9,-0.7 -1.3,-0.7 -2.1,-2.3 -2.1,-4.2 h 14.8 c 0,-1.8 0,-3.2 -0.1,-4 -0.3,-1.6 -0.7,-3 -1.6,-4.2 -0.9,-1.3 -2.1,-2.4 -3.4,-3 -1.3,-0.6 -3,-0.9 -4.8,-0.9 -3,0 -5.4,0.9 -7.2,2.9 -1.8,1.9 -2.9,4.6 -2.9,8.1 0,3.7 1,6.5 3.2,8.1 2.1,1.6 4.5,2.6 7.2,2.6 3.3,0 5.9,-1 7.6,-3 1,-1 1.6,-2.1 1.8,-3.2 l -5.9,0.1"
                            style={{ fill: '#2d3277' }}
                          />

                          <path
                            id="path106_8_"
                            d="m 1368.2,1498.7 h -5 v -12.3 c 0,-1.2 -0.3,-3.7 -3.6,-3.7 -2.1,0 -3.7,1.5 -3.7,3.7 v 12.3 h -5 v -12.3 c 0,-1.2 -0.3,-3.7 -3.6,-3.7 -2.1,0 -3.6,1.5 -3.6,3.7 v 12.3 h -5 v -12.2 c 0,-5.1 3.3,-9 8.5,-9 2.6,0 4.7,1 6.2,2.9 1.5,-1.8 3.6,-2.9 6.2,-2.9 5.4,0 8.5,3.7 8.5,9 l 0.1,12.2"
                            style={{ fill: '#2d3277' }}
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ms-4 hidden lg:block">
              <div className="lg:order-1 pr-12 sm:pr-0 place-self-center">
                <div className="relative max-w-lg mb-12">
                  <img
                    fetchPriority="low"
                    loading="lazy"
                    className="object-bottom rounded-md"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp"
                    alt="Juego de Cartas - Desconectados"
                  />

                  <img
                    fetchPriority="low"
                    loading="lazy"
                    className="absolute origin-bottom-right scale-90 rounded-md -bottom-20 -right-20"
                    src={epContenido1.src}
                    alt="Juego de Cartas - Desconectados"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const star = (
  <svg
    className="h-4 w-4"
    width={51}
    height={51}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
      fill="currentColor"
    />
  </svg>
)
