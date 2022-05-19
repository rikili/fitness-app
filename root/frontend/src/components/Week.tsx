import React from 'react';
import useStyles from './Week.style';

import Button from './Button';

interface PropTypes {
  weekIndex: number,
  dateValues: number[],
}

function Week({ weekIndex, dateValues }: PropTypes) {
  const styles = useStyles();
  return (
    <div className={styles.Week}>
      {dateValues.map((date: number) => (
        <Button
          className={styles.Day}
          key={`Day: ${date}/(${weekIndex})`}
        >
          {String(date)}
        </Button>
      ))}
    </div>
  );
}

export default Week;
