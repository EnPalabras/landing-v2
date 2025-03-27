'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Phone, 
  X, 
  Menu, 
  ChevronRight, 
  Home, 
  Package, 
  Star, 
  Lightbulb, 
  Users,
  Instagram,
  Facebook 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoEP from '@/../public/assets/logo-ep.png';

// Variantes de animación para el contenedor del menú
const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 0.2, 1],
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Variantes de animación para los elementos individuales
const itemVariants = {
  closed: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Iconos para los elementos del menú
const menuIcons = {
  'Inicio': <Home className="h-5 w-5" />,
  'Productos': <Package className="h-5 w-5" />,
  'Experiencias': <Star className="h-5 w-5" />,
  'Recursos': <Lightbulb className="h-5 w-5" />,
  'Nosotros': <Users className="h-5 w-5" />
};

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/#productos' },
  { name: 'Experiencias', href: '/#experiencias' },
  { name: 'Recursos', href: '/#recursos' },
  { name: 'Nosotros', href: '/#nosotros' },
];

export const ImprovedMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string | URL | null | undefined) => {
    e.preventDefault();
    setIsOpen(false); // Cerrar el menú
    
    // Si es la página de inicio, simplemente volver arriba
    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    // Para otros enlaces con ancla
    if (typeof href === 'string' && href.includes('#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Pequeño retraso para permitir que el menú se cierre primero
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Actualizar la URL sin recargar la página
          window.history.pushState({}, '', href);
        }, 300);
      }
    }
  };
  
  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Botón del menú */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(true)}
        className="hover:bg-purple-100 transition-colors"
      >
        <Menu className="h-6 w-6 text-gray-700" />
        <span className="sr-only">Abrir menú</span>
      </Button>
      
      {/* Overlay y menú desplegable con AnimatePresence para manejar la animación de entrada/salida */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay de fondo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel del menú */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-b from-white to-[#F7F2FF] shadow-xl z-50 flex flex-col overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Encabezado del menú */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-between p-6 border-b border-gray-100"
              >
                <Image 
                  src={logoEP.src}
                  alt="En Palabras Logo"
                  width={120}
                  height={40}
                  className="w-auto h-8"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-red-50 hover:text-red-500 transition-colors rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>
              </motion.div>
              
              {/* Enlaces de navegación */}
              <motion.nav className="flex-grow overflow-auto px-6 py-8">
                <ul className="space-y-6">
                  {navItems.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="flex items-center py-2 text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors group"
                      >
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          {menuIcons[item.name as keyof typeof menuIcons]}
                        </span>
                        {item.name}
                        <ChevronRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
              
              {/* Acciones y redes sociales */}
              <motion.div 
                variants={itemVariants}
                className="p-6 border-t border-gray-100 bg-white/80 backdrop-blur-sm"
              >
                {/* Redes sociales */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <a 
                    href="https://www.instagram.com/enpalabrass" 
                    target="_blank"
                    className="bg-purple-100 text-purple-600 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/p/En-Palabras-100063708482183/" 
                    target="_blank"
                    className="bg-purple-100 text-purple-600 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
                
                {/* Botones de acción */}
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://enpalabras.com.ar/contacto" 
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-purple-200 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Contacto</span>
                  </a>
                  <a 
                    href="https://enpalabras.com.ar" 
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Tienda</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImprovedMobileMenu;