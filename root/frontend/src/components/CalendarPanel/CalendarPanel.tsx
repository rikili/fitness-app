import React, { useState } from 'react';
import { addMonths } from 'date-fns';

import useStyles from './CalendarPanel.style';
import Calendar from '../Calendar/Calendar';
import CalendarHeader from '../CalendarHeader/CalendarHeader';

function CalendarPanel() {
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
      <Calendar
        firstOfSelected={firstOfSelectedMonth}
      />
    </div>
  );
}

export default CalendarPanel;
