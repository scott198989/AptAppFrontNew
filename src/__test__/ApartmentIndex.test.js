import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import ApartmentIndex from '../pages/ApartmentIndex';
import AptMock from '../AptMock'


describe('<ApartmentIndex />', () => {
it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={AptMock}/>
      </BrowserRouter>,
      div
    )
  })
  it("shows an apartment card", () => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={AptMock} />
      </BrowserRouter>
    )
  
    AptMock.forEach(apartment => {
        const cardTitles = screen.getAllByText(apartment.street);
        const foundTitle = cardTitles.find(title => title instanceof HTMLElement);
        expect(foundTitle).toBeInTheDocument();
        });
    });
  })