import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  base: {
    borderStyle: 'none !important',
    cursor: 'pointer',
  },
  default: {
    composes: '$base',
  },
});

export default useStyles;
