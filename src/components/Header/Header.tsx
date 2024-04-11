import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logoEP from '@/../public/assets/logo-ep.png'

export default function Header() {
  return (
    <>
      <div className="mx-auto hidden lg:block border-b border-gray-200 bg-white w-full">
        <header className="bg-[#FCF8F1] bg-opacity-30">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img className="w-auto h-8" src={logoEP.src} alt="" />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  ></path>
                </svg>

                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#nosotros"
                  title="Nosotros"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {' '}
                  Sobre Nosotros{' '}
                </a>
                <a
                  href="#productos"
                  title="Productos"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {' '}
                  Productos{' '}
                </a>

                <a
                  href="#proceso"
                  title="Proceso"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {' '}
                  Proceso{' '}
                </a>

                <a
                  href="#faqs"
                  title="Preguntas Frecuentes"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {' '}
                  FAQs{' '}
                </a>
              </div>
              <div className="space-x-4">
                <Link
                  href="#contacto"
                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-gray-200 
                 focus:text-black focus:bg-gray-200 font-semibold text-gray-800 bg-gray-100 rounded-full border border-gray-300"
                >
                  {' '}
                  Contacto{' '}
                </Link>
                <Link
                  href="https://enpalabras.com.ar"
                  target="_blank"
                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-gray-900 
                focus:bg-gray-900 font-semibold text-white bg-gray-800 rounded-full"
                >
                  {' '}
                  Tienda{' '}
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="flex justify-end w-full lg:hidden  md:px-6 bg-white">
        <Sheet>
          <SheetTrigger className="flex flex-row justify-between w-full items-center bg-white p-4">
            <svg
              className="w-8 h-8 text-transparent"
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
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
            <Image
              src={logoEP}
              className="mx-auto"
              alt="En Palabras"
              width={140}
              height={120}
            />

            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
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
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                {' '}
                <Image
                  src={logoEP}
                  className="mx-auto"
                  alt="En Palabras"
                  width={140}
                  height={120}
                />
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
    </>
  )
}
