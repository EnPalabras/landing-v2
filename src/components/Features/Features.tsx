import coraBlue from '@/../public/assets/corablue.png'
import google from '@/../public/assets/google.png'
import sig from '@/../public/assets/sig.png'
import icon1 from '@/../public/icons/icono1.svg'
import icon2 from '@/../public/icons/icono2.svg'
import icon3 from '@/../public/icons/icono3.svg'

const testimonialsData = [
  {
    title: 'Mayor Colaboracion',
    description: 'Equipos más conectados que alcanzan metas juntos',
    src: icon1.src,
  },
  {
    title: 'Mayor Creatividad e Innovacion',
    description: 'Generación de ideas frecas que mejoran procesos',
    src: icon2.src,
  },
  {
    title: 'Mayor Compromiso',
    description: 'Equipos motivados que aportan al éxito de la empresa',
    src: icon3.src,
  },
]

const TestimonialCard = ({ title, description, src }: any) => {
  return (
    // <div className="flex flex-col justify-between h-full place-items-center">
    <div className="flex flex-col justify-between items-stretch text-center h-full basis-1/3 flex-grow">
      <div className="relative h-auto mx-auto flex-1">
        <img
          loading="lazy"
          fetchPriority="low"
          className="relative object-cover w-40 h-40 mx-auto"
          src={src}
          alt={`Logo de features En Palabras`}
        />
      </div>
      <h4 className="uppercase pb-2 font-extrabold text-xl text-center flex-1 line-clamp-3">
        {title}
      </h4>
      <p className="flex-1 py-2 text-lg text-black px-4 text-balance">
        {description}
      </p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="bg-[#E9DBF7] w-full">
      <div
        className="py-10 bg-[#E9DBF7] sm:py-12 lg:py-20 
        w-full rounded-b-3xl max-w-7xl mx-auto"
        style={{
          borderTopRightRadius: '3rem',
          borderTopLeftRadius: '3rem',
        }}
        id="features"
      >
        <div className="px-4 mx-auto w-full sm:px-6 lg:px-8">
          <div className="mx-auto text-center pb-4 lg:pb-0">
            <h3
              className="text-4xl font-extrabold leading-tight 
          text-[#6E5686] sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: 'GothamUltra, sans-serif',
              }}
            >
              ¿Qué gano fortaleciendo conversaciones genuinas?
            </h3>
          </div>

          <div
            className="flex flex-col md:mt-10
          md:flex-row flex-wrap justify-between items-stretch"
          >
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="w-full flex justify-center pt-12">
            <button
              className="text-white bg-[#6E5686] rounded-lg uppercase py-4 px-6 font-bold            
          text-xl hover:bg-[#513a67] transition-all duration-300 ease-in-out"
              style={{
                fontFamily: 'GothamUltra, sans-serif',
              }}
            >
              Fomentá la comunicación auténtica
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
