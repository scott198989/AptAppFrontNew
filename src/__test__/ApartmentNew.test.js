import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import ApartmentNew from '../pages/ApartmentNew';


describe("<ApartmentNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    )


  })
  it("renders the apartment new page", () => {
    const element =screen.getByRole('button', {name: /submit new apartment/i})
    expect(element).toBeInTheDocument()
  })

})