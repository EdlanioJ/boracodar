import { Titillium_Web } from 'next/font/google';
import HomeLink from '@src/components/HomeLink';
import EnterpriseCard from './components/EnterpriseCard';
import EssentialCard from './components/EssentialCard';
import UltimateCard from './components/UltimateCard';

const font = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: '#boraCodar 15 - Pricing Table',
  description: 'Esse é o Desafio #15, #boraCodar uma tabela de Pricing',
  openGraph: {
    images: [
      { url: '/images/15.png', alt: 'Desafio 15', width: 1920, height: 1348 },
    ],
  },
};

export default function Page() {
  return (
    <main
      className={`${font.className} relative h-screen overflow-hidden bg-gray-50 font-custom`}
    >
      <div className="overflow-y-scroll h-screen">
        <div className="grid gap-6 p-6">
          <EssentialCard />
          <UltimateCard />
          <EnterpriseCard />
        </div>
      </div>

      <div className="absolute bottom-6 right-6">
        <HomeLink variant="secondary" />
      </div>
    </main>
  );
}
