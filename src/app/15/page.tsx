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
  description:
    'Essa é a resolução do desafio #15, #boraCodar uma tabela de Pricing',
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
      <div className="overflow-y-scroll h-screen lg:flex lg:items-center lg:justify-center">
        <div className="grid lg:w-fit gap-6 p-6 md:grid-cols-1 lg:grid-cols-3">
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
