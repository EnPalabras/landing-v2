'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink, ArrowUp } from 'lucide-react';
import logoEP from '@/../public/assets/logo-ep.png';

// Animaciones para elementos de entrada
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Enlaces del sitio organizados por categorías
const footerLinks = {
  menu: [
    { name: 'Inicio', href: '#navegacion' },
    { name: 'Productos', href: '#productos' },
    { name: 'Experiencias', href: '#experiencias' },
    { name: 'Nosotros', href: '#nosotros' },
  ],
  tienda: [
    { name: 'Inicio', href: 'https://enpalabras.com.ar', external: true },
    { name: 'Comprar', href: 'https://www.enpalabras.com.ar/productos/', external: true },
    { name: 'Sobre Nosotros', href: 'https://www.enpalabras.com.ar/quienessomos/', external: true },
  ],
  otros: [
    { name: 'Cápsula del Tiempo', href: 'https://www.enpalabras.com.ar/capsula-del-tiempo/', external: true },
    { name: 'Ruleta de Preguntas', href: 'https://www.enpalabrasjuegos.com.ar/', external: true },
    { name: 'Mercado Libre', href: 'https://www.mercadolibre.com.ar/juego-de-cartas-desconectados-en-palabras/p/MLA17840062?pdp_filters=item_id:MLA1109575910', external: true },
  ],
};

// Función para manejar scroll suave
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string | URL | null | undefined) => {
  // Solo aplicar para enlaces internos que comienzan con #
  if (href && typeof href === 'string' && href.startsWith('#')) {
    e.preventDefault();
    
    // Extraer el ID directamente (sin la /)
    const id = href.substring(1);
    const element = document.getElementById(id);
    
    if (element) {
      // Realizar scroll suave
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Actualizar la URL sin recargar la página
      window.history.pushState({}, '', href);
    }
  }
};

// Componente de enlace de pie de página
const FooterLink = ({ item }: { item: { name: string; href: string; external?: boolean } }) => (
  <li className="mb-2">
    {item.external ? (
      <Link
        href={item.href}
        target="_blank"
        className="group flex items-center justify-center md:justify-start text-gray-500 hover:text-purple-600 transition-colors duration-200"
      >
        <span>{item.name}</span>
        <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    ) : (
      <a
        href={item.href}
        onClick={(e) => handleSmoothScroll(e, item.href)}
        className="group flex items-center justify-center md:justify-start text-gray-500 hover:text-purple-600 transition-colors duration-200"
      >
        <span>{item.name}</span>
      </a>
    )}
  </li>
);


export default function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300" />
      
      {/* Formas decorativas */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-100 rounded-full opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-50 rounded-full opacity-30" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Columna de información principal */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4 xl:pr-8 flex flex-col items-center md:items-start"
          >
            <Image
              src={logoEP.src}
              width={150}
              height={50}
              alt="Logo En Palabras"
              className="h-auto"
            />
            
            <p className="mt-6 text-gray-600 text-center md:text-left">
              Creamos experiencias significativas que conectan a personas a través de conversaciones que importan.
            </p>
            
            <div className="mt-6 flex flex-col space-y-3 items-center md:items-start">
              <a href="mailto:info@enpalabras.com.ar" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                <Mail className="h-5 w-5 mr-3 text-purple-500" />
                <span>info@enpalabras.com.ar</span>
              </a>
              
              <a href="tel:+5491123456789" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                <Phone className="h-5 w-5 mr-3 text-purple-500" />
                <span>+54 9 11 2345-6789</span>
              </a>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3 text-purple-500 flex-shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
            
            <Link
              href="https://enpalabras.com.ar"
              target="_blank"
              className="mt-8 hidden md:inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-md hover:bg-purple-700 focus:bg-purple-700"
            >
              Tienda Online
            </Link>
          </motion.div>
          
          {/* Espacio */}
          <div className="hidden lg:block md:col-span-1"></div>
          
          {/* Enlaces de navegación */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center md:text-left">Menu</h3>
            <ul className="flex flex-col items-center md:items-start">
              {footerLinks.menu.map((item, index) => (
                <FooterLink key={`menu-${index}`} item={item} />
              ))}
            </ul>
          </motion.div>
          
          {/* Enlaces de tienda */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center md:text-left">Tienda Online</h3>
            <ul className="flex flex-col items-center md:items-start">
              {footerLinks.tienda.map((item, index) => (
                <FooterLink key={`tienda-${index}`} item={item} />
              ))}
            </ul>
          </motion.div>
          
          {/* Otros enlaces */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center md:text-left">Otros Links</h3>
            <ul className="flex flex-col items-center md:items-start">
              {footerLinks.otros.map((item, index) => (
                <FooterLink key={`otros-${index}`} item={item} />
              ))}
            </ul>
          </motion.div>
          
          {/* Información de contacto y social */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center md:text-left">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-3 mb-6">
              <Link 
                href="https://www.facebook.com/p/En-Palabras-100063708482183/"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              
              <Link 
                href="https://www.instagram.com/enpalabrass"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              
              <Link 
                href="https://www.linkedin.com/company/en-palabras"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Botón de tienda móvil */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="https://enpalabras.com.ar"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-md hover:bg-purple-700 focus:bg-purple-700"
          >
            Tienda Online
          </Link>
        </div>
        
        <hr className="my-12 border-gray-200" />
        
        {/* Pie de página y copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © Copyright {new Date().getFullYear()} En Palabras. Todos los derechos reservados.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex items-center justify-center md:justify-end space-x-6">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}