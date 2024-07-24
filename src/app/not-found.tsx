import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="w-full bg-zinc-100">
      <div className="container py-16 lg:py-20">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl text-center  text-balance">
              <span className="text-purple-800">404 </span>{' '}
            </h1>
            <h2 className="my-10 text-5xl font-extrabold tracking-tight lg:text-6xl text-center  text-balance">
              Página no encontrada
            </h2>
            <p className="mt-4 text-lg text-center  max-w-3xl mx-auto text-balance">
              ¡Ups! Parece que te perdiste, pero no te preocupes, te ayudamos a
              volver al camino correcto.
            </p>
            <div className="mt-7 flex gap-4 justify-center">
              <a href="/" className="">
                {' '}
                <Button size={'lg'}>Inicio</Button>
              </a>
              <a
                href="https://www.enpalabras.com.ar/"
                className=""
                target="_blank"
              >
                {' '}
                <Button variant={'outline'} size={'lg'}>
                  Visitar Tienda
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
