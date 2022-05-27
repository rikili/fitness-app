import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import useStyles from './Day.style';
import Button from '../Button/Button';

interface PropTypes {
  isSelected: boolean,
  date: Date,
}

const isSameDate = (firstDate: Date, secondDate: Date): boolean => format(firstDate, 'MM-dd-yyyy') === format(secondDate, 'MM-dd-yyyy');
const generateDateURL = (date: Date): string => `../Workouts/${format(date, 'MMddyyyy')}`;

function Day({ isSelected, date }: PropTypes) {
  const styles = useStyles();
  const navigate = useNavigate();

  const isToday = isSameDate(date, new Date());
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

export default Day;
