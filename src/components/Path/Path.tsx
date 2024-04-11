export const Path = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24 w-full" id="proceso">
      <div className="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Conocé nuestro <span className="text-purple-700">proceso</span>
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Conoce nuestro proceso paso a paso, diseñado para ayudarte a crear
            experiencias significativas transformando tus ideas en regalos
            únicos y memorables
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Evaluamos tus necesidades
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Completá el formulario y nos pondremos en contacto con vos para
                conocer tus necesidades y evaluar de qué manera podemos ayudarte
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Una propuesta a tu medida
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Te presentamos una propuesta personalizada que se adapte a tus
                necesidades
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Confirmación y producción
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Una vez confirmada la propuesta, procedemos con la producción y
                entrega de tu pedido abonando un anticipo del 50%
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 max-w-2xl mx-auto text-center mt-12">
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            ¿Querés saber más sobre{' '}
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-1 bg-orange-300 bottom-0.5 "></span>
              <span className="relative"> nuestro proceso </span>
            </span>
            ?
          </p>
          <div className="group ">
            <a className="flex flex-col items-center gap-2" href="#contacto">
              <p className="text-md/6 text-gray-600 duration-300 group-hover:text-gray-600 group-hover:font-bold group-hover:text-md">
                Completá el formulario
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-gray-600 duration-300 group-hover:translate-y-1.5 group-hover:text-gray-900"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
