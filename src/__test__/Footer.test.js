import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders the navbar with the correct text', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText((content, element) => {
    return content === '© Super Sayin' && element.tagName.toLowerCase() === 'a';
    });
    expect(footerText).toBeInTheDocument();
  });
});
//   PASS  src/__test__/Footer.test.js
//   Footer
//     ✓ renders the navbar with the correct text (14 ms)
