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
  description: 'Esse é o Desafio #16, #boraCodar uma página de contatos',
};

export default function Page() {
  return (
    <main
      className={`${font.className} min-h-screen relative bg-zinc-800 font-custom grid place-content-center`}
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
