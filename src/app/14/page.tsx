import HomeLink from '@src/components/HomeLink';
import { Inter } from 'next/font/google';
import DragZone from './components/DragZone';
import FilesPreview from './components/FilesPreview';

const custom = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: '#boraCodar 14 - Componente de Upload',
  description: 'Esse é o Desafio #14, #boraCodar um componente de upload',
};

export default function Page() {
  return (
    <main
      className={`${custom.className} font-custom leading-[130%] bg-gray-50 min-h-screen relative grid place-content-center`}
    >
      <DragZone />
      <FilesPreview />

      <div className="absolute bottom-6 right-6">
        <HomeLink variant="secondary" />
      </div>
    </main>
  );
}
