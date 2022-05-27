import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MinimalHeader from '../components/MinimalHeader/MinimalHeader';

import Home from './Home';
import Workouts from './Workouts';

function App() {
  return (
    <BrowserRouter>
      <MinimalHeader />
      <main className="pageBody" style={{ position: 'relative', top: '50px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
