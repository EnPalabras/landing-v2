'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import epContenido1 from '@/../public/assets/contenido/epContenido1.webp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.5,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden">
    
      <motion.div 
        className="container py-16 lg:py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20 md:items-center">
          <div className="flex flex-col">
            {/* Badge/Chip */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Link
                href="https://www.enpalabras.com.ar/productos/descubriendo-juego-de-cartas-para-ninos/"
                target="_blank"
                className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-6 text-sm text-gray-700 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white/95 group shadow-sm"
              >
                <span className="text-xs bg-purple-600 rounded-full text-white px-4 py-1.5 mr-3">
                  Nuevo
                </span>
                <span className="text-sm font-medium group-hover:underline">
                  Juego para Niños y Adultos <b>Descubriendo</b>
                </span>
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="scroll-m-20 text-5xl tracking-tight  
              lg:text-6xl text-center lg:text-start text-balance text-gray-900"
              style={{ fontFamily: 'var(--font-gotham-ultra)', fontWeight: 'bold' }}
              variants={itemVariants}
            >
              No somos un<span className="text-purple-800"> regalo
              corporativo</span>
            </motion.h1>

            

            {/* Subtitle */}
            <motion.p 
              className="mt-4 text-lg text-center lg:text-start max-w-3xl mx-auto lg:mx-0 text-gray-700"
              style={{ fontFamily: 'var(--font-gotham-rounded)' }}
              variants={itemVariants}
            >
              Somos la conexión que inspira a tu equipo a{' '}
              <b>forjar relaciones más profundas, genuinas y empáticas</b>.
              Fomentamos la colaboración y la creatividad a través de nuestras
              experiencias lúdicas
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="mt-7 grid grid-cols-2 place-items-center gap-3 w-full sm:inline-flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Link href="#contacto">
                <Button 
                  size="lg" 
                  className="transition-all hover:scale-105 shadow-lg bg-purple-600 hover:bg-purple-700"
                >
                  Contactanos
                </Button>
              </Link>
              <Link href="#experiencias">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="transition-all hover:scale-105 bg-white/80 backdrop-blur-sm hover:bg-white/90 border-purple-300"
                >
                  Experiencias
                </Button>
              </Link>
            </motion.div>

            {/* Ratings and Reviews */}
            <motion.div 
              className="mt-8 flex flex-row justify-center lg:justify-start"
              variants={itemVariants}
            >
              <div className="py-2 flex flex-col justify-center">
                <div className="flex space-x-1 justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-700">
                  <span className="font-bold">4.9</span> / 5 - más de 5k
                  reviews
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hero Images */}
          <motion.div 
            className="relative lg:order-1 pr-12 sm:pr-0 place-self-center"
            variants={imageVariants}
          >
            <div className="relative max-w-lg">
              <Image
                src="https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp"
                alt="Juego de Cartas - Desconectados"
                width={500}
                height={400}
                className="object-bottom rounded-xl shadow-xl z-10 relative"
                priority
              />

              <motion.div 
                className="absolute origin-bottom-right scale-90 -bottom-20 -right-20 z-20"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-200 rounded-xl blur-md -m-1 opacity-40"></div>
                  <Image
                    src={epContenido1.src}
                    alt="Juego de Cartas - Contenido"
                    width={300}
                    height={250}
                    className="rounded-xl shadow-xl relative"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Efecto "onda" en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <div className="w-full h-24 bg-white rounded-t-[50%] transform translate-y-12"></div>
      </div>
    </section>
  );
}