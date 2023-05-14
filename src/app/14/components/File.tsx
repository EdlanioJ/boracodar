'use client';

import clsx from 'clsx';
import {
  ArrowCounterClockwise,
  File as FileIcon,
  X,
} from '@phosphor-icons/react';
import React from 'react';

type Props = {
  status?: 'uploading' | 'done' | 'error';
  name: string;
  size: number;
  uploadedSize: number;
  progress: number;
  format: string;
};
export default function File({
  status = 'uploading',
  size,
  progress,
  uploadedSize,
  format,
  name,
}: Props) {
  return (
    <div className="p-2 w-[440px] bg-white shadow-2xl rounded-lg flex gap-3 relative">
      <div
        className={clsx(
          'bg-[#eee] rounded px-4 py-3 flex items-center justify-center',
          {
            'bg-[#e9e3f8]': status === 'uploading',
            'bg-[#daf2d9]': status === 'done',
            'bg-[#f2d9d9]': status === 'error',
          }
        )}
      >
        <FileIcon
          weight="fill"
          className={clsx('text-2xl text-[#aaa]', {
            'text-[#ac96e4]': status === 'uploading',
            'text-[#738172]': status === 'done',
            'text-[#e36363]': status === 'error',
          })}
        />
      </div>
      <div className="flex-1">
        <div className="text-sm font-bold text-[#575361]">{name}</div>
        <div className="text-[#857e95] font-medium text-xs">
          <span>
            {status === 'uploading'
              ? `${uploadedSize}${format} / ${size}${format}`
              : `${size}${format}`}
          </span>
        </div>
        <div className=" flex items-center gap-2 mt-1 leading-[0]">
          <div className="flex-1 h-2 rounded-full overflow-hidden bg-[#e3e3ed]">
            <div
              className={clsx('h-2', {
                'bg-[linear-gradient(90deg,rgba(58,97,237,0.52),#7c3aed)]':
                  status === 'uploading',
                'bg-[#73b172]': status === 'done',
                'bg-white': status === 'error',
              })}
              style={{
                width: status === 'error' ? '0%' : `${progress.toFixed(0)}%`,
              }}
            />
          </div>
          <span
            className={clsx('text-xs font-medium', {
              'text-[#9892a6]': status === 'uploading',
              'text-[4e884d]': status === 'done',
              'text-[#e36363]': status === 'error',
            })}
          >
            {status === 'error' ? 'Erro' : `${progress.toFixed(0)}%`}
          </span>
        </div>
      </div>
      <div className="absolute top-2 right-2 text-[#794fed] cursor-pointer">
        {status === 'error' ? <ArrowCounterClockwise /> : <X />}
      </div>
    </div>
  );
}
