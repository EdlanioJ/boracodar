import { Source_Sans_Pro } from 'next/font/google';
import CharacterCards from './components/CharacterCards';
import HomeLink from '@src/components/HomeLink';

const font = Source_Sans_Pro({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: '#boraCodar 18 - Card de personagem',
  description:
    'Esse é o Desafio #18, #boraCodar um card de personagem de Stars Wars em homenagem ao May the 4th',
  openGraph: {
    images: ['/images/18.png'],
  },
};

export default function Page() {
  return (
    <main
      className={`${font.className} relative min-h-screen bg-gray-950 font-custom grid place-content-center`}
    >
      <CharacterCards />

      <div className="absolute bottom-6 right-6">
        <HomeLink />
      </div>
    </main>
  );
}
