import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/NavBar/Navbar'
import Footer from '@/components/Footer'
import { gothamRounded, gothamUltra } from '@/lib/fonts'


export const metadata: Metadata = {
  title: 'En Palabras | Experiencias de conexión para equipos de trabajo',
  description:
    'Potencia tu equipo con experiencias de conversación significativas. Descubre nuestros juegos: Desconectados, Destapados y productos personalizados que fortalecen equipos y crean conexiones genuinas.',
  openGraph: {
    title: 'En Palabras | Juegos y productos personalizados para equipos',
    description:
      'Crea conversaciones significativas en tu equipo. Fortalece la colaboración y empatía con nuestros juegos de cartas, experiencias y productos personalizados.',
    images: [
      {
        url: 'https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp',
        width: 640,
        height: 640,
        alt: 'Juego de cartas En Palabras',
      }
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'En Palabras | Experiencias para conectar equipos',
    description: 'Potencia la colaboración y empatía en tu equipo con nuestros juegos y productos personalizados.',
    images: ['https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juegos-de-cartas1-58b156f17c45cfd7ea16685177012985-640-0.webp'],
  },
  authors: [{ name: 'En Palabras', url: 'https://enpalabras.com.ar' }],
  keywords: [
    'juegos para empresas',
    'teambuilding',
    'conversaciones significativas',
    'conexión de equipos',
    'En Palabras',
    'Desconectados',
    'Destapados',
    'regalos corporativos',
    'experiencias para equipos',
    'desarrollo de equipos',
  ],
  robots: 'index, follow',
  icons: {
    icon: '//acdn.mitiendanube.com/stores/001/705/915/themes/common/logo-1600072508-1621866994-b0fd695ab493ee571f9f076ae0ea024d1621866995.ico?0',
    apple: '//acdn.mitiendanube.com/stores/001/705/915/themes/common/logo-1600072508-1621866994-b0fd695ab493ee571f9f076ae0ea024d1621866995.ico?0',
  },
  alternates: {
    canonical: 'https://www.enpalabrasempresas.com/',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${gothamRounded.variable} ${gothamUltra.variable}`}>
      <body className={gothamRounded.className}>
          {/* Fondo con degradado y efecto de forma */}
          <div className="fixed inset-0 w-full h-full z-[-1] bg-gradient-to-br from-purple-100 via-purple-200 to-pink-300">     </div>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
      {/* <GoogleAnalytics gaId="G-FZYCR4YBVC" /> */}
      <GoogleTagManager gtmId="GTM-WBMVQW86" />
    </html>
  )
}