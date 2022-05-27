import React from 'react';
import { format } from 'date-fns';
import useStyles from './Week.style';

import Day from '../Day/Day';

interface PropTypes {
  selectedMonth: number,
  dates: Date[],
}

function Week({ selectedMonth, dates }: PropTypes) {
  const styles = useStyles();
  return (
    <div className={styles.week}>
      {dates.map((date: Date) => (
        <Day
          key={`Day: ${format(date, 'MM-dd-yy')}`}
          isSelected={date.getMonth() === selectedMonth}
          date={date}
        />
      ))}
    </div>
  );
}

export default Week;
