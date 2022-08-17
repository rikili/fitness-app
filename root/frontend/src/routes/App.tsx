import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MinimalHeader from '../components/MinimalHeader/MinimalHeader';

import Home from './Home';
import Workouts from './Workouts';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <BrowserRouter>
      <MinimalHeader />
      <ApolloProvider client={client}>
        <main className="pageBody" style={{ position: 'relative', top: '50px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
