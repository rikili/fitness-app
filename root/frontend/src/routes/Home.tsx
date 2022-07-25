import React from 'react';

import Calendar from '../components/Calendar/Calendar';
import PreviewCard from '../components/PreviewCard/PreviewCard';

function Home() {
  return (
    <div>
      <Calendar />
      {/* this is a placeholder */}
      <PreviewCard title="workout" exercises={['arms with long title', 'legs', 'chest', 'back', 'abs', 'shoulders', '7th child (not shown)']} theme="green" />
      <PreviewCard title="workout2" exercises={['arms with long title', 'legs', 'chest', 'back', 'abs', 'shoulders', '7th child (not shown)']} theme="blue" />
    </div>
  );
}

export default Home;
