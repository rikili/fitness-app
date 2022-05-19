import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Week: {
    display: 'flex',
    flexDirection: 'row',
    width: '20px',
  },
  Day: {
    background: 'grey',
    borderRadius: '50%',
    borderWidth: '0',
    minWidth: '30px',
    minHeight: '30px',
    margin: '15%',
  },
});

export default useStyles;
