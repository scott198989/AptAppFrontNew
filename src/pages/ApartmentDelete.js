import React from 'react';

import '../styling/ApartmentDelete.css'

const ApartmentDelete = ({ id }) => {
  const handleDelete = () => {
    fetch(`http://localhost:3000/apartments/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((payload) => {
      console.log("Apartment deleted successfully");
    })
    .catch((errors) => {
      console.log("Delete errors:", errors)
    })
  }

  return(
    <button className="dltBtn" onClick={handleDelete}>
      <span>Delete</span>
    </button>
  )
}

export default ApartmentDelete;