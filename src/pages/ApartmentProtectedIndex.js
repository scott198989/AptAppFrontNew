import React from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, Button, NavLink } from "reactstrap"

const ApartmentProtectedIndex = ({currentUser, apartments})=>{
  const myApartments = apartments?.filter(apartment => currentUser?.id === apartment.user_id)
    return(
        <>
        <CardGroup>
        {myApartments?.map((apt, index) => {
          return(
            <Card key={index}>
              <CardImg
                alt="a space you need to experience"
                src={apt.image}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Located in {apt.state}
                </CardTitle>
                <Button>
                  <NavLink href={`/ApartmentShow/${apt.id}`}>
                    More Details
                  </NavLink>
                </Button>
                <Button>
                  Edit
                </Button>
                <Button>
                  Delete
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </CardGroup>
        </>
    )
}
export default ApartmentProtectedIndex;
