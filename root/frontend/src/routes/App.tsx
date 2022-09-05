import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from '../components/Header';

import Home from './Home';
import Workouts from './Workouts';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <BrowserRouter>
      <Header />
      <ApolloProvider client={client}>
        <main className="pageBody" style={{ position: 'relative', top: '50px', zIndex: '1' }}>
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
