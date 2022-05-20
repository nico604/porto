import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Discog from './Discog';

describe('<Discog />', () => {
  test('it should mount', () => {
    render(<Discog />);
    
    const discog = screen.getByTestId('Discog');

    expect(discog).toBeInTheDocument();
  });
});