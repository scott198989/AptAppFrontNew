import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import ApartmentEdit from '../pages/ApartmentEdit';


describe("<ApartmentEdit />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentEdit />
      </BrowserRouter>
    )


  })
  it("renders the apartment edit page", () => {
    const element =screen.getByRole('button', {name: /submit updated apartment/i})
    expect(element).toBeInTheDocument()
  })

})


















