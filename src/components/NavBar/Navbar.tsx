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
            <Link href={`https://wa.me/5491132006504`} target="_blank">
              <Button variant="outline" className="flex items-center gap-2 shadow-md
                bg-green-600 hover:bg-green-700 text-white hover:text-white
              ">
                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
              <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
            </svg>

                Contacto
              </Button>
            </Link>
            <Link href="https://mayoristas.enpalabras.com.ar" target="_blank">
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