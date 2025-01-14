import bgimgDesktop from '@/../public/images/desktop/4.jpg'
import bgimgMobile from '@/../public/images/mobile/4.jpg'

export const TeamSection = () => {
  return (
    <>
      {' '}
      <section
        className={`hidden md:flex relative items-center justify-center 
        bg-cover bg-no-repeat bg-center w-full h-full py-28`}
        style={{
          backgroundImage: `url(${bgimgDesktop.src})`,
        }}
      >
        <div
          className="bg-white bg-opacity-90 p-8 md:p-12 lg:py-20
        rounded-lg shadow-lg max-w-4xl text-[#6E5686] flex flex-col gap-6"
        >
          <h3 className="text-5xl md:text-5xl font-extrabold text-center text-[#6E5686] leading-tight text-balance">
            Llevá tu equipo <br /> al siguiente nivel
          </h3>
          <p className="mt-4 text-lg lg:max-w-[75%] mx-auto text-balance text-justify lg:text-center">
            No esperes más para transformar la comunicación en tu empresa.
          </p>
          <p className="mt-4 text-lg lg:max-w-[75%] mx-auto leading-2 text-balance text-justify lg:text-center">
            Desde dinámicas gratuitas hasta regalos personalizados, en{' '}
            <span className="font-bold">En Palabras</span> tenemos todo lo que
            necesitás para mejorar el trabajo en equipo y crear una cultura de
            confianza y pertenencia.
          </p>
          <div className="mt-8 text-center">
            <button
              className="bg-[#6E5686] text-white font-bold 
          py-3 px-6 rounded-lg shadow-lg hover:bg-[#513a67] transition"
            >
              ¡TRANSFORMÁ TU EQUIPO HOY!
            </button>
          </div>
        </div>
      </section>
      <section
        className={`flex md:hidden relative items-center justify-center 
        bg-cover bg-no-repeat bg-center w-full h-full py-20`}
        style={{
          backgroundImage: `url(${bgimgMobile.src})`,
        }}
      >
        <div
          className="bg-white bg-opacity-80 px-8 py-12
        rounded-lg shadow-lg max-w-xl mx-10 text-[#6E5686] flex flex-col gap-6"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-center text-[#6E5686] leading-tight">
            Llevá tu equipo <br /> al siguiente nivel
          </h3>
          <p className="mt-4 text-center text-xl  mx-auto text-balance">
            No esperes más para transformar la comunicación en tu empresa.
          </p>
          <p className="mt-4 text-center text-xl  mx-auto leading-2 text-balance">
            Desde dinámicas gratuitas hasta regalos personalizados, en{' '}
            <span className="font-bold">En Palabras</span> tenemos todo lo que
            necesitás para mejorar el trabajo en equipo y crear una cultura de
            confianza y pertenencia.
          </p>
          <div className="mt-8 text-center">
            <button
              className="bg-[#6E5686] text-white font-bold 
          py-3 px-6 rounded-lg shadow-lg hover:bg-[#513a67] transition text-balance"
            >
              ¡TRANSFORMÁ TU EQUIPO HOY!
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamSection
