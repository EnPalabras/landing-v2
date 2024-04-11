import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import fondo from '@/../public/assets/fondo2.jpg'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'En Palabras',
  description: 'Web de En Palabras',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={
          {
            // backgroundImage: `url(${fondo.src})`,
            // width: '100%',
            // height: '100%',
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            //background: "rgb(0,36,0)",
          }
        }
      >
        <Header />

        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
