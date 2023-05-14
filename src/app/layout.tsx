import './globals.css';

export const metadata = {
  title: '#boraCodar com Edlâneo Manuel',
  description:
    'Bem-vindos ao #boraCodar, um convite em forma de desafio para você apostar na sua evolução em programação.',
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
