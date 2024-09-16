export default function Brands() {
  return (
    <section className="py-10 sm:py-16 lg:py-16 bg-gray-100 w-full bg-white">
      <div className="p-4 mx-auto max-w-7xl sm:p-6 lg:p-8 ">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
            <span className="text-purple-600">Confiaron</span> en{' '}
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5 translate-y-2"></span>
              <span className="relative"> En Palabras </span>
            </span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
            Marcas y empresas que confiaron en nosotros para generar
            experiencias significativas a través de nuestros juegos y productos
            personalizados.
          </p>
        </div>

        <div
          className="grid items-center
        max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-3 gap-x-10 gap-y-16"
        >
          <div>
            <img
              loading="lazy"
              fetchPriority="low"
              className="object-contain w-full h-8 mx-auto"
              src="https://www.hbo.com/img/hbo-logo-blk.svg"
              alt="logo de HBO"
            />
          </div>

          <div>
            <img
              loading="lazy"
              fetchPriority="low"
              className="object-contain w-full h-8 mx-auto invert"
              src="https://www.nespresso.com/ecom/medias/sys_master/public/28815215820830/Nespresso-Wordmark-2021-RGB-White.svg"
              alt="logo de nespresso"
            />
          </div>

          <div>
            <img
              loading="lazy"
              fetchPriority="low"
              className="object-contain w-full h-12 mx-auto"
              src="https://pngfre.com/wp-content/uploads/Adidas-Logo-2.png"
              alt="logo de adidas"
            />
          </div>

          <div>
            <img
              loading="lazy"
              fetchPriority="low"
              className="object-contain w-full h-28 mx-auto"
              src="https://omnicommerce.ar/wp-content/uploads/2021/05/works_TNB.png"
              alt="logo de tienda nube"
            />
          </div>

          <div>
            <img
              loading="lazy"
              fetchPriority="low"
              className="object-contain w-full h-12 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Google_2015_logo_colorless_mourning_period.svg/1200px-Google_2015_logo_colorless_mourning_period.svg.png"
              alt="logo de google"
            />
          </div>

          <div>
            <img
              loading="lazy"
              fetchPriority="low"
              className="object-contain w-full h-12 mx-auto"
              src="https://www.sibis.com.ua/wp-content/uploads/2017/06/Microsoft-logo.png"
              alt="logo de microsoft"
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
