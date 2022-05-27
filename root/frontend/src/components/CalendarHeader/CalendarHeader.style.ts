import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    width: '100%',
    minHeight: '40px',
    display: 'flex',
    flexFlow: 'row no-wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4vh',
    borderBottom: '2px solid lightGrey',
  },
  selector: {
    display: 'flex',
    flexFlow: 'row no-wrap',
  },
  selectorButton: {
    backgroundColor: 'grey',
    borderRadius: '50%',
    minHeight: '2em',
    minWidth: '2em',
    height: '1.5vw',
    width: '1.5vw',
    margin: '0.5vh',
  },
});

export default useStyles;
