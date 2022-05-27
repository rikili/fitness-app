import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import useStyles from './Day.style';
import Button from '../Button/Button';

interface PropTypes {
  isSelected: boolean,
  date: Date,
}

function Day({ isSelected, date }: PropTypes) {
  const styles = useStyles();
  const style = isSelected ? styles.SelectedDay : styles.UnSelectedDay;
  return (
    <Link
      to={`/Workouts/${date}`}
      key={`Day: ${format(date, 'mm-dd-yy')}`}
    >
      <Button className={style}>
        {String(date.getDate())}
      </Button>
    </Link>
  );
}

export default Day;
