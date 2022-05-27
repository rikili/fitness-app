import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  day: {
    borderRadius: '50%',
    borderWidth: '0',
    minWidth: '2em',
    minHeight: '2em',
    width: '4vw',
    height: '4vw',
    margin: '1vh',
  },
  selectedDay: {
    composes: '$day',
    background: 'grey',
  },
  unSelectedDay: {
    composes: '$day',
    background: 'lightGrey',
  },
  today: {
    composes: '$day',
    background: 'orange',
  },
});

export default useStyles;
