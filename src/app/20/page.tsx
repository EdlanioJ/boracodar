import { Hepta_Slab } from 'next/font/google';
import Logo from './components/Logo';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import HomeLink from '@src/components/HomeLink';

const font = Hepta_Slab({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: '#boraCodar 20 - galeria com hover',
  description:
    'Essa é a resolução do desafio #20, #boraCodar uma galeria com hover',
  openGraph: {
    images: [
      { url: '/images/20.png', alt: 'Desafio 20', width: 1920, height: 1348 },
    ],
  },
};

export default function Page() {
  return (
    <main
      className={`${font.className} h-screen bg-zinc-900 text-white font-hepta overflow-y-scroll gallery-scrollbar pt-[140px] pb-[40px] bg-[url('/images/20/bg-noise.png')] flex justify-center`}
    >
      <Logo />
      <Gallery>
        <Gallery.Group>
          <Gallery.Frame label="Abstract image 01" variant="vertical">
            <Gallery.Photo alt="photo 01" src={'/images/20/gallery-01.png'} />
          </Gallery.Frame>
          <Gallery.Group variant="column">
            <Gallery.Frame label="Abstract image 02">
              <Gallery.Photo alt="photo 02" src={'/images/20/gallery-02.png'} />
            </Gallery.Frame>

            <Gallery.Frame label="Abstract image 03">
              <Gallery.Photo alt="photo 03" src={'/images/20/gallery-03.png'} />
            </Gallery.Frame>
          </Gallery.Group>
        </Gallery.Group>

        <Gallery.Frame label="Abstract image 04" variant="full">
          <Gallery.Photo alt="photo 04" src={'/images/20/gallery-04.png'} />
        </Gallery.Frame>

        <Gallery.Group>
          <Gallery.Group variant="column">
            <Gallery.Frame label="Abstract image 05">
              <Gallery.Photo alt="photo 05" src={'/images/20/gallery-05.png'} />
            </Gallery.Frame>

            <Gallery.Frame label="Abstract image 06">
              <Gallery.Photo alt="photo 06" src={'/images/20/gallery-06.png'} />
            </Gallery.Frame>
          </Gallery.Group>
          <Gallery.Frame label="Abstract image 07" variant="vertical">
            <Gallery.Photo alt="photo 07" src={'/images/20/gallery-07.png'} />
          </Gallery.Frame>
        </Gallery.Group>
        <Gallery.Frame label="Abstract image 08" variant="full">
          <Gallery.Photo alt="photo 08" src={'/images/20/gallery-08.png'} />
        </Gallery.Frame>
        <Footer />
      </Gallery>

      <div className="absolute bottom-6 right-6">
        <HomeLink />
      </div>
    </main>
  );
}
