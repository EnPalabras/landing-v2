'use client'

import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'

export default function Contact() {
  const [formSent, setFormSent] = useState(false)
  const { toast } = useToast()

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
    toast({
      title: 'Formulario enviado',
      description: 'Nos pondremos en contacto a la brevedad',
    })
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
    <section
      className="py-10 sm:py-16 lg:py-24 w-full bg-gray-100"
      id="contacto"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Formulario de <span className="text-purple-700">Contacto</span>
          </h2>
          <p
            className="max-w-xl mx-auto mt-4 text-base 
          leading-relaxed text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Completa el formulario y nos pondremos en contacto contigo a la
            brevedad
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className="overflow-hidden bg-gray-100 rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  +1-316-555-0116
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  +1-446-526-0117
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  contact@example.com
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  hr@example.com
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                  8502 Preston Rd. Ingle, Maine 98380, USA
                </p>
              </div>
            </div>
          </div> */}

          <div className="overflow-hidden rounded-xl">
            <div className="px-6 py-6 sm:p-6">
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Nombre *{' '}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        onChange={(e) => editContactForm(e)}
                        placeholder=""
                        className="block w-full px-4 py-4 text-black 
                        placeholder-gray-500 transition-all duration-200 
                        bg-white border border-gray-200 rounded-md 
                        focus:outline-none focus:border-purple-600 
                        caret-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Email *{' '}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        required
                        type="email"
                        onChange={(e) => editContactForm(e)}
                        name="email"
                        id="email"
                        placeholder="Email de contacto"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border
                         border-gray-200 rounded-md focus:outline-none focus:border-purple-600 caret-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Celular{' '}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="tel"
                        name="phone"
                        onChange={(e) => editContactForm(e)}
                        id="phone"
                        placeholder="Ingrese su número de teléfono"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-purple-600 caret-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Empresa{' '}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="company"
                        onChange={(e) => editContactForm(e)}
                        id="company"
                        placeholder="Nombre de la empresa"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-purple-600 caret-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Ciudad o Barrio{' '}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="address"
                        onChange={(e) => editContactForm(e)}
                        id="address"
                        placeholder="Dirección o zona de Entrega"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-purple-600 caret-purple-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="iva"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Condición frente al IVA*{' '}
                    </label>
                    <div className="mt-2.5 relative">
                      <select
                        name="iva"
                        onChange={(e) => editContactForm(e)}
                        defaultValue="Seleccionar..."
                        id="iva"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-purple-600 caret-purple-600"
                      >
                        <option value="iva">Responsable Inscripto</option>
                        <option value="iva">Monotributista</option>
                        <option value="iva">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Juegos y Cantidades{' '}
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        name="juegos"
                        id="juegos"
                        onChange={(e) => editContactForm(e)}
                        placeholder="Comentanos cuántas unidades necesitas y si tenés alguna preferencia de producto"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-purple-600 caret-purple-600"
                        rows={4}
                      ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Comentarios{' '}
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        name="comments"
                        id="comments"
                        onChange={(e) => editContactForm(e)}
                        placeholder="Comentanos cualquier detalle que consideres importante, como el motivo de la compra, si necesitás factura A o B, etc."
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-purple-600 caret-purple-600"
                        rows={4}
                      ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-md focus:outline-none hover:bg-purple-700 focus:bg-purple-700"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
