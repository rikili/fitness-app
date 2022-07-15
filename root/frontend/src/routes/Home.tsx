import React from 'react';

import { ThemeProvider } from 'react-jss';
import Calendar from '../components/Calendar/Calendar';
import PreviewCard from '../components/PreviewCard/PreviewCard';

function Home() {
  //  placeholder until we populate database with exercises + theme colors
  const theme = {
    color: 'red',
  };

  return (
    <div>
      <Calendar />
      {/* this is a placeholder */}
      <ThemeProvider theme={theme}>
        <PreviewCard title="workout" exercises={['arms with long title', 'legs', 'chest', 'back', 'abs', 'shoulders', '7th child (not shown)']} />
      </ThemeProvider>
    </div>
  );
}

export default Home;
