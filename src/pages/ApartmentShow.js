
import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody, CardText, CardLink, Button } from 'reactstrap';
import { useParams, Link, NavLink } from 'react-router-dom';
import '../styling/ApartmentShow.css';
import ApartmentDelete from './ApartmentDelete';

const ApartmentShow = ({ apartments, deleteApartment, logged_in, currentUser }) => {
  const { id } = useParams();
  let currentApt = apartments?.find((apt) => apt.id === +id);

  const handleDelete = () => {
    deleteApartment(currentApt.id);
  };

  if (!currentApt) {
    return <div>Loading...</div>; // Add loading state or handle the case when currentApt is undefined
  }

  return (
    <Card key={currentApt.id} className="apartment-card">
      <CardBody>
        <CardTitle tag="h5">{currentApt.street}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {currentApt.city}, {currentApt.state}
        </CardSubtitle>
      </CardBody>
      <img alt="Card cap" src={currentApt.image} width="100%" />
      <CardBody>
        <CardText>{currentApt.square_footage} sq. ft.</CardText>
        <CardText>Price: {currentApt.price}</CardText>
        <CardText>Bedrooms: {currentApt.bedrooms}</CardText>
        <CardText>Bathrooms: {currentApt.bathrooms}</CardText>
        <CardText>Pets: {currentApt.pets}</CardText>
        <CardLink tag={Link} to="/ApartmentIndex">
          Back to Home
        </CardLink>
        {logged_in && currentUser.id === currentApt.user_id && (
          <>
            <CardLink tag={Link} to={`/ApartmentShow/${currentApt.id}`}>
              Add to Favorites
            </CardLink>
            <Button className="show-buttons">
              <NavLink to={`/apartmentedit/${id}`} className="show-link">
                Edit Apartment
              </NavLink>
            </Button>
          </>
        )}
        <Button to="/apartmentsindex" onClick={() => deleteApartment(currentApt.id)}>
          <NavLink >
            Delete Apartment
          </NavLink>
        </Button>
      </CardBody>
    </Card>
  );
};

export default ApartmentShow;