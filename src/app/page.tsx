import { Roboto } from 'next/font/google';
import UserCard from '@src/components/UserCard';
import { ChallengeType } from '../type';
import ChallengeCard from '@src/components/ChallengeCard';
import Link from 'next/link';
import { challenges } from './data';

const font = Roboto({ subsets: ['latin'], weight: ['100', '400', '700'] });

export default function Home() {
  return (
    <main
      className={`${font.className} min-h-screen p-7 pb-16 bg-zinc-950 font-roboto`}
    >
      <div className="grid max-w-4xl gap-7 lg:grid-cols-3 md:grid-cols-2 mx-auto">
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
