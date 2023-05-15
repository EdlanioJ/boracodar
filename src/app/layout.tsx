import './globals.css';

export const metadata = {
  title: {
    default: '#boraCodar | Edlâneo Manuel',
    template: '%s | Edlâneo Manuel',
  },
  description: 'Bem-vindos a minhas resoluções para os desafios do #boraCodar',
  keywords: ['bora codar', 'boracodar', '#boraCodar'],
  authors: [
    { name: 'Edlâneo Manuel', url: 'https://linkedin.com/in/Edlanioj' },
  ],
  creator: 'Edlâneo Manuel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
