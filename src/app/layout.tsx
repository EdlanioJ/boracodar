import './globals.css';

export const metadata = {
  title: {
    default: '#boraCodar | Edlâneo Manuel',
    template: '%s | Edlâneo Manuel',
  },
  description:
    'Bem-vindos ao #boraCodar, um convite em forma de desafio para você apostar na sua evolução em programação.',
  keywords: ['bora codar', 'boracodar', '#boraCodar'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-ao">
      <body>{children}</body>
    </html>
  );
}
