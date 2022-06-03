import React from 'react';

type PropTypes = {
  month: string,
  year: string,
};

function CalendarLabel({ month, year }: PropTypes) {
  return (
    <span data-testid="calendar-label">
      <b>{month}</b>
      {` | ${year}`}
    </span>
  );
}

export default CalendarLabel;
