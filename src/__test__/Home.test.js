import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AptMock from '../AptMock';

describe('<Home />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Home apartments={AptMock} />
      </BrowserRouter>
    );
  });

  it('shows an apartment card', () => {
    render(
      <BrowserRouter>
        <Home apartments={AptMock} />
      </BrowserRouter>
    );

    AptMock.forEach(apartment => {
      const cardTitles = screen.getAllByText(apartment.street);
      const foundTitle = cardTitles.find(title => title instanceof HTMLElement);
      expect(foundTitle).toBeInTheDocument();
      screen.logTestingPlaygroundURL()
    });
  });
// PASS  src/__test__/Footer.test.js
// Footer
//   ✓ renders the navbar with the correct text (14 ms)
});

