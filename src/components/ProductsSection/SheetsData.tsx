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

import Nespresso from '@/../public/assets/contenido/Nespresso.webp'
import HBO from '@/../public/assets/contenido/Kit-HBO.webp'
import TN from '@/../public/assets/contenido/Tienda-Nube.webp'

export const SheetDesconectados = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:mt-5 text-2xl">
        <div
          className="inline-flex items-center justify-center pb-0.5 
        text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
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
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Carousel className="object-cover">
              <CarouselContent>
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-familias1-e967b8ecf1aad2e0bf16728584939231-1024-1024.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Juego de Cartas Desconectados"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Juego de Cartas Desconectados"
                  />
                </CarouselItem>{' '}
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
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
            Es una invitación a encontrarnos con nuestra familia, pareja y
            amistades. Las cartas que encontraran tienen el objetivo de
            funcionar como disparadores para compartir creencias y sensaciones
            que, muchas veces, el ritmo de vida nos lo impide.
          </p>
          <div className="text-gray-700 text-sm font-normal w-full">
            <p className="mb-4">Son 200 cartas divididas en 4 secciones:</p>
            <ul className="flex flex-col justify-center gap-2 list-none">
              <li>
                🤓<b>Perspectiva:</b> cartas para debatir e intercambiar maneras
                de ver la vida
              </li>
              <li>
                😁<b>Presentación:</b> cartas sobre gustos y preferencias
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
  )
}
export const SheetDestapados = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:mt-5 text-2xl">
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
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-amigos-y-pareja1-04a8074a73b8e6859b16728612235787-1024-1024.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Destapados Juego de Cartas para Previas"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/destapados-juego-de-cartas-para-previas1-7fcace62e2e91e71a216685193063177-640-0.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Destapados Juego de Cartas para Previas"
                  />
                </CarouselItem>{' '}
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
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
            Destapados es un disparador de encuentros festivos e íntimos,
            corporales y emocionales. Las cartas buscan destapar los
            estereotipos y prejuicios que se acarrean, invitándonos a
            sumergirnos libremente en nuestros pensamientos, emociones,
            preferencias y, si así lo desean, su cuerpo.
          </p>
          <div className="text-gray-700 text-sm font-normal w-full">
            <p className="mb-4">Son 200 cartas divididas en 4 secciones:</p>
            <ul className="flex flex-col justify-center gap-2 list-none">
              <li>
                🔥<b>Picantes:</b> cartas que encienden tus experiencias
              </li>
              <li>
                🎲<b>Random:</b> cartas para improvisar
              </li>{' '}
              <li>
                😌<b>Profundidad:</b> cartas para intimar
              </li>{' '}
              <li>
                🤓<b>Perspectiva: </b>cartas para debatir sobre las relaciones
              </li>{' '}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
export const SheetAnoNuevo = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:mt-5 text-2xl">
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
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/11-6abc5a8f6a44714a8516678314509320-1024-1024.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Juego de Cartas - Año Nuevo"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-de-cartas-edicion-ano-nuevo-en-palabrasss1-ae868838e90fff7e7d16680888314539-640-0.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Juego de Cartas - Año Nuevo"
                  />
                </CarouselItem>{' '}
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
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
            Es una invitación a reflexionar sobre el año que pasó para recibir
            el nuevo con mayor conciencia. Las cartas funcionan como
            disparadores para revisar lo vivido, cerrar etapas y conectar con
            los deseos y objetivos para el próximo ciclo.
          </p>
          <div className="text-gray-700 text-sm font-normal w-full">
            <p className="mb-4">Son 50 cartas con dos secciones:</p>
            <ul className="flex flex-col justify-center gap-2">
              <li>
                <b>💫Retrospección:</b> cartas para registrar cómo te hacen
                sentir tus experiencias pasadas
              </li>
              <li>
                <b>✨Proyección: </b> cartas que te guían a alcanzar lo que te
                gustaría integrar
              </li>{' '}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
export const SheetJournal = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:mt-5 text-2xl">
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
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/journal-producto-tienda-nube-2-040717723ae880509417012739213304-640-0.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Journal de En Palabras"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/preguntas-diarias-18-53fb7544194d6b56c317014369171282-640-0.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Journal de En Palabras"
                  />
                </CarouselItem>{' '}
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
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
            Es un diario personal que te invita a dialogar sinceramente con vos
            mismo. Incluye preguntas diarias y dinámicas para ayudarte a salir
            del <i>"modo automático"</i> y embarcarte en un viaje de
            autoconocimiento profundo.
            <br />
            <span className="mt-4 block text-gray-700 text-sm font-normal">
              La propuesta es simple. <b>Parar. Escribir. Repetir.</b>
            </span>
          </p>
          <div className="text-gray-700 text-sm font-normal w-full">
            <p className="mb-4">
              El journal viene en dos opciones según lo que te parezca más
              cómodo: <b>con anillado y sin anillado.</b>
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
  )
}
export const SheetPersonalizadas = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:mt-5 text-2xl">
        <div
          className="inline-flex items-center 
                    justify-center pb-0.5 
                    text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
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
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Carousel className="object-cover">
              <CarouselContent>
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src={TN.src}
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt='Juego de Cartas "Desconectados" para empresas'
                  />
                </CarouselItem>{' '}
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src={HBO.src}
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt='Juego de Cartas "Desconectados" para empresas'
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
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
            Te invitamos a crear cartas con preguntas personalizadas sobre la
            cultura o experiencia de tu marca. Nos compartís tu idea y el equipo
            de En palabras la transforma una charla amigable y profunda.
          </p>
          <p className="h-full justify-between text-gray-700 my-5 text-justify text-sm">
            Además, podés agregar el logo de tu empresa en la bolsa que acompaña
            el juego.
          </p>

          <br />
        </div>
      </SheetContent>
    </Sheet>
  )
}
export const SheetDescubriendo = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:mt-5 text-2xl">
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
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/img_3580-f1782d1433931301bc17195816596939-1024-1024.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Juego de Cartas Descubriendo"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/img_3845-b1dbd29de9cc10904817195816780228-640-0.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Juga con los más chicos"
                  />
                </CarouselItem>{' '}
                <CarouselItem>
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src="https://acdn.mitiendanube.com/stores/001/705/915/products/img_3775-e0dd3e23e6713b803f17195816702543-640-0.webp"
                    className="object-scale-down mx-auto w-full h-64 md:w-64 md:h-full rounded-lg"
                    alt="Juego de Cartas - Descubriendo"
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
            Conectar con los/as niños/as no siempre es fácil, y la rutina puede
            complicar estos momentos. Descubriendo te invita a compartir
            preguntas que abren oportunidades para conocerse, aprender y
            desarrollar habilidades mientras juegan.
          </p>
          <div className="text-gray-700 text-sm font-normal w-full">
            <p className="mb-4">
              Sus 5 secciones van de lo profundo a la risa y el movimiento
            </p>
            <ul className="flex flex-col justify-center gap-2">
              <li>
                <b>💫 Relaciones Mágicas:</b> para pensar los vínculos.
              </li>
              <li>
                <b>🌎 Mi Mundo: </b> para conversar sobre cómo perciben y
                piensan el mundo.
              </li>{' '}
              <li>
                <b>🌊 Mar de Emociones:</b> para navegar en el mundo emocional.
              </li>
              <li>
                <b>🎁 Caja de Sorpresas: </b> para descubrir curiosidades y un
                popurrí de temáticas.
              </li>{' '}
              <li>
                <b>🚀 Misiones Especiales: </b> para descomprimir y ponerse en
                movimiento.
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
