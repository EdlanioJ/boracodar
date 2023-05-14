'use client';

import { MagnifyingGlass, Pencil, Plus, Trash } from '@phosphor-icons/react';

export default function Header() {
  return (
    <div className="flex flex-col p-10 gap-6 bg-gray-950">
      <div className="flex items-center gap-4 text-2xl text-gray-50">
        <div className="flex-1">
          <h3 className="font-bold text-xl">Meus contatos</h3>
        </div>
        <Plus />
        <Pencil />
        <Trash />
      </div>
      <div className="flex items-center gap-2 px-6 py-4 bg-gray-700 rounded">
        <MagnifyingGlass className="text-gray-50 text-base" />
        <input
          type="text"
          className="bg-transparent h-full flex-1 ring-0 border-0 text-gray-50 text-xs leading-[14px] placeholder:text-gray-50"
          placeholder="Busque por nome ou por dados de contato..."
        />
      </div>
    </div>
  );
}
