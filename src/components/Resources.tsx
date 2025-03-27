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

export const Resources = () => {
  return (
    <section className="w-full py-10 lg:py-24 relative overflow-hidden" id="recursos">
      {/* Formas decorativas de fondo - optimizadas para móvil */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-purple-300/20 blur-2xl"></div>
        <div className="absolute bottom-10 -left-10 w-48 h-48 md:w-80 md:h-80 rounded-full bg-purple-200/10 blur-3xl"></div>
      </div>
      
      {/* Contenedor principal */}
      <motion.div 
        className="lg:container relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="bg-white/80  backdrop-blur-md p-4 md:p-8 lg:p-16 rounded-2xl md:rounded-3xl shadow-x lg:mx-auto">
          {/* Encabezado de sección mejorado para móvil */}
          <div className="text-[#6E5686] max-w-6xl mx-auto mb-8 md:mb-16">
            <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12 relative">
              {/* Ícono decorativo - más pequeño en móvil */}
              <div className="inline-flex items-center justify-center p-2 md:p-3 bg-purple-100 rounded-full mb-4">
                <Lightbulb size={24} className="text-purple-700" />
              </div>
              
              {/* Título con tamaño responsivo */}
              <h2 
                className="text-3xl md:text-5xl lg:text-6xl font-bold relative z-10 mb-3 md:mb-5"
                style={{ fontFamily: 'var(--font-gotham-ultra)' }}
              >
                Recursos para tu equipo
              </h2>
              
              {/* Subtítulo con tamaño responsivo */}
              <h3 
                className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6"
                style={{ fontFamily: 'var(--font-gotham-ultra)' }}
              >
                ¿Por qué es importante fomentar conversaciones en tu equipo?
              </h3>

              {/* Línea divisoria decorativa */}
              <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-6 mb-4"></div>
              
              {/* Textos mejorados para móvil */}
              <p className="text-base md:text-lg font-semibold mb-3 max-w-3xl mx-auto px-2 text-balance">
                Las conversaciones auténticas no solo mejoran el rendimiento, sino
                que impulsan el crecimiento personal y profesional de tu equipo.
              </p>
              
              <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto px-2 text-balance">
                Fomentar la comunicación genuina permite construir confianza,
                resolver conflictos y despertar nuevas ideas. Cuando cada miembro se
                siente escuchado y valorado, el compromiso y la colaboración crecen,
                y con ellos, los resultados.
              </p>
              
              {/* Línea divisoria decorativa */}
              <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-4 mb-4 md:mt-8 md:mb-6"></div>
            </motion.div>
            
            {/* Cards de recursos - Estructura mejorada para móvil */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-8">
              {/* Tarjeta 1 */}
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow h-full flex flex-col transform-gpu transition-all duration-300">
                  {/* Imagen con overlay de gradiente - altura ajustada para móvil */}
                  <div className="relative h-56 md:h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6E5686]/60 to-transparent z-10"></div>
                    <Image
                      src={juegosImageMobile.src}
                      alt="Regalá productos En Palabras"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-4 md:p-8 z-20">
                      <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs md:text-sm font-semibold text-purple-800 mb-2">
                        Regalos Corporativos
                      </span>
                      <h4 
                        className="text-white text-2xl md:text-3xl font-bold mb-1 drop-shadow-sm"
                        style={{ fontFamily: 'var(--font-gotham-ultra)' }}
                      >
                        Regalá En Palabras
                      </h4>
                    </div>
                  </div>
                  
                  {/* Contenido - padding ajustado para móvil */}
                  <div className="p-4 md:p-8 flex-grow flex flex-col">
                    <p className="text-base md:text-lg text-[#6E5686] font-semibold mb-2 md:mb-3">
                      Regalos empresariales personalizados o listos para regalar
                    </p>
                    
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 flex-grow">
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
                        <span className="relative flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                          <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-0.5" />
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
                <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow h-full flex flex-col transform-gpu transition-all duration-300">
                  {/* Imagen con overlay de gradiente - altura ajustada para móvil */}
                  <div className="relative h-56 md:h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6E5686]/60 to-transparent z-10"></div>
                    <Image
                      src={ruletaImageMobile.src}
                      alt="Jugá con nuestra Ruleta"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-4 md:p-8 z-20">
                      <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs md:text-sm font-semibold text-purple-800 mb-2">
                        Herramienta Gratuita
                      </span>
                      <h4 
                        className="text-white text-2xl md:text-3xl font-bold mb-1 drop-shadow-sm"
                        style={{ fontFamily: 'var(--font-gotham-ultra)' }}
                      >
                        Ruleta de Preguntas
                      </h4>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-4 md:p-8 flex-grow flex flex-col">
                    <p className="text-base md:text-lg text-[#6E5686] font-semibold mb-2 md:mb-3">
                      Llevá En Palabras a tus reuniones de equipo
                    </p>
                    
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 flex-grow">
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
                        <span className="relative flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:scale-110" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* CTA - Ajustado para móvil */}
            <motion.div 
              className="mt-10 md:mt-16 text-center"
              variants={itemVariants}
            >
              <Link href="https://mayoristas.enpalabras.com.ar/" target="_blank">
                <Button 
                  size="lg" 
                  className="bg-[#6E5686] hover:bg-[#513a67] text-white px-5 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-lg shadow-md transition-all hover:shadow-xl"
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