import AboutSection from '@/components/QuienesSomos'
import Features from '@/components/Features'
import NewHero from '@/components/NewHero'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import TeamSection from '@/components/NextLevel'
import Resources from '@/components/Resources'

const questions = [
  {
    question: '¿Cuáles son los tiempos de producción?',
    answer:
      'Contamos con stock disponible para la entrega de productos sin personalizar. Mientras que, para los productos personalizados, el tiempo de producción es de 15 días hábiles a partir de la confirmación del pedido.',
  },
  {
    question: '¿Cuál es nuestra modalidad de trabajo?',
    answer:
      'Te invitamos a elegir entre personalizar tus cartas de juego con un enfoque reflexivo y profundo, o seleccionar uno de nuestros juegos existentes para regalar. En ambos casos, una vez confirmado el presupuesto, procederemos con la producción y entrega. El costo de envío y fecha de entrega se informarán una vez que confirmada la cantidad de juegos y el domicilio de entrega.',
  },
  {
    question: '¿Cuál es el método de pago?',
    answer:
      'Aceptamos pagos vía transferencia bancaria. Una vez confirmado el pedido, te enviaremos los datos para realizar la transferencia. Una vez abonado el 50% del pedido, procederemos con la producción y entrega del mismo.',
  },
  {
    question: '¿Cuáles son los métodos de entrega?',
    answer:
      'Tenemos envíos a todo el país. Bonificados para CABA siempre y cuando el pedido supere las 50 unidades. Para el resto del país, el costo de envío se informará junto con el presupuesto final. También ofrecemos la posibilidad de retirar tu pedido por nuestro punto de retiro en Recoleta',
  },
  {
    question: '¿Qué tipo de factura generan?',
    answer:
      'Realizamos Factura A y B. En caso de necesitar factura A, por favor, informar al momento de realizar el pedido. En caso de necesitar factura B, informar el CUIT o DNI al momento de realizar el pedido.',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full mx-auto">
      <NewHero />
      <Resources />
      <Products />
      <Testimonials />
      <Features />
      <div className='bg-white w-full'>
      <TeamSection />
      <AboutSection />
      </div>
    </main>
  )
}
