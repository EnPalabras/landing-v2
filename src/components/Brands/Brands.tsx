import hbo from '@/../public/assets/contenido/hbomax.png'

export default function Brands() {
  return (
    <section className="py-10 sm:py-16 lg:py-16 bg-gray-100 w-full">
      <div className="p-4 mx-auto max-w-7xl sm:p-6 lg:p-8 ">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="text-purple-600">Confiaron</span> en{' '}
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5 translate-y-2"></span>
              <span className="relative"> En Palabras </span>
            </span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Marcas y empresas que confiaron en nosotros para generar
            experiencias significativas a través de nuestros juegos y productos
            personalizados.
          </p>
        </div>

        <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-3 gap-x-10 gap-y-16">
          <div>
            <img
              className="object-contain w-full h-8 mx-auto"
              src="https://www.hbo.com/img/hbo-logo-blk.svg"
              alt=""
            />
          </div>

          <div>
            <img
              className="object-contain w-full h-8 mx-auto invert"
              src="https://www.nespresso.com/ecom/medias/sys_master/public/28815215820830/Nespresso-Wordmark-2021-RGB-White.svg"
              alt=""
            />
          </div>

          <div>
            <img
              className="object-contain w-full h-12 mx-auto"
              src="https://pngfre.com/wp-content/uploads/Adidas-Logo-2.png"
              alt="aasas"
            />
          </div>

          <div>
            <img
              className="object-contain w-full h-28 mx-auto"
              src="https://lh4.googleusercontent.com/proxy/A_L2px1tmfXllDI7Mw2J0l97dXCtFqtZ8X5HnPOMgEgCG1GeXdMAm2GD2D1zq3gHMpFJlsrmrKExEWqyb0hyMOiitn00BdXGCudb7X2a4f4EKhpQh_n1ew"
              alt=""
            />
          </div>

          <div>
            <img
              className="object-contain w-full h-12 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Google_2015_logo_colorless_mourning_period.svg/1200px-Google_2015_logo_colorless_mourning_period.svg.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="object-contain w-full h-12 mx-auto"
              src="https://www.sibis.com.ua/wp-content/uploads/2017/06/Microsoft-logo.png"
              alt=""
            />
          </div>
        </div>

        <p className="mt-10 text-base text-center text-gray-500 md:mt-16">
          y más de 100.000 productos vendidos
        </p>
      </div>
    </section>
  )
}

// ;<section class="py-10 bg-white sm:py-16 lg:py-24">
//   <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
//     <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
//       <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
//         I am building a product that can
//         <span class="relative inline-block">
//           <span class="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
//           <span class="relative"> solve developer’s pain </span>
//         </span>
//       </h2>
//     </div>

//     <div class="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
//       <div>
//         <img
//           class="w-full mx-auto sm:max-w-xs"
//           src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg"
//           alt=""
//         />
//       </div>

//       <div>
//         <h3 class="text-lg font-semibold text-gray-900">
//           Hey! I am John, founder of Celebration.
//         </h3>
//         <p class="mt-4 text-lg text-gray-700">
//           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//           sint. Velit officia consequat duis enim velit mollit. Exercitation
//           veniam consequat sunt nostrud amet.
//         </p>
//         <p class="mt-4 text-lg text-gray-700">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>

//         <h3 class="mt-8 text-lg font-semibold text-gray-900">
//           How do I do this without any investment?
//         </h3>
//         <p class="mt-4 text-lg text-gray-700">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//           proident, sunt in culpa qui officia deserunt mollit anim id est
//           laborum.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>
