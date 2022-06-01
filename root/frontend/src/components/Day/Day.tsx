import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import useStyles from './Day.style';
import Button from '../Button/Button';

type PropTypes = {
  isSelected: boolean,
  isToday?: boolean,
  date: Date,
};

const generateDateURL = (date: Date): string => `../Workouts?date=${format(date, 'MMddyyyy')}`;

function Day({ isSelected, isToday, date }: PropTypes) {
  const styles = useStyles();
  const navigate = useNavigate();

  let dayStyle;

  if (isToday) dayStyle = styles.today;
  else dayStyle = isSelected ? styles.selectedDay : styles.unSelectedDay;
  return (
    <Button
      className={dayStyle}
      onClick={() => navigate(generateDateURL(date))}
    >
      {String(date.getDate())}
    </Button>
  );
}

Day.defaultProps = {
  isToday: false,
};

export default Day;
