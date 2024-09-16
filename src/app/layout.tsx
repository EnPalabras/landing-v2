import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'En Palabras',
  description:
    'Descubrí nuevas experiencias para realizar con tus amigos o equipo de trabajo. Conocé nuestros juegos: Desconectados, Destapados, Año Nuevo y el Journal de En Palabras. Regalá momentos únicos y memorables con En Palabras. Consulta por nuestros productos personalizados',
  openGraph: {
    title: 'En Palabras',
    description:
      'Descubrí nuevas experiencias para realizar con tus amigos o equipo de trabajo. Conocé nuestros juegos: Desconectados, Destapados, Año Nuevo y el Journal de En Palabras. Regalá momentos únicos y memorables con En Palabras. Consulta por nuestros productos personalizados',
  },

  authors: [{ name: 'En Palabras' }],

  keywords: [
    'juegos',
    'experiencias',
    'regalos',
    'personalizados',
    'En Palabras',
    'Desconectados',
    'Destapados',
    'Año Nuevo',
    'Journal',
  ],

  icons: {
    icon: '//acdn.mitiendanube.com/stores/001/705/915/themes/common/logo-1600072508-1621866994-b0fd695ab493ee571f9f076ae0ea024d1621866995.ico?0',
  },
}

// Podríamos agregar un evento en la sección de productos para ver si hacen click ahí

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
        <Toaster />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-FZYCR4YBVC" />
      <GoogleTagManager gtmId="GTM-WBMVQW86" />
    </html>
  )
}
