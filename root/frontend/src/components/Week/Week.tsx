import React from 'react';
import { format } from 'date-fns';

import useStyles from './Week.style';
import Day from '../Day/Day';

type PropTypes = {
  selectedMonth: number,
  dates: Date[],
};

const isSameDate = (firstDate: Date, secondDate: Date): boolean => format(firstDate, 'MM-dd-yyyy') === format(secondDate, 'MM-dd-yyyy');

function Week({ selectedMonth, dates }: PropTypes) {
  const styles = useStyles();
  if (dates.length !== 7) return null;

  const today = new Date();
  let isWeekSelected = false;

  const renderedDays = dates.map((date: Date) => {
    let isToday = false;
    if (isSameDate(date, today)) {
      isWeekSelected = true;
      isToday = true;
    }
    return (
      <Day
        key={`Day: ${format(date, 'MM-dd-yy')}`}
        isSelected={date.getMonth() === selectedMonth}
        isToday={isToday}
        date={date}
      />
    );
  });

  return (
    <div className={isWeekSelected ? styles.selectedWeek : styles.week}>
      {renderedDays}
    </div>
  );
}

export default Week;
