'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';

type Props = {
  variant?: 'primary' | 'secondary';
};
export default function HomeLink({ variant = 'primary' }: Props) {
  return (
    <Link
      href={{
        href: '/',
        slashes: true,
      }}
      className={clsx(
        'w-14 h-14 grid place-content-center rounded-full text-4xl transition-all shadow-2xl hover:border hover:border-solid',
        {
          'bg-white hover:bg-gray-800 text-gray-950 hover:text-white shadow-gray-600 hover:border-gray-700':
            variant === 'primary',
          'bg-gray-600 hover:bg-white text-gray-50 hover:text-gray-950 shadow-gray-950 hover:border-gray-600':
            variant === 'secondary',
        }
      )}
    >
      <House />
    </Link>
  );
}
