import coraBlue from '@/../public/assets/corablue.png'
import google from '@/../public/assets/google.png'
import sig from '@/../public/assets/sig.png'

const testimonialsData = [
  {
    name: 'Belén Bauzá',
    company: 'Cora Blue',
    testimonial:
      'Mis clientes valoran nuestra creatividad y enfoque en ofrecer ideas simples y aplicables en diferentes contextos, no solo laborales. Desconectarnos cumple con esa visión.',
    rating: 5,
    src: coraBlue.src,
  },

  {
    name: 'Carolina Arón',
    company: 'Google',
    testimonial:
      'Desconectados me encantó y me ayudó a tener conversaciones enriquecedoras con personas cercanas y no tan cercanas. Lo recomiendo como regalo empresarial.',
    rating: 5,
    src: 'https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=2147483647&v=beta&t=fnMgfquTmN5LLPDz_pQ3ABlHsrgISwU9CQS35ol7QpE',
  },
  {
    name: 'María Esquivel',
    company: 'SIG',
    testimonial:
      'Es un juego sencillo, sin instrucciones complicadas. Une a personas de diferentes edades y genera conversaciones. El valor está en las personas que lo juegan, no solo en el juego en sí.',
    rating: 5,
    src: 'https://media.licdn.com/dms/image/v2/C4D0BAQEaoJlW4pPeBA/company-logo_200_200/company-logo_200_200/0/1669810751485/soluciones_informaticas_globales_sa_logo?e=2147483647&v=beta&t=eQiQOFsvToEvf3LbbXXyW5OWHc4LBANOiWV8vrf4T4g',
  },
]

const TestimonialCard = ({ name, company, testimonial, rating, src }: any) => {
  return (
    <div className="bg-[#FAF7FE] rounded-md shadow">
      <div className="h-full flex flex-col justify-between">
        {/* <div className="relative w-24 h-24 mx-auto -translate-y-10"> */}
        <div className="relative w-24 h-auto mx-auto py-8">
          <img
            loading="lazy"
            fetchPriority="low"
            className="relative object-cover w-24 h-24 mx-auto rounded-full"
            src={src}
            alt={`Logo de ${company}`}
          />
        </div>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-black"
          >
            <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-black"
          >
            <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-black"
          >
            <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-black"
          >
            <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-black"
          >
            <path d="M10 1l2.45 5.38 5.5.63-4 3.9.95 5.5-5-2.63-5 2.63.95-5.5-4-3.9 5.5-.63z" />
          </svg>
        </div>
        <div className="py-4 flex justify-between flex-col">
          <blockquote className="">
            <p className="text-lg text-black px-4 text-balance">
              {testimonial}
            </p>
          </blockquote>
          <p className="text-base font-semibold tex-tblack mt-9">{name}</p>
          <p className="mt-1 text-base text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-[#E9DBF7] w-full">
      <div
        className="py-10 bg-[#6E5686] sm:py-12 lg:py-20 
        w-full rounded-b-3xl "
        style={{
          borderBottomRightRadius: '2.5rem',
          borderBottomLeftRadius: '2.5rem',
        }}
        id="experiencias"
      >
        <div className="px-4 w-full sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center pb-8 lg:pb-0">
            <h3
              className="text-6xl font-extrabold leading-tight 
          text-white sm:text-6xl lg:text-7xl text-balance"
            >
              Empresas que confiaron en nosotros
            </h3>
          </div>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-12">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="w-full flex justify-center mt-16">
            <button
              className=" bg-[#E9DBF7] text-[#6E5686] rounded-lg uppercase p-4 px-6 font-semibold            
          text-xl hover:bg-[#D6C9E2] transition-all duration-300 ease-in-out"
            >
              Probalo vos también
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
