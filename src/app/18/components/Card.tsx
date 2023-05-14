'use client';

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'primary' | 'secondary';
  isLeft?: boolean;
  isRight?: boolean;
}
function Card({
  className,
  type = 'primary',
  children,
  isLeft,
  isRight,
  ...rest
}: CardProps) {
  return (
    <div
      className={clsx(
        'group w-[436px] h-[608px] [perspective:1000px] text-white',
        className,
        {
          'scale-90 z-30': type === 'primary',
          'scale-[0.8]': type === 'secondary',
          'translate-x-1/3 hover:translate-x-[20%] hover:z-40 hover:scale-100 hover:animate-character-slide-left':
            isLeft && type === 'secondary',
          '-translate-x-1/3  hover:translate-x-[-20%] hover:z-40 hover:scale-100 hover:animate-character-slide-right':
            isRight && type === 'secondary',
        }
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

interface ContentProps {
  animateOnHover?: boolean;
  animateOnDisablePrimary?: boolean;
  children: React.ReactNode;
}
function Content({
  children,
  animateOnHover,
  animateOnDisablePrimary,
}: ContentProps) {
  return (
    <div
      className={clsx(
        'relative w-full h-full [transform-style:preserve-3d] transition-all duration-500',
        '[box-shadow:0px_294px_118px_rgba(0,0,0,0.03),0px_165px_99px_rgba(0,0,0,0.1),0px_73px_73px_rgba(0,0,0,0.17)0px_18px_40px_rgba(0,0,0,0.2),0px_0px_0px_rgba(0,0,0,0.2)]',
        {
          'group-hover:delay-1000 group-hover:[transform:rotateY(180deg)]':
            animateOnHover,
          '[transform:rotateY(180deg)] scale-90': animateOnDisablePrimary,
        }
      )}
    >
      {children}
    </div>
  );
}

type BackProps = {
  children: React.ReactNode;
  backgroundImage: string;
  inverted?: boolean;
};
function Back({ backgroundImage, children, inverted }: BackProps) {
  return (
    <div
      className={clsx(
        'absolute w-full h-full rounded-[20px] overflow-hidden [backface-visibility:hidden] bg-no-repeat bg-cover',
        {
          '[transform:rotateY(180deg)]': inverted,
        }
      )}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div
        className={clsx(
          'w-full h-full grid place-content-center',
          '[background:linear-gradient(0deg,rgba(0,1,14,0.5),rgba(0,1,14,0.5)),linear-gradient(148.95deg,rgba(14,23,101,0.85)-7.05%,rgba(42,17,92,0.85)110.07%)]'
        )}
      >
        {children}
      </div>
    </div>
  );
}

type BackTextProps = {
  children: React.ReactNode;
};
function BackText({ children }: BackTextProps) {
  return (
    <span className="uppercase text-[32px] text-center text-transparent font-bold leading-10 [-webkit-text-stroke:1px_#312D74]">
      {children}
    </span>
  );
}

type FrontProps = {
  children: React.ReactNode;
  backgroundImage: string;
  inverted?: boolean;
};

function Front({ backgroundImage, children, inverted }: FrontProps) {
  return (
    <div
      className={clsx(
        'absolute w-full h-full rounded-[20px] p-10 pt-8 bg-no-repeat [backface-visibility:hidden] overflow-hidden',
        {
          '[transform:rotateY(180deg)]': inverted,
        }
      )}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {children}
    </div>
  );
}

type FrontHeaderProps = {
  children: React.ReactNode;
};
function FrontHeader({ children }: FrontHeaderProps) {
  return <header className="w-[263px] flex flex-col gap-4">{children}</header>;
}

type FrontTitleProps = {
  children: React.ReactNode;
};
function FrontTitle({ children }: FrontHeaderProps) {
  return <h1 className="font-bold text-[30px] uppercase">{children}</h1>;
}

type FrontSubtitleProps = {
  children: React.ReactNode;
};
function FrontSubtitle({ children }: FrontHeaderProps) {
  return <span className="text-xs text-gray-300">{children}</span>;
}

type FrontMainProps = {
  children: React.ReactNode;
};

function FrontMain({ children }: FrontMainProps) {
  return (
    <div className="flex flex-col gap-4 mt-9 text-[14px] w-[198px]">
      {children}
    </div>
  );
}

type CharacterInfoProps = {
  heading: string;
  value: string;
};
function CharacterInfo({ heading, value }: CharacterInfoProps) {
  return (
    <div>
      <span className="text-gray-300 leading-[14px]">{heading}</span>
      <p className="font-bold">{value}</p>
    </div>
  );
}

function CharacterImage({ className, alt, src, ...rest }: ImageProps) {
  return (
    <Image
      alt={alt}
      src={src}
      className={clsx('absolute bottom-0 right-0', className)}
      {...rest}
    />
  );
}

Card.Content = Content;
Card.Back = Back;
Card.BackText = BackText;
Card.Front = Front;
Card.FrontHeader = FrontHeader;
Card.FrontTitle = FrontTitle;
Card.FrontSubtitle = FrontSubtitle;
Card.FrontMain = FrontMain;
Card.CharacterInfo = CharacterInfo;
Card.CharacterImage = CharacterImage;
export default Card;
