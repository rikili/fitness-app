import React from 'react';
import { getDay, addDays, format } from 'date-fns';

import Week from '../Week/Week';

interface PropTypes {
  today: Date,
  firstOfSelected: Date,
}

const getSundayOfWeek = (date: Date): Date => {
  const dayOfWeekOfFirst: number = getDay(date);
  return addDays(date, -(dayOfWeekOfFirst - 1));
};

const generateMonthLayout = (firstOfMonth: Date): Date[][] => {
  const monthLayout: Date[][] = [[], [], [], [], [], []];

  const firstOfVisibleCalendar = getSundayOfWeek(firstOfMonth);
  let dateToAdd = firstOfVisibleCalendar;
  monthLayout.forEach((weekArr: Date[]) => {
    for (let dayInWeek = 0; dayInWeek < 7; dayInWeek += 1) {
      weekArr.push(dateToAdd);
      dateToAdd = addDays(dateToAdd, 1);
    }
  });

  return monthLayout;
};

function Calendar(props: PropTypes) {
  const { today, firstOfSelected } = props;

  const monthLayoutInWeeks: Date[][] = generateMonthLayout(firstOfSelected);

  return (
    <div>
      <div>
        {`Test Calendar, Today = ${today} || Month = ${firstOfSelected}`}
      </div>
      {monthLayoutInWeeks.map((week: Date[]) => (
        <Week
          key={`Week: (first: [${format(week[0], 'mm-dd')}])`}
          selectedMonth={firstOfSelected.getMonth()}
          dates={week}
        />
      ))}
    </div>
  );
}

export default Calendar;
