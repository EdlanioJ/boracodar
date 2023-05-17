'use client';

import { Check, Info } from '@phosphor-icons/react';
import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  label?: string;
  initialAnimationDelay?: string;
};
function Card({
  children,
  label,
  variant = 'primary',
  initialAnimationDelay = '10ms',
}: CardProps) {
  return (
    <section
      aria-label={label}
      style={
        initialAnimationDelay && ({ '--delay': initialAnimationDelay } as any)
      }
      className={clsx(
        'w-[420px] lg:h-full m-auto',
        'animate-apear ',
        'hover:scale-105 transition-all duration-300',
        label &&
          `before:content-[attr(aria-label)] before:font-bold before:text-xs before:uppercase before:text-gray-950 before:inline-block before:bg-orange-500 before:px-4 before:py-2 before:rounded-md before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-4 lg:mt-0 mt-4 relative`
      )}
    >
      <div
        className={clsx(
          'p-6 border border-solid rounded-lg h-full',
          'hover:border-purple-500 transition-colors duration-300',
          {
            'bg-white border-x-gray-200': variant === 'primary',
            'bg-gray-900': variant === 'secondary',
            'pt-10': label,
          }
        )}
      >
        {children}
      </div>
    </section>
  );
}

type HeadingProps = {
  text: string;
};
function Heading({ text }: HeadingProps) {
  return (
    <p className="font-semibold text-sm text-purple-600 leading-[21px] uppercase tracking-wider">
      {text}
    </p>
  );
}

type HeaderProps = {
  children: React.ReactNode;
};
function Header({ children }: HeaderProps) {
  return (
    <div className="mt-2 flex items-center justify-between">{children}</div>
  );
}

type TitleProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
};
function Title({ title, size = 'md', variant = 'primary' }: TitleProps) {
  return (
    <strong
      className={clsx('font-bold', {
        'text-gray-800': variant === 'primary',
        'text-gray-50': variant === 'secondary',
        'text-2xl  leading-9': size === 'md',
        'text-3xl leading-10': size === 'lg',
      })}
    >
      {title}
    </strong>
  );
}

type PriceProps = {
  price: number;
  variant?: 'primary' | 'secondary';
};
function Price({ price, variant = 'primary' }: PriceProps) {
  return (
    <span
      className={clsx('text-lg leading-7', {
        'text-gray-800': variant === 'primary',
        'text-gray-50': variant === 'secondary',
      })}
    >
      KZ{' '}
      <strong className="text-xl leading-8">
        {price.toLocaleString('PT-ao')}/mês
      </strong>
    </span>
  );
}

type ButtonType = {
  value: string;
  variant?: 'primary' | 'secondary';
  space?: 'md' | 'lg';
};

function Button({ value, space = 'md', variant = 'primary' }: ButtonType) {
  return (
    <button
      className={clsx(
        'flex justify-center items-center py-4 px-6 w-full border border-solid rounded font-bold text-base cursor-pointer transition-colors',
        {
          'mt-4': space === 'md',
          'mt-8': space === 'lg',
          'bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white':
            variant === 'primary',
          'bg-purple-600 border-gray-800 text-white hover:bg-purple-700':
            variant === 'secondary',
        }
      )}
    >
      {value}
    </button>
  );
}

type ListProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  space?: 'md' | 'lg';
};
function List({ children, space = 'md', variant = 'primary' }: ListProps) {
  return (
    <ul
      className={clsx('grid gap-4 border-t border-solid', {
        'border-t-gray-200': variant === 'primary',
        'border-t-gray-700': variant === 'secondary',
        ' pt-4 mt-4': space === 'md',
        'mt-8 pt-8': space === 'lg',
      })}
    >
      {children}
    </ul>
  );
}

type ListItemProps = {
  text: string;
  variant?: 'primary' | 'secondary';
  hasInfo?: boolean;
};
function ListItem({
  text,
  hasInfo = true,
  variant = 'primary',
}: ListItemProps) {
  return (
    <li className="flex items-center gap-2">
      <Check className="text-green-400 text-xl" />
      <span
        className={clsx('flex-1 text-base tracking-wider', {
          'text-gray-600': variant === 'primary',
          'text-gray-300': variant === 'secondary',
        })}
      >
        {text}
      </span>
      {hasInfo && (
        <Info
          className={clsx('text-xl', {
            'text-gray-900': variant === 'primary',
            'text-gray-400': variant === 'secondary',
          })}
        />
      )}
    </li>
  );
}

Card.Heading = Heading;
Card.Header = Header;
Card.Title = Title;
Card.Price = Price;
Card.Button = Button;
Card.List = List;
Card.ListItem = ListItem;

export default Card;
