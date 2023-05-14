'use client';

import { Icon as IconType } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { weekDays } from '../data';

type NavigationButtonProps = {
  icon: IconType;
  onClick?: () => void;
};
function NavigationButton({ icon: Icon, onClick }: NavigationButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-8 h-8 grid place-content-center rounded-full bg-white hover:bg-purple-100 text-sm font-bold text-gray-800 transition-colors duration-200"
    >
      <Icon weight="bold" />
    </button>
  );
}

function WeekLabels() {
  return (
    <ul className="flex justify-between items-center text-xs text-gray-700">
      {weekDays.map((weekDay) => (
        <li key={weekDay}>
          <span>{weekDay}</span>
        </li>
      ))}
    </ul>
  );
}

type MonthDaysProps = {
  children: React.ReactNode;
};
function MonthDays({ children }: MonthDaysProps) {
  return <div className="grid grid-cols-7 gap-y-2">{children}</div>;
}

type HeaderProps = {
  children: React.ReactNode;
};
function Header({ children }: HeaderProps) {
  return <div className="flex items-center justify-between">{children}</div>;
}

type BodyProps = {
  variant?: 'default' | 'month';
  children: React.ReactNode;
};

function Body({ children, variant = 'default' }: BodyProps) {
  return (
    <div
      className={clsx('transition-all duration-300', {
        'flex flex-col gap-6': variant === 'default',
        'grid grid-cols-3 gap-x-4 gap-y-3': variant === 'month',
      })}
    >
      {children}
    </div>
  );
}

type SelectorButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
function SelectorButton({ children, onClick }: SelectorButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center bg-white justify-center font-bold h-6 gap-1"
    >
      {children}
    </button>
  );
}

type MonthProps = {
  month: string;
  isSelected?: boolean;
  onClick: () => void;
};
function Month({ month, onClick, isSelected = false }: MonthProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'h-10 w-20 px-4 py-3 rounded-md',
        'flex items-center justify-center',
        'disabled:text-gray-400',
        {
          'hover:bg-purple-100 hover:rounded-md text-gray-700': !isSelected,
          'bg-[#6200EE] text-white': isSelected,
          'relative after:absolute after:content-[""] after:w-1 after:h-1 after:rounded-full after:bg-white after:bottom-1 after:left-1/2 after:-translate-x-1/2':
            isSelected,
        }
      )}
    >
      <span>{month}</span>
    </button>
  );
}
type DayProps = {
  date: Date;
  disabled?: boolean;
  isInOrder: boolean;
  firstDate?: Date;
  secondDate?: Date;
  handleSelectDate?: (date: Date) => void;
};
function Day({
  date,
  isInOrder,
  disabled,
  firstDate,
  secondDate,
  handleSelectDate,
}: DayProps) {
  const isStart =
    firstDate !== undefined &&
    firstDate.getFullYear() === date.getFullYear() &&
    firstDate.getMonth() === date.getMonth() &&
    firstDate.getDate() === date.getDate();

  const isMiddle =
    (firstDate !== undefined &&
      secondDate !== undefined &&
      date.getTime() > firstDate.getTime() &&
      date.getTime() < secondDate.getTime()) ||
    (firstDate !== undefined &&
      secondDate !== undefined &&
      date.getTime() < firstDate.getTime() &&
      date.getTime() > secondDate.getTime());

  const isEnd =
    secondDate !== undefined &&
    secondDate.getFullYear() === date.getFullYear() &&
    secondDate.getMonth() === date.getMonth() &&
    secondDate.getDate() === date.getDate();

  const isSelected = isStart || isEnd || isMiddle;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => handleSelectDate && handleSelectDate(date)}
      className={clsx(
        'w-10 h-10 grid place-content-center relative',
        'transition-colors duration-200',
        'disabled:text-gray-400 ',
        {
          'hover:bg-purple-100 hover:rounded-md text-gray-700':
            !isSelected && !disabled,
          'bg-[#6200EE] text-white': isSelected,
          'after:content-[""] after:w-1 after:h-1 after:rounded-full after:bg-white after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2':
            isStart,
          'rounded-l-md rounded-r-none': isStart && isInOrder,
          'rounded-l-none rounded-r-md': isStart && !isInOrder && secondDate,
          'rounded-r-md rounded-l-none': isEnd && isInOrder,
          'rounded-r-none rounded-l-md': isEnd && !isInOrder,
          'rounded-l-md rounded-r-md': isStart && secondDate === undefined,
          'rounded-none': isMiddle,
        }
      )}
    >
      {date.getDate()}
    </button>
  );
}

type CalendarProps = {
  children: React.ReactNode;
};
function Calendar({ children }: CalendarProps) {
  return (
    <div className="bg-white shadow-2xl rounded-md p-8 flex flex-col gap-6">
      {children}
    </div>
  );
}

Calendar.NavigationButton = NavigationButton;
Calendar.SelectorButton = SelectorButton;
Calendar.WeekLabels = WeekLabels;
Calendar.MonthDays = MonthDays;
Calendar.Header = Header;
Calendar.Month = Month;
Calendar.Body = Body;
Calendar.Day = Day;

export default Calendar;
