'use client';

import { ArrowDownRight } from '@phosphor-icons/react';

export default function Logo() {
  return (
    <div className="flex flex-col  w-[385px] sticky top-0">
      <h1 className="text-[48px] leading-[60px]">
        The —<br />
        Abstract
        <br />
        Gallery
      </h1>

      <ArrowDownRight className="text-[32px]" />
    </div>
  );
}
