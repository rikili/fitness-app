import React from 'react';
import { getDay, addDays, format } from 'date-fns';

import Week from '../Week/Week';

type PropTypes = {
  firstOfSelected: Date,
};

const getSundayOfWeek = (date: Date): Date => {
  const dayOfWeekOfFirst: number = getDay(date);
  return addDays(date, -(dayOfWeekOfFirst));
};

const generateMonthLayout = (firstOfMonth: Date): Date[][] => {
  const monthLayout: Date[][] = [[], [], [], [], [], []];

  const firstOfVisibleMonth = getSundayOfWeek(firstOfMonth);
  let dateToAdd = firstOfVisibleMonth;
  monthLayout.forEach((weekArr: Date[]) => {
    for (let dayInWeek = 0; dayInWeek < 7; dayInWeek += 1) {
      weekArr.push(dateToAdd);
      dateToAdd = addDays(dateToAdd, 1);
    }
  });

  return monthLayout;
};

function Month(props: PropTypes) {
  const { firstOfSelected } = props;
  const monthLayoutInWeeks: Date[][] = generateMonthLayout(firstOfSelected);

  return (
    <div>
      {monthLayoutInWeeks.map((week: Date[]) => (
        <Week
          key={`Week: (first: [${format(week[0], 'MM-dd')}])`}
          selectedMonth={firstOfSelected.getMonth()}
          dates={week}
        />
      ))}
    </div>
  );
}

export default Month;
