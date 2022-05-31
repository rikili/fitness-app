import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { addMonths, format } from 'date-fns';

import CalendarPanel from './Calendar';
import { LEFT_CONTROL_SYMBOL, RIGHT_CONTROL_SYMBOL } from '../CalendarHeader/constants';

test('Navigating to previous month updates month', (done) => {
  // Arrange
  const dateToCheck = format(addMonths(new Date(), -1), 'MMMM');
  render(
    <BrowserRouter>
      <CalendarPanel />
    </BrowserRouter>,
  );
  const user = userEvent.setup();

  // Act
  user.click(screen.getByText(LEFT_CONTROL_SYMBOL))
    .then(() => {
      // Assert
      expect(screen.getByTestId('calendar-label').textContent).toContain(dateToCheck);
      done();
    })
    .catch((error) => {
      done(error);
    });
});

test('Navigating to next month updates month', (done) => {
  // Arrange
  const dateToCheck = format(addMonths(new Date(), 1), 'MMMM');
  render(
    <BrowserRouter>
      <CalendarPanel />
    </BrowserRouter>,
  );
  const user = userEvent.setup();

  // Act
  user.click(screen.getByText(RIGHT_CONTROL_SYMBOL))
    .then(() => {
      // Assert
      expect(screen.getByTestId('calendar-label').textContent).toContain(dateToCheck);
      done();
    })
    .catch((error) => {
      done(error);
    });
});

test('Navigating to previous year updates year', (done) => {
  // Arrange
  const dateToCheck = format(addMonths(new Date(), -12), 'yyyy');
  render(
    <BrowserRouter>
      <CalendarPanel />
    </BrowserRouter>,
  );
  const user = userEvent.setup();

  // Act
  const clickPromises: Promise<void>[] = [];
  for (let counter = 0; counter < 13; counter += 1) {
    clickPromises.push(
      user.click(screen.getByText(LEFT_CONTROL_SYMBOL))
        .catch((error) => {
          done(error);
        }),
    );
  }

  // Assert
  Promise.all(clickPromises)
    .then(() => {
      expect(screen.getByTestId('calendar-label').textContent).toContain(dateToCheck);
      done();
    });
});

test('Navigating to next year updates year', (done) => {
  // Arrange
  const dateToCheck = format(addMonths(new Date(), 12), 'yyyy');
  render(
    <BrowserRouter>
      <CalendarPanel />
    </BrowserRouter>,
  );
  const user = userEvent.setup();

  // Act
  const clickPromises: Promise<void>[] = [];
  for (let counter = 0; counter < 13; counter += 1) {
    clickPromises.push(
      user.click(screen.getByText(RIGHT_CONTROL_SYMBOL))
        .catch((error) => {
          done(error);
        }),
    );
  }

  // Assert
  Promise.all(clickPromises)
    .then(() => {
      expect(screen.getByTestId('calendar-label').textContent).toContain(dateToCheck);
      done();
    });
});
