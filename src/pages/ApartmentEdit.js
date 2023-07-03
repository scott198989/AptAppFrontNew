import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useParams, useNavigate } from "react-router-dom"
import "../styling/ApartmentEdit.css"

const ApartmentEdit = ({ apartments, updateApartment }) => {
  const { id } = useParams()
  let currentApartment = apartments?.find((apartment) => apartment.id === +id)

  const [editApartment, setEditApartment] = useState({
    street: currentApartment ? currentApartment.street : '',
    unit: currentApartment ? currentApartment.unit : '',
    city: currentApartment ? currentApartment.city : '',
    state: currentApartment ? currentApartment.state : '',
    square_footage: currentApartment ? currentApartment.square_footage : '',
    price: currentApartment ? currentApartment.price : '',
    bedrooms: currentApartment ? currentApartment.bedrooms : '',
    bathrooms: currentApartment ? currentApartment.bathrooms : '',
    pets: currentApartment ? currentApartment.pets : '',
    image: currentApartment ? currentApartment.image : ''
  });
  
  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateApartment(editApartment, currentApartment.id)
    navigate("/apartmentindex")
  }
  return(
    <>


       <Form id="formstyle">
        <FormGroup>
          <Label for="street">Street</Label>
          <Input type="text" name="street" onChange={handleChange} value={editApartment.street} />
        </FormGroup>

        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input type="text" name="unit" onChange={handleChange} value={editApartment.unit} />
        </FormGroup> 

        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" onChange={handleChange} value={editApartment.city} />
        </FormGroup> 

        <FormGroup>
          <Label for="state">State</Label>
          <Input type="state" name="state" onChange={handleChange} value={editApartment.state} />
        </FormGroup>

        <FormGroup>
          <Label for="square_footage">Square_Footage</Label>
          <Input type="text" name="square_footage" onChange={handleChange} value={editApartment.square_footage} />
        </FormGroup>

        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="text" name="price" onChange={handleChange} value={editApartment.price} />
        </FormGroup> 

        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input type="text" name="bedrooms" onChange={handleChange} value={editApartment.bedrooms} />
        </FormGroup> 

        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input type="text" name="bathrooms" onChange={handleChange} value={editApartment.bathrooms} />
        </FormGroup> 

        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="text" name="image" onChange={handleChange} value={editApartment.image} />
        </FormGroup> 


        <Button onClick={handleSubmit} name="submit">
         Submit Updated Apartment
        </Button>
          
        </Form>
    </>
)}


export default ApartmentEdit;