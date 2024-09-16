'use client'

import { useState } from 'react'

export default function SocialProof() {
  return (
    <section
      className="py-8 sm:py-12 lg:py-20 w-full bg-gray-100"
      id="nosotros"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center max-w-5xl mx-auto text-balance">
          ¿Para qué tener{' '}
          <span className="relative inline-block">
            <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5 translate-y-2"></span>
            <span className="relative"> conversaciones </span>
          </span>{' '}
          <span className="relative inline-block">
            <span className="absolute inline-block w-full h-2 bg-purple-300 bottom-1.5 translate-y-2"></span>
            <span className="relative"> profundas </span>
          </span>{' '}
          en tu empresa?
        </h2>
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-x-0 py-10">
          <SocialProofBlock />

          <div className="lg:order-1 pr-12 sm:pr-0 place-self-center">
            <div className="relative max-w-sm mb-12">
              <img
                loading="lazy"
                fetchPriority="low"
                className="object-bottom rounded-md"
                src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juego-de-cartas-familiar1-67680530ca8c8f5ef616685182185530-640-0.webp"
                alt="Imagen de familias jugando Desconectados"
              />

              <img
                loading="lazy"
                fetchPriority="low"
                className="absolute origin-bottom-right scale-90 rounded-md -bottom-20 -right-10"
                src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-regalo-empresas1-57ebcbfc96842f074916685182180725-640-0.webp"
                alt="Imagen de una empresa jugando Desconectados como regalo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SocialProofBlock = () => {
  const [formSent, setFormSent] = useState(false)

  const [contactForm, setContactForm] = useState({
    date: new Date(),
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    iva: '',
    juegos: '',
    comments: '',
  })

  const editContactForm = (e: any) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    const values = [Object.values(contactForm)]
    if (formSent) return

    e.preventDefault()
    const res = await fetch('https://ruleta-empresa.vercel.app/api/landing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (res.ok) {
      setFormSent(true)
    }
  }

  return (
    <section className="lg:order-2">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-left sm:text-center">
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 text-justify lg:text-center ">
            Las experiencias de nuestros usuarios dan cuenta de un cambio en la
            dinámica laboral. Una necesidad de mejorar las relaciones en el
            equipo y la posiblidad de conocer nuevas facetas y puntos en común
            para conectar.
          </p>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 text-justify lg:text-center ">
            Por eso desde En Palabras, nos comprometemos y elegimos crear
            dinámicas que faciliten conversaciones profundas y reflexivas así,
            quien elige jugar, guarda en su memoria una experiencia
            significativa sobre sus deseos que recordará en el tiempo.
          </p>
        </div>
        <div
          className="mx-auto w-full mx-auto mt-8 space-y-8 sm:space-x-4 sm:mt-12 sm:flex sm:items-start sm:justify-center 
        sm:space-y-0 md:space-x-10 lg:mt-20"
        >
          <div className="flex items-start">
            <svg
              className="flex-shrink-0 text-purple-400 w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-black">+100 k</h3>
              <p className="mt-1.5 text-base text-gray-600">Juegos Vendidos</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg
              className="flex-shrink-0 text-purple-400 w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-black">+16 </h3>
              <p className="mt-1.5 text-base text-gray-600">Países</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg
              className="flex-shrink-0 text-purple-400 w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-black">+50</h3>
              <p className="mt-1.5 text-base text-gray-600">
                Colaboraciones
                <br /> con empresas
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-12">
          <div
            className="sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full 
          sm:focus-within:border-purple-600 sm:focus-within:ring-1 sm:focus-within:ring-purple-600 "
          >
            <div className="flex flex-col items-start sm:flex-row sm:justify-center ">
              <div className="flex-1 w-full min-w-0">
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <label htmlFor="email" className="sr-only"></label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => editContactForm(e)}
                    placeholder="Ingrese su E-Mail"
                    className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all 
                    duration-200 border-transparent rounded-full focus:border-transparent focus:ring-0 caret-purple-600"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`inline-flex items-center justify-center 
                w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-300 bg-purple-600 border border-transparent 
                rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-purple-700 focus:bg-purple-700
                ${
                  formSent &&
                  'bg-green-500 hover:bg-green-600 focus:bg-green-600'
                }
                `}
              >
                {formSent ? '' : 'Quiero que me contacten'}
                {formSent ? (
                  <svg
                    className="flex-shrink-0 text-white w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 ml-3 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-start mt-8 sm:justify-center sm:px-0">
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
          <span className="ml-2 text-sm text-gray-600">
            {' '}
            Tu información está segura con nosotros. La utilizaremos para
            comunicarnos con vos.
          </span>
        </div>
      </div>
    </section>
  )
}
