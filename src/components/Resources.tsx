'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Lightbulb } from 'lucide-react';
import juegosImageMobile from '@/../public/images/mobile/2.jpg';
import ruletaImageMobile from '@/../public/images/mobile/3.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
    }
  },
  hover: {
    y: -10,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

// SVG para el subrayado que parece hecho a mano
const HandDrawnUnderline = ({ className }: { className?: string }) => (
  <svg
    width="300"
    height="20"
    viewBox="0 0 300 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 11.7C47.5 6.7 92.7 4.2 138 3.8C184.7 3.3 231.3 9.7 277.5 10.5C283.3 10.6 291 9.9 298 10.9"
      stroke="#9F7AEA"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength="1"
    />
  </svg>
);

export const Resources = () => {
  return (
    <section className="w-full py-16 lg:py-24 relative overflow-hidden" id="recursos">
      {/* Formas decorativas de fondo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-purple-300/20 blur-2xl"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-purple-200/10 blur-3xl"></div>
      </div>
      
      {/* Contenedor principal */}
      <motion.div 
        className="container relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl mx-4 lg:mx-auto">
          {/* Encabezado de sección mejorado */}
          <div className="text-[#6E5686] max-w-6xl mx-auto mb-16">
            <motion.div variants={itemVariants} className="text-center mb-12 relative">
              <div className="flex flex-row  items-center justify-center">
              {/* Ícono decorativo */}
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-6">
                <Lightbulb size={28} className="text-purple-700" />
              </div>
              
              {/* Título con subrayado a mano */}
              <div className="relative inline-block mb-8 ml-4">
                <h2 
                  className="text-5xl md:text-6xl font-bold relative z-10"
                  style={{ fontFamily: 'var(--font-gotham-ultra)' }}
                >
                  Recursos para tu equipo
                </h2>
              
              </div>
              </div>

              
              {/* Subtítulo */}
              <h3 
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-gotham-ultra)' }}
              >
                ¿Por qué es importante fomentar conversaciones en tu equipo?
              </h3>

                  {/* Línea divisoria decorativa */}
                  <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-8 mb-6"></div>
        
              
              {/* Textos originales restaurados */}
              <p className="text-lg font-semibold mb-4 max-w-3xl mx-auto">
                Las conversaciones auténticas no solo mejoran el rendimiento, sino
                que impulsan el crecimiento personal y profesional de tu equipo.
              </p>
              
              <p className="text-lg mb-10 max-w-3xl mx-auto">
                Fomentar la comunicación genuina permite construir confianza,
                resolver conflictos y despertar nuevas ideas. Cuando cada miembro se
                siente escuchado y valorado, el compromiso y la colaboración crecen,
                y con ellos, los resultados.
              </p>
              
              {/* Línea divisoria decorativa */}
              <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-8 mb-6"></div>
            </motion.div>
            
            {/* Cards de recursos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
              {/* Tarjeta 1 */}
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col transform-gpu transition-all duration-300">
                  {/* Imagen con overlay de gradiente */}
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6E5686]/60 to-transparent z-10"></div>
                    <Image
                      src={juegosImageMobile.src}
                      alt="Regalá productos En Palabras"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                      <span className="inline-block px-4 py-1 bg-white/90 rounded-full text-sm font-semibold text-purple-800 mb-3">
                        Regalos Corporativos
                      </span>
                      <h4 
                        className="text-white text-3xl font-bold mb-1 drop-shadow-sm"
                        style={{ fontFamily: 'var(--font-gotham-ultra)' }}
                      >
                        Regalá En Palabras
                      </h4>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-lg text-[#6E5686] font-semibold mb-3">
                      Regalos empresariales personalizados o listos para regalar
                    </p>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      Elegí entre personalizar nuestros juegos de preguntas para
                      crear experiencias únicas, o disfrutá de nuestras opciones
                      ya diseñadas. Un regalo que inspira conexión y diálogo genuino.
                    </p>
                    
                    <div className="mt-auto">
                      <Link
                        href="https://mayoristas.enpalabras.com.ar/"
                        target="_blank"
                        className="group inline-flex items-center text-[#6E5686] font-bold hover:text-purple-900 transition-colors"
                      >
                        <span className="mr-2">Conocer más</span>
                        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Tarjeta 2 */}
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col transform-gpu transition-all duration-300">
                  {/* Imagen con overlay de gradiente */}
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6E5686]/60 to-transparent z-10"></div>
                    <Image
                      src={ruletaImageMobile.src}
                      alt="Jugá con nuestra Ruleta"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                      <span className="inline-block px-4 py-1 bg-white/90 rounded-full text-sm font-semibold text-purple-800 mb-3">
                        Herramienta Gratuita
                      </span>
                      <h4 
                        className="text-white text-3xl font-bold mb-1 drop-shadow-sm"
                        style={{ fontFamily: 'var(--font-gotham-ultra)' }}
                      >
                        Ruleta de Preguntas
                      </h4>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-lg text-[#6E5686] font-semibold mb-3">
                      Llevá En Palabras a tus reuniones de equipo
                    </p>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      ¡Transformá tus reuniones con nuestra <b>Ruleta de Preguntas</b>! 
                      Rompé el hielo, genera conversaciones auténticas y fortalecé la conexión 
                      en tu equipo de trabajo.
                    </p>
                    
                    <div className="mt-auto">
                      <Link
                        href="https://enpalabrasjuegos.com.ar/"
                        target="_blank"
                        className="group inline-flex items-center text-[#6E5686] font-bold hover:text-purple-900 transition-colors"
                      >
                        <span className="mr-2">Probar ahora</span>
                        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                          <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* CTA */}
            <motion.div 
              className="mt-16 text-center"
              variants={itemVariants}
            >
              <Link href="https://mayoristas.enpalabras.com.ar/" target="_blank">
              <Button 
                size="lg" 
                className="bg-[#6E5686] hover:bg-[#513a67] text-white px-8 py-6 text-lg rounded-lg shadow-md transition-all hover:shadow-xl"
              >
                Potencia a tu equipo
              </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Resources;