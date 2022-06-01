import React from 'react';
import { format } from 'date-fns';

import useStyles from './CalendarHeader.style';

import Button from '../Button/Button';
import { LEFT_CONTROL_SYMBOL, RIGHT_CONTROL_SYMBOL } from './constants';

type PropTypes = {
  currentSelectedMonth: Date,
  prevMonthControl: () => void,
  nextMonthControl: () => void,
};

type LabelTypes = {
  month: string,
  year: string,
};

function CalendarLabel({ month, year }: LabelTypes) {
  return (
    <span data-testid="calendar-label">
      <b>{month}</b>
      {` | ${year}`}
    </span>
  );
}

function CalendarHeader({
  currentSelectedMonth, prevMonthControl, nextMonthControl,
}: PropTypes) {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <CalendarLabel
        month={format(currentSelectedMonth, 'MMMM')}
        year={format(currentSelectedMonth, 'yyyy')}
      />
      <div className={styles.selectorGrid}>
        <Button
          className={styles.selectorButton}
          onClick={prevMonthControl}
          data-testid="decrement-calendar"
        >
          <b>{LEFT_CONTROL_SYMBOL}</b>
        </Button>
        <Button
          className={styles.selectorButton}
          onClick={nextMonthControl}
          data-testid="increment-calendar"
        >
          <b>{RIGHT_CONTROL_SYMBOL}</b>
        </Button>
      </div>
    </div>
  );
}

export default CalendarHeader;
