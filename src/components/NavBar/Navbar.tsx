'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Phone, ExternalLinkIcon } from 'lucide-react';
import logoEP from '@/../public/assets/logo-ep.png';
import { ImprovedMobileMenu } from './MobileMenu'; // Importa el componente de menú móvil

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/#productos' },
  { name: 'Experiencias', href: '/#experiencias' },
  { name: 'Recursos', href: '/#recursos' },
  { name: 'Nosotros', href: '/#nosotros' },
];

// Función para manejar scroll suave
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string | URL | null) => {
  // Solo aplicar para enlaces internos que comienzan con /#
  if (href && typeof href === 'string' && href.startsWith('/#')) {
    e.preventDefault();
    
    // Extraer el ID desde el href
    const id = href.replace('/#', '');
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

export default function Navbar() {
  return (
    <header className="w-full py-4 z-40"
    id="navegacion"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src={logoEP} 
                alt="En Palabras Logo" 
                width={120}
                height={40}
                className="w-auto h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link 
                      href={item.href} 
                      legacyBehavior 
                      passHref
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                    >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="https://mayoristas.enpalabras.com.ar/contacto" target="_blank">
              <Button variant="outline" className="flex items-center gap-2 shadow-md">
                <ExternalLinkIcon size={16} />
                Contacto
              </Button>
            </Link>
            <Link href="https://enpalabras.com.ar" target="_blank">
              <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 shadow-md">
                <ShoppingBag size={16} />
                Tienda
              </Button>
            </Link>
          </div>

          {/* Menú Móvil Mejorado */}
          <ImprovedMobileMenu />
        </div>
      </div>
    </header>
  );
}