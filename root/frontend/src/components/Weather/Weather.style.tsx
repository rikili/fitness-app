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
    width: '40px',
    height: '40px',
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
