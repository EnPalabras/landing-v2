import heroMobile from '@/../public/images/mobile/1.jpg'
import heroDesktop from '@/../public/images/desktop/1.jpg'

export default function NewHero() {
  return (
    <section className="bg-[#E9DBF7] w-full">
      <div className=" text-[#6E5686] flex flex-col max-w-6xl mx-auto py-20 px-4">
        <div className="flex flex-col lg:flex-row gap-6 justify-between w-full items-center ">
          <h1
            className="uppercase text-center lg:text-left text-7xl 
          font-extrabold tracking-wider flex-1 w-full"
          >
            Conectá <br className="hidden lg:block" />
            tu equipo, <br />
            Potenciá <br className="hidden lg:block" />
            el éxito
          </h1>
          <div className="relative mb-12 flex-1 w-full">
            <img
              fetchPriority="low"
              loading="lazy"
              className="object-center rounded-md object-cover w-full"
              src={heroDesktop.src}
              alt="Jugá con En Palabras"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 text-center lg:text-justify lg:mt-12">
          <p className="text-2xl text-balance">
            Creemos que el éxito empresarial se construye a partir de
            conversaciones auténticas. Te ayudamos a crear equipos conectados
            con actividades de team building y regalos personalizados, diseñados
            para mejorar la comunicación y colaboración.
          </p>
          <p className="text-2xl lg:text-3xl font-extrabold">
            Generá confianza y compromiso mientras alcanzás tus objetivos
          </p>
        </div>

        <div className="w-full flex justify-center pt-12">
          <button
            className="text-white bg-[#6E5686] rounded-lg uppercase py-5 px-16 font-extrabold            
          text-2xl hover:bg-[#513a67] transition-all duration-300 ease-in-out"
          >
            Empezá Ahora
          </button>
        </div>
      </div>

      <div></div>
    </section>
  )
}
