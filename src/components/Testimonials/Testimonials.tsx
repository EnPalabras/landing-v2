import coraBlue from '@/../public/assets/corablue.png'
import google from '@/../public/assets/google.png'
import sig from '@/../public/assets/sig.png'

export default function Testimonials() {
  return (
    <section
      className="py-10 bg-purple-600 sm:py-16 lg:py-24 w-full"
      id="experiencias"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center pb-8 lg:pb-0">
          <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">
            Confian en nosotros{' '}
            <span className="text-black">empresas y equipos</span> de Argentina
            y el mundo
          </h2>
        </div>

        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-12">
          <div className="bg-white rounded-md shadow">
            <div className="h-full flex flex-col justify-between">
              <div className="relative w-24 h-24 mx-auto -translate-y-10">
                <img
                  className="relative object-cover w-24 h-24 mx-auto rounded-full bg-white"
                  src={coraBlue.src}
                  alt=""
                />
                <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
              </div>
              <div className="py-4 flex justify-between flex-col">
                <blockquote className="">
                  <p className="text-base text-black px-4 text-balance">
                    Mis clientes valoran nuestra creatividad y enfoque en
                    ofrecer ideas simples y aplicables en diferentes contextos,
                    no solo laborales. Desconectarnos cumple con esa visión.
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Belén Bauzá
                </p>
                <p className="mt-1 text-base text-gray-600">Cora Blue</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md shadow">
            <div className="h-full flex flex-col justify-between">
              <div className="relative w-24 h-24 mx-auto -translate-y-10">
                <img
                  className="relative object-cover w-24 h-24 mx-auto rounded-full bg-white"
                  src={google.src}
                  alt=""
                />
                <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
              </div>
              <div className="py-4 flex flex-col">
                <blockquote className="">
                  {/* <p className="text-base text-black">
                    "Como experiencia personal y grupal, te puedo decir que me
                    encantó y me ayudó a abrir conversaciones super
                    enriquecedoras con personas cercanas y no tanto. Lo súper
                    recomiendo como regalo empresarial."
                  </p> */}
                  <p className="text-base text-black px-4 text-balance">
                    Desconectados me encantó y me ayudó a tener{' '}
                    <b>conversaciones enriquecedoras</b> con personas cercanas y
                    no tan cercanas. Lo recomiendo como regalo empresarial.
                  </p>
                </blockquote>
                <p className="text-base font-semibold text-black mt-9">
                  Carolina Arón
                </p>
                <p className="mt-1 text-base text-gray-600">Google</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md shadow">
            <div className="h-full flex flex-col justify-between">
              <div className="relative w-24 h-24 mx-auto -translate-y-10">
                <img
                  className="relative object-cover w-24 h-24 mx-auto rounded-full bg-black invert"
                  src={sig.src}
                  alt=""
                />
                <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-purple-400"
                >
                  <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
                </svg>
              </div>
              <div className="py-4 flex flex-col">
                <blockquote className="">
                  <p className="text-base text-black px-4 text-balance">
                    Es un juego sencillo, sin instrucciones complicadas. Une a
                    personas de diferentes edades y genera conversaciones. El
                    valor está en las personas que lo juegan, no solo en el
                    juego en sí.
                  </p>
                  {/* <p className="text-base text-black text-justify">
                    "Mis clientes valoran nuestra creatividad y enfoque en
                    ofrecer ideas simples y aplicables en diferentes contextos,
                    no solo laborales. Desconectarnos cumple con esa visión.""
                  </p> */}
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  María Esquivel
                </p>
                <p className="mt-1 text-base text-gray-600">SIG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
