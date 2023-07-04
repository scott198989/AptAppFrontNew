Edit and delete buttons: 
<div className="edit-btn-container">
      <NavLink className="edtBtn" to={`/Apartment/${id}/Edit`}>
        <span>Edit</span>
      </NavLink>
    </div>
    <div className="dlt-btn-container">
      <ApartmentDelete id={id} />
    </div>


    Removed this code from manifest json {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },

     {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }

    was getting this error when submitting new apartments

    apartmentIndex:1 Error while trying to use the following icon from the Manifest: http://localhost:3001/logo512.png (Download error or resource isn't a valid image)