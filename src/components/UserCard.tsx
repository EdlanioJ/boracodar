'use client';

import Image from 'next/image';
import Link from 'next/link';
import Tag from './Tag';

export default function UserCard() {
  return (
    <div className="flex md:col-span-2 lg:col-span-3 rounded-md overflow-hidden gap-4 bg-zinc-800 items-center">
      <div className="  pl-5 pt-5 pb-5">
        <div className="relative h-56 w-56 rounded-lg overflow-hidden">
          <Image
            alt="Creator Image"
            className="object-cover"
            src={'https://github.com/EdlanioJ.png'}
            fill
          />
        </div>
      </div>
      <div className="flex flex-col py-5 pr-10 gap-4">
        <span className="text-gray-200">
          Olá, eu sou <strong className="text-[#633BBC]">Edlâneo Manuel</strong>
        </span>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-200 text-2xl font-bold flex flex-col">
            <span>
              Minhas resoluções para os desafios do{' '}
              <Link
                href={'https://boracodar.dev'}
                target="_blank"
                className="underline cursor-pointer text-[#633BBC] font-semibold"
              >
                #boraCodar
              </Link>
            </span>
          </h2>

          <p className="text-gray-200 text-sm">
            Estou entusiasmado em utilizar o React com Tailwind para enfrentar
            os desafios do #borCodar. Essa combinação poderosa de tecnologias me
            permitirá criar soluções inovadoras e eficientes.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href={'https://linkedin.com/in/EdlanioJ'} target="_blank">
            <Tag hoverColor="#0077b5" text="#linkedin" />
          </Link>

          <Link href={'https://github.com/EdlanioJ'} target="_blank">
            <Tag hoverColor="#171515" text="#github" />
          </Link>
        </div>
      </div>
    </div>
  );
}
