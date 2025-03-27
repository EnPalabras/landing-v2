'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Award, Sparkles, ExternalLinkIcon } from 'lucide-react';
import coraBlue from '@/../public/assets/corablue.png';
import google from '@/../public/assets/google.png';
import sig from '@/../public/assets/sig.png';
import Link from 'next/link';

// Datos de testimonios (mantenidos del componente original)
const testimonialsData = [
  {
    name: 'Belén Bauzá',
    company: 'Cora Blue',
    testimonial:
      'Mis clientes valoran nuestra creatividad y enfoque en ofrecer ideas simples y aplicables en diferentes contextos, no solo laborales. Desconectarnos cumple con esa visión.',
    rating: 5,
    src: coraBlue.src,
  },
  {
    name: 'Carolina Arón',
    company: 'Google',
    testimonial:
      'Desconectados me encantó y me ayudó a tener conversaciones enriquecedoras con personas cercanas y no tan cercanas. Lo recomiendo como regalo empresarial.',
    rating: 5,
    src: 'https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=2147483647&v=beta&t=fnMgfquTmN5LLPDz_pQ3ABlHsrgISwU9CQS35ol7QpE',
  },
  {
    name: 'María Esquivel',
    company: 'SIG',
    testimonial:
      'Es un juego sencillo, sin instrucciones complicadas. Une a personas de diferentes edades y genera conversaciones. El valor está en las personas que lo juegan, no solo en el juego en sí.',
    rating: 5,
    src: 'https://media.licdn.com/dms/image/v2/C4D0BAQEaoJlW4pPeBA/company-logo_200_200/company-logo_200_200/0/1669810751485/soluciones_informaticas_globales_sa_logo?e=2147483647&v=beta&t=eQiQOFsvToEvf3LbbXXyW5OWHc4LBANOiWV8vrf4T4g',
  },
];

// Efecto de animación para las tarjetas de testimonios
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
// Componente de tarjeta de testimonio
const TestimonialCard = ({ testimonial, index }: { testimonial: { src: string; company: string; name: string; testimonial: string; rating: number }; index: number }) => {
  // Aplicamos colores ligeramente diferentes para cada tarjeta
  const gradientColors: string[] = [
    'from-purple-50 to-purple-100',
    'from-purple-100 to-purple-200',
    'from-purple-50 to-purple-100'
  ];

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-br ${gradientColors[index]} rounded-xl shadow-lg p-6 flex flex-col h-full relative overflow-hidden`}
    >
      {/* Ícono de comillas decorativo */}
      <Quote className="absolute top-4 right-4 text-purple-200 h-16 w-16 opacity-40" />
      
      <div className="flex items-center mb-6 z-10">
        <div className="relative h-16 w-16 mr-4">
          <img
            src={testimonial.src}
            alt={`Logo de ${testimonial.company}`}
            className="object-cover w-full h-full rounded-full border-2 border-purple-300"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg text-purple-900">{testimonial.name}</h4>
          <p className="text-purple-700">{testimonial.company}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>

      <blockquote className="flex-grow italic text-purple-800 relative z-10">
        "{testimonial.testimonial}"
      </blockquote>
    </motion.div>
  );
};

// Componente principal de testimonios
export default function Testimonials() {
  return (
    <section className="relative py-8 pb-16 overflow-hidden w-full 
    bg-gradient-to-b from-transparent via-purple-200 to-white
    " id="experiencias">
      {/* Formas decorativas de fondo */}
      <div className="absolute inset-0 bg-[#6E5686] transform origin-top-right z-0
        rounded-3xl
      "></div>
      
      
      {/* Contenido principal */}
      <div className="container px-4 md:px-6 mx-auto relative z-10 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="text-yellow-300 mr-2 h-6 w-6" />
            <span className="text-white text-sm font-medium uppercase tracking-wide">Experiencias</span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'var(--font-gotham-ultra)' }}
          >
            Empresas que confiaron en nosotros
          </h2>
          
          <p className="text-lg text-purple-200 max-w-3xl mx-auto mb-8">
            Descubre qué dicen nuestros clientes sobre cómo nuestros productos 
            les ayudaron a fomentar conexiones genuinas.
          </p>
          
          {/* Divisor decorativo */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-purple-400"></div>
            <Sparkles className="mx-4 h-6 w-6 text-purple-200" />
            <div className="h-px w-16 bg-purple-400"></div>
          </div>
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="https://mayoristas.enpalabras.com.ar/contacto"
            className="bg-white text-[#6E5686] rounded-lg uppercase py-4 px-8 font-bold            
            text-xl hover:bg-purple-100 transition-all duration-300 ease-in-out shadow-lg"
            style={{ fontFamily: 'var(--font-gotham-ultra)' }}
          >
            Probalo vos también
          </Link>

        </motion.div>
      </div>
      
    </section>
  );
}