import localFont from 'next/font/local';

// Gotham Rounded para el texto general
export const gothamRounded = localFont({
  src: [
    {
      path: '../../public/fonts/gotham-rounded/GothamRounded-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gotham-rounded/GothamRounded-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/gotham-rounded/GothamRounded-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gotham-rounded/GothamRounded-BookItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/gotham-rounded/GothamRounded-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gotham-rounded/GothamRounded-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/gotham-rounded/GothamRounded-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gotham-rounded/GothamRounded-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-gotham-rounded',
  display: 'swap',
});

// Gotham Ultra para títulos
export const gothamUltra = localFont({
  src: [
    {
      path: '../../public/fonts/gotham-ultra/Gotham-Ultra.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gotham-ultra/Gotham-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gotham-ultra/Gotham-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gotham-ultra/Gotham-Book.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-gotham-ultra',
  display: 'swap',
});