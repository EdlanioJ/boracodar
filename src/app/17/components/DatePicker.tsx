'use client';

import { CaretDown, CaretLeft, CaretRight } from '@phosphor-icons/react';
import Calendar from './Calendar';
import { useState } from 'react';
import { monthsAbbr, monthNames } from '../data';

export default function DatePicker() {
  const initDate = new Date();

  const [isSelectingMonth, setIsSelectingMonth] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(initDate.getMonth());
  const [calendarYear, setCalendarYear] = useState(initDate.getFullYear());

  const [currMonth, setCurrMonth] = useState(initDate.getMonth());
  const [currYear, setCurrYear] = useState(initDate.getFullYear());

  const [firstDate, setFirstDate] = useState<Date>();
  const [secondDate, setSecondDate] = useState<Date>();

  // Begin Calendar
  const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDayOfMonth = new Date(
    currYear,
    currMonth,
    lastDateOfMonth
  ).getDay();
  const lastDayOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  // End Calendar

  const isInOrder =
    firstDate !== undefined &&
    secondDate !== undefined &&
    firstDate < secondDate;

  function toggleSelectingMonth() {
    setIsSelectingMonth(!isSelectingMonth);
  }
  const setPreview = () => {
    if (isSelectingMonth) {
      setCalendarYear(calendarYear - 1);
      return;
    }
    if (currMonth === 0) {
      setCurrMonth(11);
      const year = currYear - 1;
      setCurrYear(year);
      setCalendarYear(year);
      return;
    }
    setCurrMonth(currMonth - 1);
  };

  const setNext = () => {
    if (isSelectingMonth) {
      setCalendarYear(calendarYear + 1);
      return;
    }

    if (currMonth === 11) {
      setCurrMonth(0);
      const year = currYear + 1;
      setCurrYear(year);
      setCalendarYear(year);
      return;
    }
    setCurrMonth(currMonth + 1);
  };

  function handleSelectMonth(month: number) {
    setCalendarMonth(month);
    setCurrMonth(month);
    setCurrYear(calendarYear);
    setIsSelectingMonth(false);
  }
  function handleSelectDate(date: Date) {
    if (!firstDate) {
      setFirstDate(date);
      return;
    }

    if (firstDate && firstDate.getTime() === date.getTime()) {
      setFirstDate(secondDate);
      setSecondDate(undefined);
      return;
    }

    if (secondDate && secondDate.getTime() === date.getTime()) {
      setSecondDate(undefined);
      return;
    }
    setSecondDate(date);
  }

  return (
    <Calendar>
      <Calendar.Header>
        <Calendar.NavigationButton onClick={setPreview} icon={CaretLeft} />
        <Calendar.SelectorButton onClick={toggleSelectingMonth}>
          {isSelectingMonth ? (
            calendarYear
          ) : (
            <>
              {monthNames[currMonth]} {currYear}
              <CaretDown weight="fill" className="text-xs" />
            </>
          )}
        </Calendar.SelectorButton>
        <Calendar.NavigationButton onClick={setNext} icon={CaretRight} />
      </Calendar.Header>
      {isSelectingMonth ? (
        <Calendar.Body variant="month">
          {monthsAbbr.map((month, index) => {
            return (
              <Calendar.Month
                onClick={() => handleSelectMonth(index)}
                month={month}
                isSelected={
                  index === initDate.getMonth() &&
                  calendarYear === initDate.getFullYear()
                }
                key={month}
              />
            );
          })}
        </Calendar.Body>
      ) : (
        <Calendar.Body>
          <Calendar.WeekLabels />
          <Calendar.MonthDays>
            {Array(firstDayOfMonth)
              .fill(null)
              .map((_, index) => {
                const day = lastDayOfLastMonth + index + 1 - firstDayOfMonth;
                const date = new Date(currYear, currMonth - 1, day);
                return (
                  <Calendar.Day
                    date={date}
                    isInOrder={isInOrder}
                    firstDate={firstDate}
                    secondDate={secondDate}
                    disabled
                    key={`${date.getTime()}`}
                  />
                );
              })}
            {Array(lastDateOfMonth)
              .fill(null)
              .map((_, index) => {
                const day = index + 1;
                const date = new Date(currYear, currMonth, day);

                return (
                  <Calendar.Day
                    date={date}
                    isInOrder={isInOrder}
                    firstDate={firstDate}
                    secondDate={secondDate}
                    handleSelectDate={handleSelectDate}
                    key={`${date.getTime()}`}
                  />
                );
              })}

            {Array(6)
              .fill(null)
              .splice(lastDayOfMonth)
              .map((_, index) => {
                const day = index + 1;
                const date = new Date(currYear, currMonth + 1, day);
                return (
                  <Calendar.Day
                    firstDate={firstDate}
                    isInOrder={isInOrder}
                    secondDate={secondDate}
                    date={date}
                    disabled
                    key={`${date.getTime()}`}
                  />
                );
              })}
          </Calendar.MonthDays>
        </Calendar.Body>
      )}
    </Calendar>
  );
}
