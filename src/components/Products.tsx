'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Datos de productos
const products = [
  {
    id: 'desconectados',
    externalLink: 'https://empresas.enpalabras.com.ar/productos/desconectados-juego-de-cartas-regalo-empresarial/',
    title: 'Desconectados',
    subtitle: 'Jugá y Conectá',
    badge: 'Juegos',
    description: 'Es una invitación a encontrarnos con nuestra familia, pareja y amistades. Las cartas funcionan como disparadores para compartir creencias y sensaciones.',
    image: 'https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp',
    details: {
      fullDescription: 'Es una invitación a encontrarnos con nuestra familia, pareja y amistades. Las cartas que encontraran tienen el objetivo de funcionar como disparadores para compartir creencias y sensaciones que, muchas veces, el ritmo de vida nos lo impide.',
      sections: [
        {
          title: '200 cartas divididas en 4 secciones:',
          items: [
            { icon: '🤓', title: 'Perspectiva:', text: 'cartas para debatir e intercambiar maneras de ver la vida' },
            { icon: '😁', title: 'Presentación:', text: 'cartas sobre gustos y preferencias' },
            { icon: '😌', title: 'Profundidad:', text: 'cartas para intimar' },
            { icon: '😜', title: 'Descomprimir:', text: 'cartas para relajar y activar tu creatividad' }
          ]
        }
      ],
      images: [
        'https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp',
        'https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartass1-54e335af8b41c049a016685182177994-640-0.webp',
        'https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-familias1-e967b8ecf1aad2e0bf16728584939231-1024-1024.webp'
      ]
    }
  },
  {
    id: 'edicion-familia',
    externalLink: 'https://empresas.enpalabras.com.ar/productos/familia-juego-de-cartas-regalo-empresarial/',
    title: 'Edición Familia',
    subtitle: 'Juga en Familia',
    badge: 'Juegos',
    description: 'Es una invitación a explorar tus raíces y construir tu identidad integrando tu historia en un espacio de intimidad y seguridad emocional.',
    image: 'https://acdn-us.mitiendanube.com/stores/001/705/915/products/8-85f0117fe39f08c01117325532846850-640-0.webp',
    details: {
      fullDescription: 'Este juego es una invitación a explorar tus raíces, comprender las dinámicas familiares, y construir tu identidad integrando tu historia en un espacio de intimidad y seguridad emocional.',
      sections: [
        {
          title: '191 cartas divididas en 3 secciones:',
          items: [
            { icon: '🌱', title: 'Raíces:', text: 'cartas para conocer la historia de nuestros antepasados' },
            { icon: '🧘🏻', title: 'Profundidad:', text: 'para entender los desafíos y dinámicas de los vínculos familiares' },
            { icon: '✨', title: 'Sobre Mí:', text: 'para reflexionar sobre la influencia de la familia, valorando tu individualidad y quién elegís ser' }

          ]
        }
      ],
      images: [
        'https://acdn-us.mitiendanube.com/stores/001/705/915/products/8-85f0117fe39f08c01117325532846850-640-0.webp',
        'https://acdn-us.mitiendanube.com/stores/001/705/915/products/7-d59b7a520048b26c2d17325532839908-640-0.webp',
        'https://acdn-us.mitiendanube.com/stores/001/705/915/products/11-e262f7736a1b028bd017325532838627-1024-1024.webp'
      ]
    }
  },
  {
    id: 'desconocidos',
    externalLink: 'https://empresas.enpalabras.com.ar/productos/desconocidos-juego-de-cartas-reventa/',
    title: 'Desconocidos',
    subtitle: 'Rompé el Hielo',
    badge: 'Juegos',
    description: 'Desconocidos es una invitación a romper el hielo sin presión, conectar sin forzar y tener charlas reales desde el primer encuentro.',
    image: 'https://dcdn-us.mitiendanube.com/stores/005/267/426/products/_mercado-libre_imagen___meli-ads-creativos-para-desconocidos_desconocidos_8_mayo-0ef5925151eb551ae717486336831124-640-0.jpg',
    details: {
      fullDescription: 'Desconocidos es una invitación a romper el hielo sin presión, conectar sin forzar y tener charlas reales desde el primer encuentro. Ideal para citas, juntadas, viajes o cualquier momento donde haya ganas de conocerse más y mejor.',
      sections: [
        {
          title: 'Una única sección con 50 preguntas',
          items: [
          ]
        }
      ],
      images: [
        'https://dcdn-us.mitiendanube.com/stores/005/267/426/products/_mercado-libre_imagen___meli-ads-creativos-para-desconocidos_desconocidos_8_mayo-0ef5925151eb551ae717486336831124-640-0.jpg',
        'https://dcdn-us.mitiendanube.com/stores/005/267/426/products/_mercado-libre_imagen___meli-ads-creativos-para-desconocidos_desconocidos_7_mayo-bd78d16afa0b181a3717486336831610-640-0.jpg',
        'https://dcdn-us.mitiendanube.com/stores/005/267/426/products/_mercado-libre_imagen___meli-ads-creativos-para-desconocidos_desconocidos_7_mayo-1-029f0b92bb38697c5717486336839353-640-0.jpg'
      ]
    }
  },
  {
    id: 'descubriendo',
    externalLink: 'https://empresas.enpalabras.com.ar/productos/descubriendo-juego-de-cartas-para-ninos/',
    title: 'Descubriendo',
    subtitle: 'Jugá con los más chicos',
    badge: 'Juegos',
    description: 'Conectar con los/as niños/as no siempre es fácil. Descubriendo te invita a compartir preguntas que abren oportunidades.',
    image: 'https://acdn.mitiendanube.com/stores/001/705/915/products/img_3580-f1782d1433931301bc17195816596939-1024-1024.webp',
    details: {
      fullDescription: 'Conectar con los/as niños/as no siempre es fácil, y la rutina puede complicar estos momentos. Descubriendo te invita a compartir preguntas que abren oportunidades para conocerse, aprender y desarrollar habilidades mientras juegan.',
      sections: [
        {
          title: '5 secciones que van de lo profundo a la risa y el movimiento:',
          items: [
            { icon: '💫', title: 'Relaciones Mágicas:', text: 'para pensar los vínculos' },
            { icon: '🌎', title: 'Mi Mundo:', text: 'para conversar sobre cómo perciben y piensan el mundo' },
            { icon: '🌊', title: 'Mar de Emociones:', text: 'para navegar en el mundo emocional' },
            { icon: '🎁', title: 'Caja de Sorpresas:', text: 'para descubrir curiosidades y un popurrí de temáticas' },
            { icon: '🚀', title: 'Misiones Especiales:', text: 'para descomprimir y ponerse en movimiento' }
          ]
        }
      ],
      images: [
        'https://acdn.mitiendanube.com/stores/001/705/915/products/img_3580-f1782d1433931301bc17195816596939-1024-1024.webp',
        'https://acdn.mitiendanube.com/stores/001/705/915/products/img_3845-b1dbd29de9cc10904817195816780228-640-0.webp',
        'https://acdn.mitiendanube.com/stores/001/705/915/products/img_3775-e0dd3e23e6713b803f17195816702543-640-0.webp'
      ]
    }
  },

  {
    id: 'journal',
    title: 'Journal',
    externalLink: 'https://empresas.enpalabras.com.ar/productos/journal-en-palabras/',
    subtitle: 'Conectá con vos mismo',
    badge: 'Journal',
    description: 'Es un diario personal que te invita a dialogar sinceramente con vos mismo.',
    image: 'https://acdn.mitiendanube.com/stores/001/705/915/products/journal-3_-c6e7033b0fcbc780b017012740186645-640-0.webp',
    details: {
      fullDescription: 'Es un diario personal que te invita a dialogar sinceramente con vos mismo. Incluye preguntas diarias y dinámicas para ayudarte a salir del "modo automático" y embarcarte en un viaje de autoconocimiento profundo. La propuesta es simple. Parar. Escribir. Repetir.',
      sections: [
        {
          title: 'Características:',
          items: [
            { icon: '📓', title: 'Opciones:', text: 'con anillado y sin anillado' },
            { icon: '📏', title: 'Tamaño:', text: '13,40cm x 21,80cm' },
            { icon: '📄', title: 'Cantidad de hojas:', text: '128' },
            { icon: '⏱️', title: 'Duración:', text: '6 meses' }
          ]
        }
      ],
      images: [
        'https://acdn.mitiendanube.com/stores/001/705/915/products/journal-3_-c6e7033b0fcbc780b017012740186645-640-0.webp',
        'https://acdn.mitiendanube.com/stores/001/705/915/products/preguntas-diarias-18-53fb7544194d6b56c317014369171282-640-0.webp',
        'https://acdn.mitiendanube.com/stores/001/705/915/products/journal-producto-tienda-nube-2-040717723ae880509417012739213304-640-0.webp'
      ]
    }
  },
  {
    id: 'personalizadas',
    externalLink: 'https://empresas.enpalabras.com.ar/productos/cartas-personalizadas/',
    title: 'Cartas Personalizadas',
    subtitle: 'Personalizá tu Juego',
    badge: 'Juegos',
    description: 'Te invitamos a crear cartas con preguntas personalizadas sobre la cultura o experiencia de tu marca.',
    image: 'https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-regalo-empresas1-57ebcbfc96842f074916685182180725-640-0.webp',
    details: {
      fullDescription: 'Te invitamos a crear cartas con preguntas personalizadas sobre la cultura o experiencia de tu marca. Nos compartís tu idea y el equipo de En palabras la transforma una charla amigable y profunda.',
      sections: [
        {
          title: 'Beneficios:',
          items: [
            { icon: '🎯', title: 'Personalización:', text: 'Adaptamos el contenido a tu marca y objetivos' },
            { icon: '🔄', title: 'Proceso:', text: 'Te acompañamos desde la idea hasta la producción' },
            { icon: '🎁', title: 'Presentación:', text: 'Podés agregar el logo de tu empresa en la bolsa que acompaña el juego' }
          ]
        }
      ],
      images: [
        'https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-regalo-empresas1-57ebcbfc96842f074916685182180725-640-0.webp'
      ]
    }
  }
  /* 
  {
     id: 'ano-nuevo',
     externalLink: 'https://empresas.enpalabras.com.ar/productos/anonuevo/',
     title: 'Edición Año Nuevo',
     subtitle: 'Hacé tu balance',
     badge: 'Juegos',
     description: 'Es una invitación a reflexionar sobre el año que pasó para recibir el nuevo con mayor conciencia.',
     image: 'https://acdn.mitiendanube.com/stores/001/705/915/products/ano-nuevo-21-f8bd8bdad5b29c1ad216679475830811-640-0.webp',
     details: {
       fullDescription: 'Es una invitación a reflexionar sobre el año que pasó para recibir el nuevo con mayor conciencia. Las cartas funcionan como disparadores para revisar lo vivido, cerrar etapas y conectar con los deseos y objetivos para el próximo ciclo.',
       sections: [
         {
           title: '50 cartas con dos secciones:',
           items: [
             { icon: '💫', title: 'Retrospección:', text: 'cartas para registrar cómo te hacen sentir tus experiencias pasadas' },
             { icon: '✨', title: 'Proyección:', text: 'cartas que te guían a alcanzar lo que te gustaría integrar' }
           ]
         }
       ],
       images: [
         'https://acdn.mitiendanube.com/stores/001/705/915/products/ano-nuevo-21-f8bd8bdad5b29c1ad216679475830811-640-0.webp',
         'https://acdn.mitiendanube.com/stores/001/705/915/products/juego-de-cartas-edicion-ano-nuevo-en-palabrasss1-ae868838e90fff7e7d16680888314539-640-0.webp',
         'https://acdn.mitiendanube.com/stores/001/705/915/products/11-6abc5a8f6a44714a8516678314509320-1024-1024.webp'
       ]
     }
   }, 
   */

  /**
    {
     id: 'destapados',
     externalLink: 'https://empresas.enpalabras.com.ar/productos/destapados-juego-de-cartas-regalo-empresarial/',
     title: 'Destapados',
     subtitle: 'Explorá y destapá tabúes',
     badge: 'Juegos',
     description: 'Destapados es un disparador de encuentros festivos e íntimos, corporales y emocionales.',
     image: 'https://acdn.mitiendanube.com/stores/001/705/915/products/destapados-juego-de-cartas-para-previas1-7fcace62e2e91e71a216685193063177-640-0.webp',
     details: {
       fullDescription: 'Destapados es un disparador de encuentros festivos e íntimos, corporales y emocionales. Las cartas buscan destapar los estereotipos y prejuicios que se acarrean, invitándonos a sumergirnos libremente en nuestros pensamientos, emociones, preferencias y, si así lo desean, su cuerpo.',
       sections: [
         {
           title: '200 cartas divididas en 4 secciones:',
           items: [
             { icon: '🔥', title: 'Picantes:', text: 'cartas que encienden tus experiencias' },
             { icon: '🎲', title: 'Random:', text: 'cartas para improvisar' },
             { icon: '😌', title: 'Profundidad:', text: 'cartas para intimar' },
             { icon: '🤓', title: 'Perspectiva:', text: 'cartas para debatir sobre las relaciones' }
           ]
         }
       ],
       images: [
         'https://acdn.mitiendanube.com/stores/001/705/915/products/destapados-juego-de-cartas-para-previas1-7fcace62e2e91e71a216685193063177-640-0.webp',
         'https://acdn.mitiendanube.com/stores/001/705/915/products/destapados-juego-de-cartas-en-pareja1-7c065a974fe2fe441e16685193060239-640-0.webp',
         'https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-amigos-y-pareja1-04a8074a73b8e6859b16728612235787-1024-1024.webp'
       ]
     }
   },
  */


];

