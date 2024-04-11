'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import desc1 from '@/../public/assets/products/Desconectados.png'

export default function Products() {
  const [isActive, SetIsActive] = useState<number | null>(null)

  return (
    <section>
      <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div
            className={`transition-all duration-300 translate-x-8 ${
              isActive === 1 ? 'translate-x-0' : '-translate-x-8'
            }`}
          >
            <div
              onClick={() => SetIsActive(isActive === 1 ? null : 1)}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p
                className={`font-normal text-gray-700 dark:text-gray-400 transition-all duration-300 translate-x-8 ${
                  isActive === 1 ? 'translate-y-0' : 'translate-y-8'
                }`}
              >
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="w-full py-6 md:py-12 xl:py-16">
    //   <div className="container px-4 md:px-6">
    //     <div className="grid gap-6 md:gap-12 lg:gap-16">
    //       <div className="grid gap-4 md:grid-cols-2 md:gap-8">
    //         <div className="flex flex-col justify-center space-y-2">
    //           <h3 className="text-4xl font-bold tracking-tighter sm:text-3xl">
    //             Desconectados
    //           </h3>
    //           <p className="max-w-[700px] text-gray-700 text-base xl:text-lg text-justify">
    //             Es una invitación a encontrarnos con nuestra familia, pareja y
    //             amistades. Las cartas que encontraran tienen el objetivo de
    //             funcionar como disparadores para compartir creencias y
    //             sensaciones que, muchas veces, el ritmo de vida nos lo impide.
    //           </p>
    //           <p className="max-w-[700px] text-gray-700 text-base xl:text-lg">
    //             Son 200 cartas con cuatro secciones:
    //           </p>
    //           <ul className="text-gray-700 text-base xl:text-lg list-none">
    //             <li>
    //               🤓<b>Perspectivas:</b> cartas para debatir e intercambiar
    //               maneras de ver la vida
    //             </li>
    //             <li>
    //               😁<b>Presentación:</b> cartas sobre gustos y preferencias
    //             </li>
    //             <li>
    //               😌<b>Profundidad:</b> cartas para intimar
    //             </li>
    //             <li>
    //               😜<b>Descomprimir:</b> cartas para relajar y activar tu
    //               creatividad
    //             </li>
    //           </ul>
    //         </div>

    //         <div className="flex items-center justify-center">
    //           <img
    //             alt="Image"
    //             className="aspect-video overflow-hidden rounded-xl object-cover max-w-[400px]"
    //             src={desc1.src}
    //           />
    //         </div>
    //       </div>
    //       <div className="grid gap-4 md:grid-cols-2 md:gap-8">
    //         <div className="order-2 flex items-center justify-center md:order-1">
    //           <img
    //             alt="Image"
    //             className="aspect-video overflow-hidden rounded-xl object-cover max-w-[400px]"
    //             src={desc1.src}
    //           />
    //         </div>
    //         <div className="order-1 flex flex-col justify-center space-y-2">
    //           <h3 className="text-4xl font-bold tracking-tighter sm:text-3xl">
    //             Destapados
    //           </h3>
    //           <p className="max-w-[700px] text-gray-700 text-base xl:text-lg text-justify">
    //             Destapados es una invitación a intimar con nuestras parejas,
    //             vínculos sexoafectivos y amistades. Las cartas que encontrarán
    //             tienen el objetivo de funcionar como disparadores para destapar
    //             prejuicios y abrirnos a la exploración de ideas, experiencias y
    //             sentimientos en forma colectiva.
    //           </p>
    //           <p className="max-w-[700px] text-gray-700 text-base xl:text-lg">
    //             Son 200 cartas con cuatro secciones:
    //           </p>
    //           <ul className="text-gray-700 text-base xl:text-lg list-none">
    //             <li>
    //               🤓<b>Picantes:</b> cartas que encienden tus experiencias
    //             </li>
    //             <li>
    //               😁<b>Random:</b> cartas para improvisar
    //             </li>
    //             <li>
    //               😌<b>Profundidad:</b> cartas para intimar
    //             </li>
    //             <li>
    //               😜<b>Perspectiva:</b> cartas para debatir sobre las relaciones
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="grid gap-4 md:grid-cols-2 md:gap-8">
    //         <div className="flex flex-col justify-center space-y-2">
    //           <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
    //             Instant scaling
    //           </h3>
    //           <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //             Your app is ready to handle traffic from the first visit. With
    //             automatic scaling, Vercel ensures your app can handle any amount
    //             of traffic without manual intervention.
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center">
    //           <img
    //             alt="Image"
    //             className="aspect-video overflow-hidden rounded-xl object-cover"
    //             height="225"
    //             src="/placeholder.svg"
    //             width="400"
    //           />
    //         </div>
    //       </div>
    //       <div className="grid gap-4 md:grid-cols-2 md:gap-8">
    //         <div className="order-2 flex items-center justify-center md:order-1">
    //           <img
    //             alt="Image"
    //             className="aspect-video overflow-hidden rounded-xl object-cover"
    //             height="225"
    //             src="/placeholder.svg"
    //             width="400"
    //           />
    //         </div>
    //         <div className="order-1 flex flex-col justify-center space-y-2 md:order-2">
    //           <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
    //             Custom domains
    //           </h3>
    //           <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //             Easily add your custom domain to your Vercel project. Use the
    //             Vercel dashboard or the Vercel CLI to add your domain, and
    //             Vercel's global CDN will ensure that your site is fast and
    //             secure.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="grid gap-4 md:grid-cols-2 md:gap-8">
    //         <div className="flex flex-col justify-center space-y-2">
    //           <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
    //             Seamless collaboration
    //           </h3>
    //           <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //             Share your project with your team using the Vercel platform.
    //             With GitHub, GitLab, and Bitbucket integrations, you can
    //             collaborate on your project and deploy changes with ease.
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center">
    //           <img
    //             alt="Image"
    //             className="aspect-video overflow-hidden rounded-xl object-cover"
    //             height="225"
    //             src="/placeholder.svg"
    //             width="400"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex justify-center">
    //         <div className="w-full max-w-[400px]">
    //           <Button className="w-full" size="lg">
    //             See more
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}
