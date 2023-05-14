import { Roboto } from 'next/font/google';
import UserCard from '@src/components/UserCard';
import { ChallengeType } from '../type';
import ChallengeCard from '@src/components/ChallengeCard';
import Link from 'next/link';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400', '700'] });

async function getData(): Promise<{ challenges: ChallengeType[] }> {
  const res = await fetch('http://localhost:3000/api/challenges', {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch challenges');
  }

  return res.json();
}
export default async function Home() {
  const { challenges } = await getData();

  return (
    <main
      className={`min-h-screen p-7 pb-16 bg-zinc-950 ${roboto.className} font-custom contact-scrollbar`}
    >
      <div className="grid max-w-4xl gap-7 lg:grid-cols-3 md:grid-cols-2 mx-auto contact-scrollbar">
        <UserCard />
        {challenges
          .sort((a, b) => (a.number > b.number ? -1 : 0))
          .map((challenge: ChallengeType) => (
            <Link href={`/${challenge.number.trim()}`} key={challenge.number}>
              <ChallengeCard data={challenge} />
            </Link>
          ))}
      </div>
    </main>
  );
}
