'use client'

import desc1 from '@/../public/assets/products/Desconectados.png'
import descLogo from '@/../public/assets/desconectadosLogo.png'

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
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import { Button } from '../ui/button'
export default function Products() {
  return (
    <section className="bg-white w-full px-2 lg:px-8 py-10 sm:py-16 lg:py-24 w-full space-y-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg w-full 
      shadow md:flex-row hover:cursor-pointer h-full transition-all duration-200"
        >
          <img
            src={desc1.src}
            className="object-scale-down w-full h-64 md:w-48 md:h-full rounded-t-lg md:rounded-l-lg"
            alt=""
          />

          <div className="flex flex-col justify-between p-4 leading-normal hover:bg-gray-100 h-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">
              Desconectados
            </h5>
            <p className="my-3 font-normal text-base text-gray-700 text-justify lg:text-left">
              Es una invitación a encontrarnos con nuestra familia, pareja y
              amistades. Las cartas que encontraran tienen el objetivo de
              funcionar como disparadores para compartir creencias y sensaciones
              que, muchas veces, el ritmo de vida nos lo impide.
            </p>
            <Sheet>
              <SheetTrigger className="flex flex-row justify-between w-full items-center">
                <div className="inline-flex items-center justify-center pb-0.5  text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                  Conocer más
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <img
                      src={descLogo.src}
                      className="hidden lg:block object-scale-down mx-auto w-full h-20 md:w-48 md:h-full rounded-t-lg md:rounded-l-lg"
                      alt=""
                    />
                    <Carousel className="object-cover">
                      <CarouselContent>
                        <CarouselItem>
                          <img
                            src={desc1.src}
                            className="object-scale-down mx-auto w-full h-44 md:w-48 md:h-full rounded-t-lg md:rounded-l-lg"
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <img
                            src={desc1.src}
                            className="object-scale-down mx-auto w-full h-44 md:w-48 md:h-full rounded-t-lg md:rounded-l-lg"
                          />
                        </CarouselItem>{' '}
                        <CarouselItem>
                          <img
                            src={desc1.src}
                            className="object-scale-down mx-auto w-full h-44 md:w-48 md:h-full rounded-t-lg md:rounded-l-lg"
                          />
                        </CarouselItem>{' '}
                      </CarouselContent>
                    </Carousel>
                  </SheetTitle>
                  <SheetDescription className="bg-yellow"></SheetDescription>
                </SheetHeader>
                <div className="flex flex-col ">
                  <span className="text-gray-500 text-sm font-normal text-center w-full">
                    {' '}
                    ↔ Desliza para ver más imágenes ↔{' '}
                  </span>
                  <p className="flex h-full justify-between text-gray-700 my-5 text-justify text-sm">
                    Es una invitación a encontrarnos con nuestra familia, pareja
                    y amistades. Las cartas que encontraran tienen el objetivo
                    de funcionar como disparadores para compartir creencias y
                    sensaciones que, muchas veces, el ritmo de vida nos lo
                    impide.
                  </p>
                  <div className="text-gray-700 text-sm font-normal w-full">
                    <p className="mb-4">
                      Son 200 cartas divididas en 4 secciones:
                    </p>
                    <ul className="flex flex-col justify-center gap-2 list-none">
                      <li>
                        🤓<b>Perspectiva:</b> cartas para debatir e intercambiar
                        maneras de ver la vida
                      </li>
                      <li>
                        😁<b>Presentación:</b> cartas sobre gustos y
                        preferencias
                      </li>{' '}
                      <li>
                        😌<b>Profundidad:</b> cartas para intimar
                      </li>{' '}
                      <li>
                        😜<b>Descomprimir:</b> cartas para relajar y activar tu
                        creatividad
                      </li>{' '}
                    </ul>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg w-full 
      shadow md:flex-row hover:cursor-pointer h-full transition-all duration-200"
        >
          <img
            src={desc1.src}
            className="object-scale-down w-full h-64 md:w-48 md:h-full rounded-t-lg md:rounded-l-lg"
            alt=""
          />

          <div className="flex flex-col justify-between p-4 leading-normal hover:bg-gray-100 h-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">
              Desconectados
            </h5>
            <p className="my-3 font-normal text-base text-gray-700 text-justify lg:text-left">
              Es una invitación a encontrarnos con nuestra familia, pareja y
              amistades. Las cartas que encontraran tienen el objetivo de
              funcionar como disparadores para compartir creencias y sensaciones
              que, muchas veces, el ritmo de vida nos lo impide.
            </p>
            <Sheet>
              <SheetTrigger className="flex flex-row justify-between w-full items-center">
                <div className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                  Conocer más
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
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
                          <img src={desc1.src} alt="" />
                        </CarouselItem>
                        <CarouselItem>
                          <img src={desc1.src} alt="" />
                        </CarouselItem>{' '}
                        <CarouselItem>
                          <img src={desc1.src} alt="" />
                        </CarouselItem>{' '}
                      </CarouselContent>
                    </Carousel>
                  </SheetTitle>
                  <SheetDescription className="bg-yellow"></SheetDescription>
                </SheetHeader>
                <div className="flex h-full justify-between flex-col">
                  <div className="flex flex-col justify-start gap-4 my-4">
                    <Link
                      className="group inline-flex h-9 w-full items-center 
                     rounded-md bg-white px-4 py-5 text-base font-medium 
                    transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      href="#"
                    >
                      Inicio
                    </Link>
                    <Link
                      className="group inline-flex h-9 w-full items-center 
                     rounded-md bg-white px-4 py-5 text-base font-medium 
                    transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      href="#nosotros"
                    >
                      Sobre Nosotros
                    </Link>
                    <Link
                      className="group inline-flex h-9 w-full items-center 
                     rounded-md bg-white px-4 py-5 text-base font-medium 
                    transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      href="#productos"
                    >
                      Productos
                    </Link>
                    <Link
                      className="group inline-flex h-9 w-full items-center 
                     rounded-md bg-white px-4 py-5 text-base font-medium 
                    transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      href="#proceso"
                    >
                      Proceso
                    </Link>
                    <Link
                      className="group inline-flex h-9 w-full items-center 
                     rounded-md bg-white px-4 py-5 text-base font-medium 
                    transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                      href="#faqs"
                    >
                      FAQs
                    </Link>
                  </div>
                  <div className="flex flex-col w-full gap-6 my-10">
                    <Link
                      href="https://enpalabras.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="gap-1 px-2 py-1 text-xs w-full"
                        variant="outline"
                      >
                        <svg
                          className="w-4 h-4 text-gray-800"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                          />
                        </svg>
                        Tienda
                      </Button>
                    </Link>
                    <Button className="px-2 py-1 text-xs">Contacto</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
}
