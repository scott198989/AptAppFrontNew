import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders the navbar with the correct text', () => {
    const { getByText } = render(<Header />);
    const homeLink = getByText('Home');
    expect(homeLink).toBeInTheDocument();
  });
});
// PASS  src/__test__/Header.test.js
// Header
//   ✓ renders the navbar with the correct text (11 ms)
