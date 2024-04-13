import Link from 'next/link'
import logoEP from '@/../public/assets/logo-ep.png'

export default function Footer() {
  return (
    <section className="py-10 bg-white sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12 justify-end">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <img className="w-auto h-12 mx-auto" src={logoEP.src} alt="" />

            <p className="text-base leading-relaxed text-gray-600 mt-7 text-center">
              Conocé más sobre nosotros y nuestros productos en nuestro sitio
              web y redes sociales.
            </p>

            <ul className="flex sm:hidden items-center mt-8 justify-center space-x-5">
              <li>
                <Link
                  href="https://www.facebook.com/p/En-Palabras-100063708482183/"
                  target="_blank"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-10 h-10 focus:bg-purple-600 hover:text-white focus:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-600"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/enpalabrass"
                  target="_blank"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-10 h-10 focus:bg-purple-600 hover:text-white focus:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-600"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </Link>
              </li>

              <li>
                <a
                  href="https://tiktok.com/@enpalabrass"
                  target="_blank"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-10 h-10 focus:bg-purple-600 hover:text-white focus:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-600"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 290"
                    fill="currentColor"
                  >
                    {/* <path
                    fill="#FF004F"
                    d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"
                  /> */}
                    <path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z" />
                    {/* <path
                    fill="#00F2EA"
                    d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"
                  /> */}
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://tiktok.com/@enpalabrass"
                  target="_blank"
                  className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-10 h-10 focus:bg-purple-600 hover:text-white focus:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColot"
                    id="Layer_1"
                    viewBox="-271 283.9 256 235.1"
                  >
                    <g>
                      <rect x="-264.4" y="359.3" width="49.9" height="159.7" />
                      <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7   C-210.8,295.8-222.1,283.9-240.5,283.9z" />
                      <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1   c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z" />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>

            <div className=" hidden w-full lg:flex justify-center">
              <Link
                href="https://enpalabras.com.ar"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 
              bg-purple-600 rounded-md hover:bg-purple-700 focus:bg-purple-700 mt-7"
              >
                Tienda Online
              </Link>
            </div>
          </div>
          <div className="hidden lg:block col-span-0 lg:col-span-2"></div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Menu</p>

            <ul className="mt-6 space-y-5">
              <li>
                <Link
                  href="#"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Inicio{' '}
                </Link>
              </li>
              <li>
                <Link
                  href="#productos"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Productos{' '}
                </Link>
              </li>

              <li>
                <Link
                  href="#faqs"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Preguntas Frecuentes{' '}
                </Link>
              </li>
              <li>
                <Link
                  href="#nosotros"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Nosotros{' '}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">
              Tienda Online
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="https://enpalabras.com.ar"
                  target="_blank"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.enpalabras.com.ar/productos/"
                  target="_blank"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Comprar{' '}
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.enpalabras.com.ar/quienessomos/"
                  target="_blank"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Otros Links</p>

            <ul className="mt-6 space-y-5">
              <li>
                <Link
                  href="https://www.enpalabras.com.ar/capsula-del-tiempo/"
                  target="_blank"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Capsula del Tiempo
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.enpalabrasjuegos.com.ar/"
                  target="_blank"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Ruleta de Preguntas
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.mercadolibre.com.ar/juego-de-cartas-desconectados-en-palabras/p/MLA17840062?pdp_filters=item_id:MLA1109575910"
                  target="_blank"
                  className="flex text-sm text-gray-800 transition-all duration-200 hover:text-purple-600 focus:text-purple-600"
                >
                  {' '}
                  Mercado Libre{' '}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex flex-col sm:flex-row sm:items-center justify-center sm:justify-between w-full">
          <p className="text-sm text-gray-600 text-center sm:text-auto">
            © Copyright {new Date().getFullYear()} En Palabras
          </p>

          <ul className="hidden sm:flex items-center justify-center sm:justify-end mt-5 space-x-3 md:order-3 sm:mt-0 ">
            <li>
              <Link
                href="https://www.facebook.com/p/En-Palabras-100063708482183/"
                target="_blank"
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-purple-600 hover:text-white focus:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-600"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/enpalabrass"
                target="_blank"
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-purple-600 hover:text-white focus:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-600"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                </svg>
              </Link>
            </li>

            <li>
              <a
                href="https://tiktok.com/@enpalabrass"
                target="_blank"
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-purple-600 hover:text-white focus:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-600"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 290"
                  fill="currentColor"
                >
                  {/* <path
                    fill="#FF004F"
                    d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"
                  /> */}
                  <path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z" />
                  {/* <path
                    fill="#00F2EA"
                    d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"
                  /> */}
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
