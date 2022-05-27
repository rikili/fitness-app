import React from 'react';

import useStyles from './Week.style';

import Day from '../Day/Day';

interface PropTypes {
  selectedMonth: number,
  dates: Date[],
}

function Week({ selectedMonth, dates }: PropTypes) {
  const styles = useStyles();
  return (
    <div className={styles.Week}>
      {dates.map((date: Date) => (
        <Day
          isSelected={date.getMonth() === selectedMonth}
          date={date}
        />
      ))}
    </div>
  );
}

export default Week;
