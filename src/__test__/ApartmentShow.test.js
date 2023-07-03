import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ApartmentShow from "../pages/ApartmentShow";
import AptMock from "../AptMock";



const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
        <Route
          path="/apartmentshow/:id"
          element={<ApartmentShow apartments={AptMock} />}
        />
      </Routes>
    </MemoryRouter>
  );
};

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    renderShow();
    expect(
      screen.getByText(`${AptMock[0].street}`, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${AptMock[0].city}`, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${AptMock[0].unit}`, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${AptMock[0].price}`, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${AptMock[0].state}`, { exact: false })
    ).toBeInTheDocument();
  });
});