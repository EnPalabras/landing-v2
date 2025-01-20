import heroMobile from '@/../public/images/mobile/1.jpg'
import heroDesktop from '@/../public/images/desktop/1.jpg'

export default function NewHero() {
  return (
    <section
      className="bg-[#E9DBF7] w-full"
      style={{
        fontFamily: 'GothamRounded, sans-serif',
      }}
    >
      <div className=" text-[#6E5686] flex flex-col max-w-7xl mx-auto pt-12 pb-20 px-4">
        <div className="flex flex-col lg:flex-row gap-6 justify-between w-full items-center ">
          <h1
            className="uppercase text-center lg:text-justify 
            text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
            font-extrabold tracking-wider leading-tight text-pretty flex-1 xl:flex-initial"
            style={{
              fontFamily: 'GothamUltra, sans-serif',
            }}
          >
            Conectá <br className="hidden lg:block" />
            tu equipo, <br />
            Potenciá <br className="hidden lg:block" />
            el éxito
          </h1>
          <div className="relative mb-12 flex-1 w-full px-6 lg:px-0">
            <img
              fetchPriority="low"
              loading="lazy"
              className="object-center rounded-md object-cover w-full "
              src={heroDesktop.src}
              alt="Jugá con En Palabras"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 text-center lg:text-justify lg:mt-12 max-w-7xl mx-auto px-6 xl:px-0">
          <p className="text-xl lg:text-2xl text-pretty">
            Creemos que el éxito empresarial se construye a partir de
            conversaciones auténticas. Te ayudamos a crear equipos conectados
            con actividades de team building y regalos personalizados, diseñados
            para mejorar la comunicación y colaboración.
          </p>
          <p
            className="text-2xl lg:text-3xl font-extrabold text-center text-pretty"
            style={{
              fontFamily: 'GothamUltra, sans-serif',
            }}
          >
            Generá confianza y compromiso mientras alcanzás tus objetivos
          </p>
        </div>

        <div className="w-full flex justify-center pt-12">
          <button
            className="text-white bg-[#6E5686] rounded-xl uppercase py-5 px-16 font-extrabold            
          text-2xl hover:bg-[#513a67] transition-all duration-300 ease-in-out"
            style={{
              fontFamily: 'GothamUltra, sans-serif',
            }}
          >
            Empezá Ahora
          </button>
        </div>
      </div>

      <div></div>
    </section>
  )
}
