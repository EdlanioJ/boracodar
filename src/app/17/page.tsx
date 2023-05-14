import { Lato } from 'next/font/google';
import DatePicker from './components/DatePicker';
import HomeLink from '@src/components/HomeLink';

const font = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: '#boraCodar 17 - Date picker',
  description: 'Esse é o Desafio #17, #boraCodar um Date Picker',
  openGraph: {
    images: [
      { url: '/images/17.png', alt: 'Desafio 17', width: 1920, height: 1348 },
    ],
  },
};

export default function Page() {
  return (
    <main
      className={`${font.className} relative min-h-screen bg-gray-50 font-custom grid place-content-center`}
    >
      <DatePicker />
      <div className="absolute bottom-6 right-6">
        <HomeLink variant="secondary" />
      </div>
    </main>
  );
}
