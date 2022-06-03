import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  week: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10px',
  },
  selectedWeek: {
    composes: '$week',
    background: '#ffe8a6',
    borderRadius: '8px',
  },
});

export default useStyles;
