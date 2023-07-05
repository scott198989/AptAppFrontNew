import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ApartmentIndex from './pages/ApartmentIndex';
import ApartmentShow from './pages/ApartmentShow';
import ApartmentNew from './pages/ApartmentNew';
import ApartmentEdit from './pages/ApartmentEdit';
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex'
import NotFound from './pages/NotFound';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ApartmentDelete from './pages/ApartmentDelete';

const App = () => {
  const [apartments, setApartments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const url = "https://apartment-app-backend-gejb.onrender.com";

  useEffect(() => {
    readApts();
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
  }, []);

  // Fetch apartments
  const readApts = () => {
    fetch(`${url}/apartments`)
      .then(response => response.json())
      .then(payload => {
        setApartments(payload);
      })
      .catch((error) => console.log(error));
  };

  const createApartment = (apartment) => {
    fetch(`${url}/apartments`, {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readApts())
      .catch((errors) => console.log("Apartment create errors:", errors));
  };

  const deleteApartment = (id) => {
    fetch(`${url}/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(() => readApts())
      .catch((errors) => console.log("Delete errors:", errors));
  };

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/apartmentIndex"
          element={<ApartmentIndex apartments={apartments} />}
        />
        <Route
          path="/apartmentShow/:id"
          element={<ApartmentShow apartments={apartments} />}
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        {currentUser && (
          <Route
            path="/api"
            element={
              <ApartmentProtectedIndex
                currentUser={currentUser}
                apartments={apartments}
              />
            }
          />
        )}
        <Route
          path="/apartmentNew"
          element={<ApartmentNew createApartment={createApartment} />}
        />
        <Route
          path="/apartmentEdit/:id"
          element={<ApartmentEdit apartments={apartments} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
