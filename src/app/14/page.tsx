import HomeLink from '@src/components/HomeLink';
import { Inter } from 'next/font/google';
import DragZone from './components/DragZone';
import FilesPreview from './components/FilesPreview';

const custom = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: '#boraCodar 14 - Componente de Upload',
  description:
    'Essa é a resolução do desafio #14, #boraCodar um componente de upload',
  openGraph: {
    images: [
      { url: '/images/14.png', alt: 'Desafio 14', width: 1920, height: 1348 },
    ],
  },
};

export default function Page() {
  return (
    <main
      className={`${custom.className} font-inter leading-[130%] bg-gray-50 min-h-screen relative grid place-content-center`}
    >
      <DragZone />
      <FilesPreview />

      <div className="absolute bottom-6 right-6">
        <HomeLink variant="secondary" />
      </div>
    </main>
  );
}
