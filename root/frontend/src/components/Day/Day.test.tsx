import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router, BrowserRouter } from 'react-router-dom';

import Day from './Day';

test('Day displays date passed', () => {
  // Arrange
  const testDate = new Date('3/4/2022');
  const testSelected = true;

  // Act
  render(
    <BrowserRouter>
      <Day date={testDate} isSelected={testSelected} />
    </BrowserRouter>,
  );

  // Assert
  expect(screen.getByRole('button').textContent).toBe(String(testDate.getDate()));
});

test('Day on click navigates to Workouts for day', (done) => {
  // Arrange
  const history = createMemoryHistory();
  const testDate = new Date('6/2/2022');
  const testSelected = true;

  // Act
  render(
    <Router location={history.location} navigator={history}>
      <Day date={testDate} isSelected={testSelected} />
    </Router>,
  );

  const user = userEvent.setup();
  user.click(screen.getByRole('button'))
    .then(() => {
      expect(history.location.pathname).toBe('/Workouts');
      expect(history.location.search).toBe('?date=06022022');
      done();
    })
    .catch((error) => {
      done(error);
    });
});
