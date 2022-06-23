import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  weatherContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '90px',
    justifyContent: 'space-around',
  },
  currWeather: {
    width: '2.5em',
    height: '2.5em',
  },
  currWeatherTemp: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftBorder: {
    borderLeft: 'white solid 1.5px',
    height: '25px',
  },
});

export default useStyles;
