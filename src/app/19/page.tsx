import HomeLink from '@src/components/HomeLink';
import Widget from './components/Widget';
import { Inter } from 'next/font/google';

const font = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: '#boraCodar 19 - widget de transporte',
  description:
    'Essa é a resolução do desafio #19, #boraCodar um widget de transporte',
  openGraph: {
    images: [
      { url: '/images/19.png', alt: 'Desafio 19', width: 1920, height: 1348 },
    ],
  },
};

export default function Page() {
  return (
    <main
      className={`${font.className} relative min-h-screen bg-[#E7E1EA] font-custom grid place-content-center`}
    >
      <Widget />

      <div className="absolute bottom-6 right-6">
        <HomeLink />
      </div>
    </main>
  );
}
