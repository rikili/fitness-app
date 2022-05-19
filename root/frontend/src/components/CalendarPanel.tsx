import React, { useState } from 'react';
import { addMonths } from 'date-fns';

import Calendar from './Calendar';
import CalendarControl from './CalendarControl';

function CalendarPanel() {
  const [today] = useState(new Date());
  const [firstOfSelectedMonth, setFirstOfSelectedMonth] = useState<Date>(
    new Date(`${today.getUTCFullYear()}-${today.getUTCMonth()}-1`),
  );

  const incrementMonth = () => setFirstOfSelectedMonth(
    addMonths(firstOfSelectedMonth, 1),
  );

  const decrementMonth = () => setFirstOfSelectedMonth(
    addMonths(firstOfSelectedMonth, -1),
  );

  return (
    <div>
      <CalendarControl
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
      />
      <Calendar
        today={today}
        firstOfSelected={firstOfSelectedMonth}
      />
    </div>
  );
}

export default CalendarPanel;
