'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Target, Zap } from 'lucide-react';
import bgimgDesktop from '@/../public/images/desktop/4.jpg';
import bgimgMobile from '@/../public/images/mobile/4.jpg';

// Animación para los elementos
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Animación para el contenedor con stagger de los hijos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function NextLevel() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden w-full
      translate-y-[-50px] z-0
    ">
      {/* Fondo para desktop y móvil con overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Imagen de fondo para desktop */}
        <div className="hidden md:block relative h-full w-full">
          <Image
            src={bgimgDesktop.src}
            alt="Background Image"
            fill
            className="object-cover object-center w-full"
            priority
          />
          {/* Overlay semitransparente */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6E5686]/90 to-[#6E5686]/60 mix-blend-multiply" />
        </div>
        
        {/* Imagen de fondo para móvil */}
        <div className="md:hidden relative h-full w-full">
          <Image
            src={bgimgMobile.src}
            alt="Background Image"
            fill
            className="object-cover object-center w-full"
            priority
          />
          {/* Overlay semitransparente */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6E5686]/90 to-[#6E5686]/60 mix-blend-multiply" />
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto overflow-hidden">
          {/* Insignia superior */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
              <Zap className="h-4 w-4 mr-1" />
              Potenciá tu equipo
            </span>
          </motion.div>
          
          {/* Título principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#6E5686] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-gotham-ultra)' }}
          >
            Llevá tu equipo al siguiente nivel
          </motion.h2>
          
          {/* Línea decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-1 w-24 bg-purple-300 mb-8 origin-left"
          />
          
          {/* Párrafos */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-gray-700 text-base md:text-lg"
            >
              No esperes más para transformar la comunicación en tu empresa.
            </motion.p>
            
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-gray-700 text-balance"
            >
              Desde dinámicas gratuitas hasta regalos personalizados, en{' '}
              <span className="font-bold">En Palabras</span> tenemos todo lo que
              necesitás para mejorar el trabajo en equipo y crear una cultura de
              confianza y pertenencia.
            </motion.p>
          </motion.div>
          
          {/* Lista de beneficios */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mb-10"
          >
            <motion.div variants={fadeInUp} className="flex items-start">
              <BadgeCheck className="h-6 w-6 text-purple-600 
              mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 ">Incrementá la comunicación efectiva entre los miembros del equipo</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-start">
              <BadgeCheck className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Fomentá un ambiente de trabajo más colaborativo y transparente</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-start">
              <BadgeCheck className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Desarrollá relaciones interpersonales más sólidas y genuinas</p>
            </motion.div>
          </motion.div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="https://mayoristas.enpalabras.com.ar/">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#6E5686] text-white font-bold 
                py-3 px-6 rounded-lg shadow-lg hover:bg-[#513a67] transition-all flex items-center justify-center"
                style={{ fontFamily: 'var(--font-gotham-ultra)' }}
              >
                ¡TRANSFORMÁ TU EQUIPO HOY!
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
            
           {/* <Link href="#faqs">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#6E5686] border border-[#6E5686] font-bold 
                py-3 px-6 rounded-lg shadow-sm hover:bg-purple-50 transition-all flex items-center justify-center"
              >
                Ver preguntas frecuentes
                <Target className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}