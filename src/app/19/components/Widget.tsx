'use client';

import { Phone, ShieldPlus, Star } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Widget() {
  return (
    <div className="flex flex-col shadow-2xl items-center justify-between w-[795px] h-[689px] rounded-[40px] bg-white text-[#372D3D] px-14 py-6">
      <div className="w-[168px] h-[17px] bg-[#E5D8EA] cursor-pointer rounded-full" />
      <div className="w-full">
        <h1 className="font-bold text-[36px]  leading-[48px]">
          Encontre <span className="text-[#864293]">Boris</span> no local de
          partida
        </h1>
        <p className="font-medium leading-[30px] text-[24px]">
          Chega em 3 minutos (800 metros)
        </p>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-col gap-[6px] items-center z-10 relative">
            <div className="relative">
              <Image
                alt="Imagem de Boris"
                src={'https://randomuser.me/api/portraits/men/10.jpg'}
                className="rounded-full"
                width={137}
                height={137}
              />
              <div className="flex w-fit items-center px-[20px] py-[4px] justify-center gap-[18px] rounded-full bg-[#372D3B] text-[#FBF8FC] text-[20px] leading-[24px] font-semibold absolute bottom-0 left-1/2 -translate-x-1/2">
                <Star weight="fill" />
                <span>4.5</span>
              </div>
            </div>
            <span className="text-[18px] leading-[22px] font-bold">
              Boris C.
            </span>
          </div>
          <Image
            className="-translate-x-8"
            alt="Imagem de Carro"
            src={'/images/19/car.png'}
            width={286}
            height={111}
          />
        </div>
        <div>
          <h1 className="text-[38px] leading-[50px] font-bold">BCD0D19</h1>
          <span className="font-medium text-[24px] leading-[30px]">
            Honda Civic Roxo
          </span>
        </div>
      </div>
      <div className="flex w-full gap-[32px] items-center">
        <input
          type="text"
          className="w-full bg-[#F5EDF7] h-[64px] px-4 rounded-[24px] text-[24px] leading-[28px] font-medium placeholder:text-[#372D3D]"
          placeholder="Enviar mensagem para Boris..."
          name="msg"
          id="msg"
        />

        <div className="h-[64px] px-[8px] text-[48px] grid place-content-center rounded-[24px] hover:bg-[#F5EDF7] transition-all">
          <Phone weight="fill" />
        </div>

        <div className="h-[64px]  px-[8px] text-[48px] grid place-content-center  rounded-[24px] hover:bg-[#F5EDF7] transition-all">
          <ShieldPlus weight="fill" />
        </div>
      </div>
    </div>
  );
}
