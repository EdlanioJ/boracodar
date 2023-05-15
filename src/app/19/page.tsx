import Widget from './components/Widget';

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
      className={` min-h-screen bg-[#E7E1EA] font-custom grid place-content-center`}
    >
      <Widget />
    </main>
  );
}
