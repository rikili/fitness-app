import React, { useState } from 'react';
import { addMonths } from 'date-fns';

import useStyles from './Calendar.style';
import Month from '../Month/Month';
import CalendarHeader from '../CalendarHeader/CalendarHeader';

function Calendar() {
  const styles = useStyles();
  const [firstOfSelectedMonth, setFirstOfSelectedMonth] = useState<Date>(
    new Date(`${new Date().getUTCFullYear()}-${new Date().getMonth() + 1}`),
  );

  const incrementMonth = () => setFirstOfSelectedMonth(
    addMonths(firstOfSelectedMonth, 1),
  );

  const decrementMonth = () => setFirstOfSelectedMonth(
    addMonths(firstOfSelectedMonth, -1),
  );

  return (
    <div className={styles.panel}>
      <CalendarHeader
        currentSelectedMonth={firstOfSelectedMonth}
        nextMonthControl={incrementMonth}
        prevMonthControl={decrementMonth}
      />
      <Month
        firstOfSelected={firstOfSelectedMonth}
      />
    </div>
  );
}

export default Calendar;
