import React from 'react';

import Button from './Button';

interface PropTypes {
  incrementMonth: () => void,
  decrementMonth: () => void,
}

function CalendarControl(props: PropTypes) {
  const { incrementMonth, decrementMonth } = props;
  return (
    <div>
      <Button onClick={() => incrementMonth()}>Increment</Button>
      <Button onClick={() => decrementMonth()}>Decrement</Button>
    </div>
  );
}

export default CalendarControl;
