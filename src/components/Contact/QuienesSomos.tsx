export const AboutSection = () => {
  return (
    <section className="bg-[#FAF7FE] py-12 px-6 md:px-12 flex items-center justify-center w-full pb-20">
      <div className="text-center max-w-6xl">
        <div className="flex items-center justify-center mb-6">
          <img
            src="//acdn.mitiendanube.com/stores/001/705/915/themes/common/logo-1600072508-1621866994-b0fd695ab493ee571f9f076ae0ea024d1621866995.ico?0" // Reemplaza con la ruta del ícono
            alt="Icono de En Palabras"
            className="w-16 h-16"
          />
        </div>
        <h2 className="font-extrabold mb-4 text-5xl md:text-6xl text-center text-[#6E5686]">
          ¿Quiénes somos?
        </h2>
        <p className="text-xl text-[#6E5686] py-4 px-4 leading-relaxed mb-6 lg:max-w-[75%] mx-auto text-justify lg:text-left">
          En <span className="font-bold">En Palabras</span> somos especialistas
          en crear experiencias que conectan y transforman equipos a través de
          la comunicación y empatía. Nuestra misión es ayudarte a construir una
          cultura organizacional sólida, donde la confianza y la colaboración
          impulsen el éxito y los resultados.
        </p>
        <div>
          <button className="bg-[#6E5686] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#513a67] transition">
            CONOCÉ NUESTRAS PROPUESTAS
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
