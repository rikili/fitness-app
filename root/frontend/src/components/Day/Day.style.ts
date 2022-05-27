import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  SelectedDay: {
    background: 'grey',
    borderRadius: '50%',
    borderWidth: '0',
    minWidth: '30px',
    minHeight: '30px',
    margin: '5px',
  },
  UnSelectedDay: {
    background: 'lightGrey',
    borderRadius: '50%',
    borderWidth: '0',
    minWidth: '30px',
    minHeight: '30px',
    margin: '5px',
  },
});

export default useStyles;
