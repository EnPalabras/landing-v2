'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Heart, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react';

// Efecto de animación para los elementos
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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

// Datos de valores
const values = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Comunicación Auténtica",
    description: "Creemos en la importancia de diálogos genuinos que construyan conexiones reales"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Empatía y Respeto",
    description: "Valoramos cada voz y perspectiva única que contribuye a experiencias enriquecedoras"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Comunidad y Pertenencia",
    description: "Construimos espacios donde cada persona puede sentirse valorada y conectada"
  }
];

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#FAF7FE] py-8 overflow-hidden 
    relative z-10 mt-0 w-full"
    id="nosotros"
    >
      {/* Formas decorativas */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado superior */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12"
          >
            {/* Logo */}
            <div className="bg-white p-4 rounded-full shadow-md mb-6">
              <img
                src="//acdn.mitiendanube.com/stores/001/705/915/themes/common/logo-1600072508-1621866994-b0fd695ab493ee571f9f076ae0ea024d1621866995.ico?0"
                alt="Icono de En Palabras"
                className="w-16 h-16"
              />
            </div>
            
            {/* Separador decorativo */}
            <div className="flex items-center justify-center w-full mb-2">
              <div className="h-px w-12 bg-purple-300"></div>
              <div className="mx-4 h-2 w-2 rounded-full bg-purple-400"></div>
              <div className="h-px w-12 bg-purple-300"></div>
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#6E5686] text-center mb-8"
            style={{ fontFamily: 'var(--font-gotham-ultra)' }}
          >
            ¿Quiénes somos?
          </motion.h2>
          
          {/* Descripción principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-balance text-[#6E5686] text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              En <span className="font-bold">En Palabras</span> somos especialistas
              en crear experiencias que conectan y transforman equipos a través de
              la comunicación y empatía. Nuestra misión es ayudarte a construir una
              cultura organizacional sólida, donde la confianza y la colaboración
              impulsen el éxito y los resultados.
            </p>
          </motion.div>
          
          {/* Tarjetas de valores */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-purple-600">
                  {value.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#6E5686] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-balance text-base md:text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Imagen de equipo Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl mb-16 max-w-5xl mx-auto"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}