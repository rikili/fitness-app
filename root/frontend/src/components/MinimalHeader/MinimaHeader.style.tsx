import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    background: '#8257e0',
    width: '100vw',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    zIndex: '1',
  },
  logo: {
    background: '#FF9E9E',
    width: '35px',
    height: '35px',
    borderRadius: '100%',
    position: 'relative',
    left: '10px',
  },
  nav: {
    color: 'white',
    minWidth: '245px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  links: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#FFB43B',
    },
  },
  activeLink: {
    textDecoration: 'none',
    color: '#FFB43B',
    borderBottom: '2px solid #FFB43B',
  },
});

export default useStyles;
