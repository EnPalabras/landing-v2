'use client'

import Nespresso from '@/../public/assets/contenido/Nespresso.jpg'
import HBO from '@/../public/assets/contenido/Kit HBO.jpeg'
import TN from '@/../public/assets/contenido/Tienda Nube.jpg'

import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Button } from '../ui/button'

export default function Products() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
    if (!show) {
      document
        .getElementById('showMore')
        ?.scrollIntoView({ behavior: 'smooth' })
    } else if (show) {
      document
        .getElementById('products')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const OtherProducts = () => {
    return (
      <>
        <div className="overflow-hidden bg-white rounded shadow">
          <div className="p-5 ">
            <div className="relative border-b border-gray-200">
              <img
                className="object-cover w-full h-full"
                src="https://acdn.mitiendanube.com/stores/001/705/915/products/destapados-juego-de-cartas-para-previas1-7fcace62e2e91e71a216685193063177-640-0.webp"
                alt="Destapados Juego de Cartas para Previas"
              />

              <div className="absolute top-4 left-4 ">
                <span
                  className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-gray-100 rounded-full"
                >
                  {' '}
                  Juegos{' '}
                </span>
              </div>
            </div>
            <div>
              <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {' '}
                Explorar y Destapar
              </span>
              <p className="mt-5 text-2xl font-semibold"> Destapados </p>
              <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                Es una invitación a conectar más profundamente con nuestras
                parejas, relaciones sexuales y afectivas, así como con nuestras
                amistades. Las cartas actúan como disparadores para desafiar
                prejuicios y abrirnos a la exploración colectiva de ideas,
                experiencias y sentimientos.
              </p>
              <Sheet>
                <SheetTrigger className="mt-5 text-2xl">
                  <div className="inline-flex items-center justify-center pb-0.5  text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
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
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <Carousel className="object-cover">
                        <CarouselContent>
                          <CarouselItem>
                            <img
                              src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-amigos-y-pareja1-04a8074a73b8e6859b16728612235787-1024-1024.webp"
                              className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                              alt="Destapados Juego de Cartas para Previas"
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <img
                              src="https://acdn.mitiendanube.com/stores/001/705/915/products/destapados-juego-de-cartas-para-previas1-7fcace62e2e91e71a216685193063177-640-0.webp"
                              className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                              alt="Destapados Juego de Cartas para Previas"
                            />
                          </CarouselItem>{' '}
                          <CarouselItem>
                            <img
                              src="https://acdn.mitiendanube.com/stores/001/705/915/products/destapados-juego-de-cartas-en-pareja1-7c065a974fe2fe441e16685193060239-640-0.webp"
                              className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                              alt="Destapados Juego de Cartas para Previas"
                            />
                          </CarouselItem>{' '}
                        </CarouselContent>
                      </Carousel>
                    </SheetTitle>
                    <SheetDescription className="bg-yellow"></SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm font-normal text-center w-full">
                      {' '}
                      ↔ Desliza para ver más imágenes ↔{' '}
                    </span>
                    <p className="flex h-full justify-between text-gray-700 my-5 text-justify text-sm">
                      Es una invitación a conectar más profundamente con
                      nuestras parejas, relaciones sexuales y afectivas, así
                      como con nuestras amistades. Las cartas actúan como
                      disparadores para desafiar prejuicios y abrirnos a la
                      exploración colectiva de ideas, experiencias y
                      sentimientos.
                    </p>
                    <div className="text-gray-700 text-sm font-normal w-full">
                      <p className="mb-4">
                        Son 200 cartas divididas en 4 secciones:
                      </p>
                      <ul className="flex flex-col justify-center gap-2 list-none">
                        <li>
                          🔥<b>Picantes:</b> cartas que encienden tus
                          experiencias
                        </li>
                        <li>
                          🎲<b>Random:</b> cartas para improvisar
                        </li>{' '}
                        <li>
                          😌<b>Profundidad:</b> cartas para intimar
                        </li>{' '}
                        <li>
                          🤓<b>Perspectiva: </b>cartas para debatir sobre las
                          relaciones
                        </li>{' '}
                      </ul>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded shadow">
          <div className="p-5 ">
            <div className="relative border-b border-gray-200 ">
              <img
                className="object-cover w-full h-full overflow-hidden max-h-[350px]"
                src="https://acdn.mitiendanube.com/stores/001/705/915/products/buzo-con-pregunta-en-palabras1-f6ce24eba3378b9db116883282838709-640-0.webp"
                alt="Buzo y Colección Emocional"
              />

              <div className="absolute top-4 left-4 ">
                <span
                  className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-gray-100 rounded-full"
                >
                  {' '}
                  Coleccion{' '}
                </span>
              </div>
            </div>
            <div>
              <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {' '}
                Conecta con vos mismo{' '}
              </span>
              <p className="mt-5 text-2xl font-semibold">
                {' '}
                Colección Emocional{' '}
              </p>
              <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                La colección emocional es una invitación a conectar con tus
                emociones más profundas. Cada prenda es una invitación al juego.
                Son prendas para personas dispuestas a buscar nuevas respuestas.
                Remeras, Buzos y Tote Bags con consignas que llaman a la
                reflexión.
                <br />
                <br />
              </p>
              <Sheet>
                <SheetTrigger className="mt-5 text-2xl">
                  <div className="inline-flex items-center justify-center pb-0.5  text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
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
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <Carousel className="object-cover">
                        <CarouselContent>
                          <CarouselItem>
                            <img
                              src="https://acdn.mitiendanube.com/stores/001/705/915/products/buzo-para-amigos-en-palabras-desconectados1-636cacc042fe3603be16883287516998-640-0.webp"
                              className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                              alt="Buzo y Colección Emocional"
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <img
                              src="https://acdn.mitiendanube.com/stores/001/705/915/products/buzo-con-pregunta-en-palabras1-f6ce24eba3378b9db116883282838709-640-0.webp"
                              className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                              alt="Buzo y Colección Emocional"
                            />
                          </CarouselItem>{' '}
                          <CarouselItem>
                            <img
                              src="https://acdn.mitiendanube.com/stores/001/705/915/products/remera-club-para-amigos1-c6e15f574ea1f1714b16883291081752-640-0.webp"
                              className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                              alt="Buzo y Colección Emocional"
                            />
                          </CarouselItem>{' '}
                        </CarouselContent>
                      </Carousel>
                    </SheetTitle>
                    <SheetDescription className="bg-yellow"></SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm font-normal text-center w-full">
                      {' '}
                      ↔ Desliza para ver más imágenes ↔{' '}
                    </span>
                    <p className="h-full justify-between text-gray-700 my-5 text-justify text-sm">
                      La colección emocional es una invitación a conectar con
                      tus emociones más profundas. Cada prenda es una invitación
                      al juego. Son prendas para personas dispuestas a buscar
                      nuevas respuestas. Remeras, Buzos y Tote Bags con
                      consignas que llaman a la reflexión.
                      <span className="mt-4 block text-gray-700 text-sm font-normal">
                        Consulta nuestra guía de talles
                      </span>
                    </p>
                    <div className="text-gray-700 text-sm font-normal w-full">
                      <p className="mb-4">
                        El journal viene en dos opciones según lo que te parezca
                        más cómodo: <b>con anillado y sin anillado.</b>
                      </p>
                      <ul className="flex flex-col justify-center gap-2">
                        <li>
                          <b>Buzos</b>{' '}
                        </li>
                        <li>
                          <b>Remeras</b>
                        </li>{' '}
                        <li>
                          <b>Tote Bag</b>
                        </li>{' '}
                      </ul>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded shadow">
          <div className="p-5 ">
            <div className="relative border-b border-gray-200">
              <img
                className="object-scale-down max-w-full max-h-[360px]"
                src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-regalo-empresas1-57ebcbfc96842f074916685182180725-640-0.webp"
                alt="Desconectados para empresas"
              />

              <div className="absolute top-4 left-4 ">
                <span
                  className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-gray-100 rounded-full"
                >
                  {' '}
                  Juegos{' '}
                </span>
              </div>
            </div>
            <div>
              <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {' '}
                Personaliza tu Experiencia{' '}
              </span>
              <p className="mt-5 text-2xl font-semibold"> Personalizados </p>
              <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                Te invitamos a crear cartas con preguntas personalizadas sobre
                la cultura o experiencia de tu marca. Las mismas deben ser
                creadas por tu equipo y nosotras las adaptamos a un tono
                amigable y profundo de En Palabras.
                <br />
                <br />
                <br />
              </p>
              <Sheet>
                <SheetTrigger className="mt-5 text-2xl">
                  <div className="inline-flex items-center justify-center pb-0.5  text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
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
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <Carousel className="object-cover">
                        <CarouselContent>
                          <CarouselItem>
                            <img
                              src={TN.src}
                              className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                              alt='Juego de Cartas "Desconectados" para empresas'
                            />
                          </CarouselItem>{' '}
                          <CarouselItem>
                            <img
                              src={HBO.src}
                              className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                              alt='Juego de Cartas "Desconectados" para empresas'
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <img
                              src={Nespresso.src}
                              className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                              alt='Juego de Cartas "Desconectados" para empresas'
                            />
                          </CarouselItem>{' '}
                        </CarouselContent>
                      </Carousel>
                    </SheetTitle>
                    <SheetDescription className="bg-yellow"></SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm font-normal text-center w-full">
                      {' '}
                      ↔ Desliza para ver más imágenes ↔{' '}
                    </span>
                    <p className="h-full justify-between text-gray-700 my-5 text-justify text-sm">
                      Te invitamos a crear cartas con preguntas personalizadas
                      sobre la cultura o experiencia de tu marca. Las mismas
                      deben ser creadas por tu equipo y nosotras las adaptamos a
                      un tono amigable y profundo de En Palabras.
                    </p>
                    <p className="h-full justify-between text-gray-700 my-5 text-justify text-sm">
                      Además, podés agregar el logo de tu empresa en la bolsa
                      que acompaña el juego.
                    </p>

                    <br />
                    {/* <div className="text-gray-700 text-sm font-normal w-full">
                      <p className="mb-4">Son 50 cartas con dos secciones:</p>
                      <ul className="flex flex-col justify-center gap-2">
                        <li>
                          <b>💫Retrospección:</b> cartas para registrar cómo te
                          hacen sentir tus experiencias pasadas
                        </li>
                        <li>
                          <b>✨Proyección: </b> cartas que te guían a alcanzar
                          lo que te gustaría integrar
                        </li>{' '}
                      </ul>
                    </div> */}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <section
      className="py-10 bg-white sm:pt-12 lg:pt-16 pb-0 w-full "
      id="productos"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl text-balance">
              <span className="">Descubri nuestros</span>{' '}
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5 translate-y-2"></span>
                <span className="relative"> productos </span>
              </span>
            </h2>
            <p
              className="max-w-xl mx-auto mt-4 
            text-lg leading-relaxed text-gray-600 lg:mx-0 text-balance"
            >
              Conocé nuestros productos y descubrí nuevas formas de conectar
            </p>
          </div>
        </div>

        <div
          className="grid transition-all duration-300 max-w-md grid-cols-1 gap-6 mx-auto 
        mt-4 lg:mt-8 lg:grid-cols-3 lg:max-w-full"
        >
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5 ">
              <div className="relative border-b border-gray-200">
                <img
                  className="object-cover w-full h-full"
                  src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp"
                  alt="Juego de Cartas Desconectados"
                />

                <div className="absolute top-4 left-4 ">
                  <span
                    className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-gray-100 rounded-full"
                  >
                    {' '}
                    Juegos{' '}
                  </span>
                </div>
              </div>
              <div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {' '}
                  Juga y Conecta{' '}
                </span>
                <p className="mt-5 text-2xl font-semibold"> Desconectados </p>
                <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                  Es una invitación a encontrarnos con nuestra familia, pareja y
                  amistades. Las cartas que encontraran tienen el objetivo de
                  funcionar como disparadores para compartir creencias y
                  sensaciones que, muchas veces, el ritmo de vida nos lo impide.
                </p>
                <Sheet>
                  <SheetTrigger className="mt-5 text-2xl">
                    <div className="inline-flex items-center justify-center pb-0.5  text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
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
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>
                        <Carousel className="object-cover">
                          <CarouselContent>
                            <CarouselItem>
                              <img
                                src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-familias1-e967b8ecf1aad2e0bf16728584939231-1024-1024.webp"
                                className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                                alt="Juego de Cartas Desconectados"
                              />
                            </CarouselItem>
                            <CarouselItem>
                              <img
                                src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp"
                                className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                                alt="Juego de Cartas Desconectados"
                              />
                            </CarouselItem>{' '}
                            <CarouselItem>
                              <img
                                src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartass1-54e335af8b41c049a016685182177994-640-0.webp"
                                className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                                alt="Juego de Cartas Desconectados"
                              />
                            </CarouselItem>{' '}
                          </CarouselContent>
                        </Carousel>
                      </SheetTitle>
                      <SheetDescription className="bg-yellow"></SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm font-normal text-center w-full">
                        {' '}
                        ↔ Desliza para ver más imágenes ↔{' '}
                      </span>
                      <p className="flex h-full justify-between text-gray-700 my-5 text-justify text-sm">
                        Es una invitación a encontrarnos con nuestra familia,
                        pareja y amistades. Las cartas que encontraran tienen el
                        objetivo de funcionar como disparadores para compartir
                        creencias y sensaciones que, muchas veces, el ritmo de
                        vida nos lo impide.
                      </p>
                      <div className="text-gray-700 text-sm font-normal w-full">
                        <p className="mb-4">
                          Son 200 cartas divididas en 4 secciones:
                        </p>
                        <ul className="flex flex-col justify-center gap-2 list-none">
                          <li>
                            🤓<b>Perspectiva:</b> cartas para debatir e
                            intercambiar maneras de ver la vida
                          </li>
                          <li>
                            😁<b>Presentación:</b> cartas sobre gustos y
                            preferencias
                          </li>{' '}
                          <li>
                            😌<b>Profundidad:</b> cartas para intimar
                          </li>{' '}
                          <li>
                            😜<b>Descomprimir:</b> cartas para relajar y activar
                            tu creatividad
                          </li>{' '}
                        </ul>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5 ">
              <div className="relative border-b border-gray-200">
                <img
                  className="object-scale-down "
                  src="https://acdn.mitiendanube.com/stores/001/705/915/products/journal-3_-c6e7033b0fcbc780b017012740186645-640-0.webp"
                  alt="Journal de En Palabras"
                />

                <div className="absolute top-4 left-4 ">
                  <span
                    className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-gray-100 rounded-full"
                  >
                    {' '}
                    Journal{' '}
                  </span>
                </div>
              </div>
              <div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {' '}
                  Conecta con vos mismo{' '}
                </span>
                <p className="mt-5 text-2xl font-semibold"> Journal </p>
                <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                  El <b>Journal de En Palabras</b> es una guía para dialogar
                  sinceramente contigo mismo. Incluye preguntas diarias y
                  dinámicas sobre temas cotidianos para ayudarte a salir del
                  <i>"modo automático"</i> y embarcarte en un viaje de
                  autoconocimiento profundo.
                </p>
                <Sheet>
                  <SheetTrigger className="mt-5 text-2xl">
                    <div className="inline-flex items-center justify-center pb-0.5  text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
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
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>
                        <Carousel className="object-cover">
                          <CarouselContent>
                            <CarouselItem>
                              <img
                                src="https://acdn.mitiendanube.com/stores/001/705/915/products/journal-producto-tienda-nube-2-040717723ae880509417012739213304-640-0.webp"
                                className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                                alt="Journal de En Palabras"
                              />
                            </CarouselItem>
                            <CarouselItem>
                              <img
                                src="https://acdn.mitiendanube.com/stores/001/705/915/products/preguntas-diarias-18-53fb7544194d6b56c317014369171282-640-0.webp"
                                className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                                alt="Journal de En Palabras"
                              />
                            </CarouselItem>{' '}
                            <CarouselItem>
                              <img
                                src="https://acdn.mitiendanube.com/stores/001/705/915/products/journal-3_-c6e7033b0fcbc780b017012740186645-640-0.webp"
                                className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                                alt="Journal de En Palabras"
                              />
                            </CarouselItem>{' '}
                          </CarouselContent>
                        </Carousel>
                      </SheetTitle>
                      <SheetDescription className="bg-yellow"></SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm font-normal text-center w-full">
                        {' '}
                        ↔ Desliza para ver más imágenes ↔{' '}
                      </span>
                      <p className="h-full justify-between text-gray-700 my-5 text-justify text-sm">
                        El <b>Journal de En Palabras</b> es una guía para
                        dialogar sinceramente contigo mismo. Incluye preguntas
                        diarias y dinámicas sobre temas cotidianos para ayudarte
                        a salir del "modo automático" y embarcarte en un viaje
                        de autoconocimiento profundo.
                        <span className="mt-4 block text-gray-700 text-sm font-normal">
                          La propuesta es simple.{' '}
                          <b>Parar. Escribir. Repetir.</b>
                        </span>
                      </p>
                      <div className="text-gray-700 text-sm font-normal w-full">
                        <p className="mb-4">
                          El journal viene en dos opciones según lo que te
                          parezca más cómodo:{' '}
                          <b>con anillado y sin anillado.</b>
                        </p>
                        <ul className="flex flex-col justify-center gap-2">
                          <li>
                            <b>Tamaño:</b> 13,40cm x 21,80cm
                          </li>
                          <li>
                            <b>Cantidad de hojas:</b> 128
                          </li>{' '}
                          <li>
                            <b>Duración:</b> 6 meses
                          </li>{' '}
                        </ul>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5 ">
              <div className="relative border-b border-gray-200">
                <img
                  className="object-scale-down "
                  src="https://acdn.mitiendanube.com/stores/001/705/915/products/ano-nuevo-21-f8bd8bdad5b29c1ad216679475830811-640-0.webp"
                  alt="Juego de Cartas Año Nuevo"
                />

                <div className="absolute top-4 left-4 ">
                  <span
                    className="px-4 py-2 text-xs font-semibold tracking-widest 
                  text-gray-900 uppercase bg-gray-100 rounded-full"
                  >
                    {' '}
                    Juegos{' '}
                  </span>
                </div>
              </div>
              <div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {' '}
                  Reflexiones{' '}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  {' '}
                  Edición Año Nuevo{' '}
                </p>
                <p className="mt-4 text-base text-gray-600  text-justify lg:text-left">
                  Es una invitación a reflexionar sobre el año pasado para
                  recibir el nuevo con mayor conciencia. Las cartas sirven como
                  disparadores para revisar lo vivido, cerrar etapas y conectar
                  con los deseos y objetivos para el próximo ciclo.
                </p>
                <Sheet>
                  <SheetTrigger className="mt-5 text-2xl">
                    <div className="inline-flex items-center justify-center pb-0.5  text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
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
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>
                        <Carousel className="object-cover">
                          <CarouselContent>
                            <CarouselItem>
                              <img
                                src="https://acdn.mitiendanube.com/stores/001/705/915/products/11-6abc5a8f6a44714a8516678314509320-1024-1024.webp"
                                className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                                alt="Juego de Cartas - Año Nuevo"
                              />
                            </CarouselItem>
                            <CarouselItem>
                              <img
                                src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-de-cartas-edicion-ano-nuevo-en-palabrasss1-ae868838e90fff7e7d16680888314539-640-0.webp"
                                className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                                alt="Juego de Cartas - Año Nuevo"
                              />
                            </CarouselItem>{' '}
                            <CarouselItem>
                              <img
                                src="https://acdn.mitiendanube.com/stores/001/705/915/products/ano-nuevo-21-f8bd8bdad5b29c1ad216679475830811-640-0.webp"
                                className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                                alt="Juego de Cartas - Año Nuevo"
                              />
                            </CarouselItem>{' '}
                          </CarouselContent>
                        </Carousel>
                      </SheetTitle>
                      <SheetDescription className="bg-yellow"></SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm font-normal text-center w-full">
                        {' '}
                        ↔ Desliza para ver más imágenes ↔{' '}
                      </span>
                      <p className="h-full justify-between text-gray-700 my-5 text-justify text-sm">
                        Es una invitación a reflexionar sobre el año pasado para
                        recibir el nuevo con mayor conciencia. Las cartas sirven
                        como disparadores para revisar lo vivido, cerrar etapas
                        y conectar con los deseos y objetivos para el próximo
                        ciclo.
                      </p>
                      <div className="text-gray-700 text-sm font-normal w-full">
                        <p className="mb-4">Son 50 cartas con dos secciones:</p>
                        <ul className="flex flex-col justify-center gap-2">
                          <li>
                            <b>💫Retrospección:</b> cartas para registrar cómo
                            te hacen sentir tus experiencias pasadas
                          </li>
                          <li>
                            <b>✨Proyección: </b> cartas que te guían a alcanzar
                            lo que te gustaría integrar
                          </li>{' '}
                        </ul>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          {show && <OtherProducts />}
        </div>
        <div
          className="flex justify-center transition-all duration-300"
          id="showMore"
        >
          <Button
            onClick={handleShow}
            className="bg-white border text-gray-900 my-10  
           
              hover:bg-gray-100 
            "
          >
            <svg
              className={`w-6 h-6 text-gray-600 ${!show ? 'rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m16 17-4-4-4 4m8-6-4-4-4 4"
              />
            </svg>

            {show ? 'Ver menos' : 'Ver más'}
          </Button>
        </div>
      </div>
    </section>
  )
}
