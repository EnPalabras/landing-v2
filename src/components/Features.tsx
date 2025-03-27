'use client';

import { motion } from 'framer-motion';
import { Users, Sparkles, Heart, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// Importamos solo los íconos de Lucide que necesitamos

// Datos de características mejorados con íconos (todos plateados)
const featuresData = [
  {
    title: 'Mayor Colaboración',
    description: 'Equipos más conectados que alcanzan metas juntos, construyendo confianza y sentido de pertenencia.',
    icon: <Users className="h-8 w-8 text-purple-600" />,
    color: 'bg-gradient-to-br from-gray-50 to-gray-100',
    highlight: 'border-gray-200'
  },
  {
    title: 'Mayor Creatividad e Innovación',
    description: 'Generación de ideas frescas que mejoran procesos y estimulan un pensamiento más allá de lo cotidiano.',
    icon: <Sparkles className="h-8 w-8 text-purple-600" />,
    color: 'bg-gradient-to-br from-gray-50 to-gray-100',
    highlight: 'border-gray-200'
  },
  {
    title: 'Mayor Compromiso',
    description: 'Equipos motivados que aportan al éxito de la empresa desde una genuina conexión con sus valores.',
    icon: <Heart className="h-8 w-8 text-purple-600" />,
    color: 'bg-gradient-to-br from-gray-50 to-gray-100',
    highlight: 'border-gray-200'
  },
];

// Variantes de animación para el contenedor y las tarjetas
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

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -10,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

// Componente de tarjeta de característica
const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className={`rounded-3xl ${feature.color} border ${feature.highlight} shadow-md p-8 
      flex flex-col h-full transform transition-all duration-300`}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Encabezado de la tarjeta */}
      <div className="flex items-center mb-6">
        <div className="mr-4 bg-white p-3 rounded-xl shadow-sm">
          {feature.icon}
        </div>
        <h3 
          className="text-base md:text-lg font-bold text-[#6E5686] tracking-tight"
          style={{ fontFamily: 'var(--font-gotham-ultra)' }}
        >
          {feature.title}
        </h3>
      </div>
      
      {/* Descripción */}
      <p className="text-gray-700 flex-grow text-base md:text-lg">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default function Features() {
  return (
      <section className="bg-white w-full rounded-b-3xl z-10">
    <div className="relative py-20 overflow-hidden" id="features">
      {/* Fondo con textura sutil */}
      <div className="absolute inset-0 bg-white rounded-b-3xl backdrop-filter backdrop-blur-sm z-0" />
      
      {/* Fondo decorativo simple */}

      
      {/* Contenido principal */}
      <div className="container px-4 mx-auto relative z-10 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 mb-6">
            <Lightbulb className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Beneficios comprobados</span>
          </div>
          
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl 
            text-balance
            font-extrabold text-[#6E5686] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-gotham-ultra)' }}
          >
            ¿Qué gano fortaleciendo conversaciones genuinas?
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 mb-6 text-balance">
            Descubrí cómo las experiencias de diálogo significativo transforman la dinámica de los equipos
            y potencian la productividad sin sacrificar el factor humano.
          </p>
          
          {/* Separador decorativo */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-purple-300"></div>
            <div className="mx-4 h-2 w-2 rounded-full bg-purple-400"></div>
            <div className="h-px w-16 bg-purple-300"></div>
          </div>
        </motion.div>

        {/* Tarjetas de características */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>

      
      </div>

      
    </div>
    </section>
  );
}