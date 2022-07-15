import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
  previewCard: {
    width: '200px',
    background: '#4E525B',
    maxHeight: '250px',
    borderRadius: '15px',
    color: theme.color,
  },
  previewCardHeader: {
    display: 'flex',
    alignItems: 'center',
    height: '7vh',
    width: '100%',
  },
  profileImage: {
    background: theme.color,
    borderRadius: '100%',
    width: '30px',
    height: '30px',
    margin: '0px 10px 0px 10px',
  },
  previewCardTitle: {
    color: 'white',
    height: '33px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '150px',
  },
  list: {
    listStyleType: 'none',
    marginTop: '5px',
  },
  diamond: {
    height: '10px',
    color: theme.color,
  },
  listExerciseItem: {
    margin: '-20px 0',
    '&:nth-child(n+7)': {
      display: 'none',
    },
    div: {
      display: 'flex',
      alignItems: 'center',
      color: '#B1B1B1',
    },
  },
  exerciseItem: {
    display: 'flex',
    alignItems: 'center',
    color: '#B1B1B1',
  },
  exercise: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '120px',
  },
  ellipse: {
    width: '100%',
    marginTop: '-5px',
  },
}));

export default useStyles;