// Componente para la imagen con puntos de navegación
const ImageGallery = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="relative h-72 sm:h-96 w-full">
        <Image
          src={images[currentImage]}
          alt="Imagen del producto"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-purple-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Componente para la tarjeta de producto original
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg 
    shadow h-full flex flex-col">
      <div className="relative flex-grow flex flex-col p-5">
        {/* Imagen con altura fija */}
        <div className="block mb-6 border-b border-gray-200 pb-4">
          <div className="relative h-60 w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-600 uppercase bg-white rounded-full">
                {product.badge}
              </span>
            </div>
          </div>
        </div>

        {/* Contenido con alturas fijas */}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <span className="block text-sm font-semibold tracking-widest text-gray-500 uppercase">
              {product.subtitle}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 h-14 flex items-center" style={{ fontFamily: 'var(--font-gotham-ultra)' }}>
              {product.title}
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-600 h-24 overflow-hidden">
              {product.description}
            </p>
          </div>

          {/* Botón siempre al mismo nivel */}
          <div className="mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex items-center 
                justify-center pb-0.5 text-sm md:text-base font-semibold text-purple-600 transition-all duration-200 border-b-2 border-transparent hover:border-purple-600 focus:border-purple-600">
                  Conocer más
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="pb-4 border-b">
                  <DialogTitle className="text-3xl text-[#6E5686]" style={{ fontFamily: 'var(--font-gotham-ultra)' }}>
                    {product.title}
                  </DialogTitle>
                  <DialogDescription className="text-xl font-semibold text-gray-700">
                    {product.subtitle}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div>
                    <ImageGallery images={product.details.images} />
                  </div>

                  <div>
                    <p className="text-gray-700 text-base mb-6">
                      {product.details.fullDescription}
                    </p>

                    {product.details.sections.map((section: any, index: React.Key) => (
                      <div key={index} className="mt-4 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-3 text-purple-700">{section.title}</h4>
                        <ul className="space-y-3">
                          {section.items.map((item: any, itemIndex: React.Key) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="mr-3 text-xl flex-shrink-0">{item.icon}</span>
                              <div>
                                <span className="font-bold">{item.title}</span> {item.text}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t flex justify-between items-center">
                  <Button className="bg-purple-600 hover:bg-purple-700 gap-2" asChild>
                    <Link href={product.externalLink} target="_blank">
                      Comprar ahora
                      <ExternalLink size={16} />
                    </Link>
                  </Button>
                  <DialogClose asChild>
                    <Button variant="outline">Cerrar</Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  return (
    <section className="bg-transparent w-full py-16 max-w-7xl" id="productos">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-4"
            style={{ fontFamily: 'var(--font-gotham-ultra)' }}>
            Descubrí nuestros productos
          </h2>
          <p className="text-gray-700 max-w-2xl text-base md:text-lg mx-auto">
            Conocé nuestra <b>línea de juegos</b> y experiencias diseñadas para conectar a personas a través de conversaciones significativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full shadow-md"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#6E5686] px-8 py-3 font-bold text-lg shadow-md"
            asChild
          >
            <Link href="https://mayoristas.enpalabras.com.ar" target="_blank">
              Visitar tienda online
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}