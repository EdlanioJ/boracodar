import { Roboto } from 'next/font/google';
import HomeLink from '@src/components/HomeLink';
import ContactList from './components/ContactList';
import Header from './components/Header';

const font = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: '#boraCodar 16 - Pagina de contatos',
  description:
    'Essa é a resolução do desafio #16, #boraCodar uma página de contatos',
  openGraph: {
    images: [
      { url: '/images/16.png', alt: 'Desafio 16', width: 1920, height: 1348 },
    ],
  },
};

export default function Page() {
  return (
    <main
      className={`${font.className} min-h-screen relative bg-zinc-800 font-roboto grid place-content-center`}
    >
      <div className="w-[560px] rounded-lg bg-gray-900 flex flex-col overflow-hidden shadow-2xl">
        <Header />
        <ContactList />
      </div>
      <div className="absolute bottom-6 right-6">
        <HomeLink />
      </div>
    </main>
  );
}
