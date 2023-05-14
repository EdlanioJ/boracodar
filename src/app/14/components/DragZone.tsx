'use client';

import { useState } from 'react';
import { CloudArrowUp } from '@phosphor-icons/react';
import clsx from 'clsx';

export default function DragZone() {
  const [isDragging, setIsDragging] = useState(false);
  const onDragOver = () => {
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };
  return (
    <section
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      className={clsx(
        'border-dashed border-[#c1b2fa] border rounded-lg w-[440px] text-center px-8 py-7 relative flex items-center flex-col',
        {
          'bg-[#f3f0ff]': !isDragging,
          'bg-[#ebe6ff]': isDragging,
        }
      )}
    >
      <CloudArrowUp className="text-5xl text-[#7c3aed]" />
      <h3 className="mt-3 text-[#7c3aed] text-base font-bold">
        Importar seus arquivos
      </h3>
      <p className="text-sm text-[#746e82] ">
        Arraste ou clique para fazer upload
      </p>
      <input
        className="opacity-0 inset-0 absolute"
        name="file"
        id="file"
        onDrag={(e) => console.log(e)}
      />
    </section>
  );
}
