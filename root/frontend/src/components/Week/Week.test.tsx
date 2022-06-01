import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Week from './Week';

test('Week loads dates passed into it', () => {
  // Arrange
  const datesToTest = [
    new Date('1/1/2022'),
    new Date('1/2/2022'),
    new Date('1/3/2022'),
    new Date('1/4/2022'),
    new Date('1/5/2022'),
    new Date('1/6/2022'),
    new Date('1/7/2022'),
  ];
  const monthToTest = 1;

  // Act
  render(
    <BrowserRouter>
      <Week selectedMonth={monthToTest} dates={datesToTest} />
    </BrowserRouter>,
  );

  // Assert
  expect(screen.getAllByRole('button')).toHaveLength(7);
  datesToTest.forEach((dateForTest: Date) => {
    expect(screen.getByText(String(dateForTest.getDate())));
  });
});
