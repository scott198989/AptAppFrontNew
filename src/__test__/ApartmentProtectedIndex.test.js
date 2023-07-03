import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ApartmentProtectedIndex from '../pages/ApartmentProtectedIndex';
import AptMock from '../AptMock';

// describe('<ApartmentProtectedIndex />', () => {
//   it('renders without crashing', () => {
//     render(
//       <BrowserRouter>
//         <ApartmentProtectedIndex apartments={AptMock} />
//       </BrowserRouter>
//     );
//   });

//   it('shows an apartment card', () => {
//     render(
//       <BrowserRouter>
//         <ApartmentProtectedIndex apartments={AptMock} />
//       </BrowserRouter>
//     );

//     AptMock.forEach(apartment => {
//       const cardTitles = screen.getAllByText(apartment.street);
//       const foundTitle = cardTitles.find(title => title instanceof HTMLElement);
//       expect(foundTitle).toBeInTheDocument();
//       screen.logTestingPlaygroundURL()
//     });
//   });
