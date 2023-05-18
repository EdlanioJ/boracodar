import { Source_Sans_Pro } from 'next/font/google';
import CharacterCards from './components/CharacterCards';
import HomeLink from '@src/components/HomeLink';

const font = Source_Sans_Pro({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: '#boraCodar 18 - Card de personagem',
  description:
    'Essa é a resolução do desafio #18, #boraCodar um card de personagem de Stars Wars em homenagem ao May the 4th',
  openGraph: {
    images: [
      { url: '/images/18.png', alt: 'Desafio 18', width: 1920, height: 1348 },
    ],
  },
};

export default function Page() {
  return (
    <main
      className={`${font.className} relative min-h-screen bg-gray-950 font-source-sans grid place-content-center`}
    >
      <CharacterCards />

      <div className="absolute bottom-6 right-6">
        <HomeLink />
      </div>
    </main>
  );
}
