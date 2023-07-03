import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody, CardText, CardLink } from 'reactstrap';
import '../styling/ApartmentIndex.css';
const ApartmentIndex = ({apartments}) => {
  return (
    <div className="apartment-index">
      {apartments?.map(apartment => (
        <Card key={apartment.id} className="apartment-card">
          <CardBody>
            <CardTitle tag="h5">{apartment.street}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {apartment.city}, {apartment.state}
            </CardSubtitle>
          </CardBody>
          <img alt="Card cap" src={apartment.image} width="100%" />
          <CardBody>
            <CardText>{apartment.square_footage} sq. ft.</CardText>
            <CardText>Price: {apartment.price}</CardText>
            <CardText>Bedrooms: {apartment.bedrooms}</CardText>
            <CardText>Bathrooms: {apartment.bathrooms}</CardText>
            <CardText>Pets: {apartment.pets}</CardText>
            <CardLink href={`/ApartmentShow/${apartment.id}`}>See Listing</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
export default ApartmentIndex;