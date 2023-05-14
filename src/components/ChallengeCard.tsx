'use client';

import { ChallengeType } from '@src/type';
import Image from 'next/image';

type Props = {
  data: ChallengeType;
};

export default function ChallengeCard({ data }: Props) {
  return (
    <div className="max-w-sm h-full flex flex-col bg-zinc-800 rounded-md overflow-hidden shadow-md shadow-zinc-950 hover:scale-105 duration-300 hover:shadow-[#633BBC] hover:shadow-2xl transition-all cursor-pointer">
      <Image
        alt="Cover"
        className="w-full h-auto"
        src={`/images/${data.number.trim()}.png`}
        width={592}
        height={340.23}
      />

      <div className="text-gray-300  p-6 pt-4">
        <div className="flex text-xs text-gray-400 items-center gap-1">
          <strong>Desafio #{data.number}:</strong>
          <div className="font-thin flex items-center gap-1">
            {data.from}{' '}
            <Image
              alt="arrow"
              src={'/long-right-arrow.svg'}
              width={22}
              height={22}
            />{' '}
            {data.to}
          </div>
        </div>
        <div className="mt-6 mb-8 flex flex-col gap-2">
          <h1 className="font-bold text-xl">{data.name}</h1>

          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
