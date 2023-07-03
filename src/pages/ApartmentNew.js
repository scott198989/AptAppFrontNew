import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styling/ApartmentNew.css"

const ApartmentNew = ({ createApartment, currentUser}) => {
  const [newApartment, setNewApartment] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    square_footage: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: currentUser?.id
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createApartment(newApartment);
    navigate("/apartmentIndex");
  };

  return (
    <>
      <Form className="formstyle">
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            type="text"
            name="street"
            onChange={handleChange}
            value={newApartment.street}
          />
        </FormGroup>

        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input
            type="text"
            name="unit"
            onChange={handleChange}
            value={newApartment.unit}
          />
        </FormGroup>

        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            onChange={handleChange}
            value={newApartment.city}
          />
        </FormGroup>

        <FormGroup>
          <Label for="state">State</Label>
          <Input
            type="text"
            name="state"
            onChange={handleChange}
            value={newApartment.state}
          />
        </FormGroup>

        <FormGroup>
          <Label for="square_footage">Square Footage</Label>
          <Input
            type="text"
            name="square_footage"
            onChange={handleChange}
            value={newApartment.square_footage}
          />
        </FormGroup>

        <FormGroup>
  <Label for="price">Price</Label>
  <Input
    type="text"
    name="price"
    onChange={handleChange}
    value={newApartment.price}
  />
</FormGroup>


        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            type="text"
            name="bedrooms"
            onChange={handleChange}
            value={newApartment.bedrooms}
          />
        </FormGroup>

        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            type="text"
            name="bathrooms"
            onChange={handleChange}
            value={newApartment.bathrooms}
          />
        </FormGroup>

        <FormGroup>
  <Label for="pets">Pets</Label>
  <Input
    type="text"
    name="pets"
    onChange={handleChange}
    value={newApartment.pets}
  />
</FormGroup>

<FormGroup>
  <Label for="image">Image</Label>
  <Input
    type="text"
    name="image"
    onChange={handleChange}
    value={newApartment.image}
  />
</FormGroup>
</Form>
<Button color="primary" onClick={handleSubmit} name="submit">
  Submit New Apartment
</Button>
</>
);
};

export default ApartmentNew;
