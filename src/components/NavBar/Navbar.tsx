'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import { ShoppingBag, Phone, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logoEP from '@/../public/assets/logo-ep.png';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/#productos' },
  { name: 'Experiencias', href: '/#experiencias' },
  { name: 'Recursos', href: '/#recursos' },
  { name: 'Nosotros', href: '/#nosotros' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  // Transformaciones basadas en scroll para efectos visuales
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['none', 'white']
  );

  
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']
  );

  return (
    <motion.header
      style={{ 
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow,
        backgroundColor,
      }}
      className="w-full py-2 bg-transparent"
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
                    <Link href={item.href} legacyBehavior passHref>
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
            <Link href="https://enpalabras.com.ar/contacto" target="_blank">
              <Button variant="outline" className="flex items-center gap-2">
                <Phone size={16} />
                Contacto
              </Button>
            </Link>
            <Link href="https://enpalabras.com.ar" target="_blank">
              <Button className="flex items-center gap-2">
                <ShoppingBag size={16} />
                Tienda
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#E9DBF7]">
                <div className="py-6 flex flex-col h-full">
                  {/* Mobile Logo and Close Button */}
                  <div className="flex items-center justify-between mb-6">
                    <Image 
                      src={logoEP}
                      alt="En Palabras Logo"
                      width={100}
                      height={30}
                      className="w-auto h-8"
                    />
                    <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-6 mb-8">
                    {navItems.map((item) => (
                      <Link 
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-[#513a67]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Action Buttons */}
                  <div className="mt-auto flex flex-col space-y-4">
                    <Link href="https://enpalabras.com.ar/contacto" target="_blank">
                      <Button variant="outline" className="w-full justify-center gap-2">
                        <Phone size={16} />
                        Contacto
                      </Button>
                    </Link>
                    <Link href="https://enpalabras.com.ar" target="_blank">
                      <Button className="w-full justify-center gap-2">
                        <ShoppingBag size={16} />
                        Tienda
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}