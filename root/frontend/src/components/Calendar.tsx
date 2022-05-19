import React from 'react';
import { getDay, addMonths, lastDayOfMonth } from 'date-fns';

import Week from './Week';

interface PropTypes {
  today: Date,
  firstOfSelected: Date,
}

const generateWeeks = (firstOfMonth: Date): number[][] => {
  const dayOffset: number = getDay(firstOfMonth);
  const weekArr: number[][] = [[], [], [], [], [], []];

  if (dayOffset !== 0) {
    const priorMonth = addMonths(new Date(firstOfMonth), -1);
    const lastOfPrior: number = lastDayOfMonth(
      priorMonth,
    ).getUTCDate();

    for (let fill: number = lastOfPrior - (dayOffset - 1); fill <= lastOfPrior; fill += 1) {
      weekArr[0].push(fill);
    }
  }

  const lastDayOfCurr = lastDayOfMonth(firstOfMonth).getUTCDate();
  for (let weekItr: number = 0; weekItr < 6; weekItr += 1) {
    const getLastOfLastWeek = weekItr === 0 ? 1 : weekArr[weekItr - 1][6] + 1;
    for (let fillCurr: number = getLastOfLastWeek; weekArr[weekItr].length < 7; fillCurr += 1) {
      if (fillCurr > lastDayOfCurr) {
        fillCurr = 1;
      }
      weekArr[weekItr].push(fillCurr);
    }
  }

  return weekArr;
};

function Calendar(props: PropTypes) {
  const { today, firstOfSelected } = props;

  const weeksArray: number[][] = generateWeeks(firstOfSelected);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div>
        {`Test Calendar, Today = ${today} || Month = ${firstOfSelected}`}
      </div>
      {weeksArray.map((week: number[], index: number) => {
        const rowNum = index;
        return (
          <Week
            key={`Week: [${week[0]}-${week[6]}]/(${rowNum})`}
            weekIndex={rowNum}
            dateValues={week}
          />
        );
      })}
    </div>
  );
}

export default Calendar;
