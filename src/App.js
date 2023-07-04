import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ApartmentIndex from './pages/ApartmentIndex';
import ApartmentShow from './pages/ApartmentShow';
import ApartmentNew from './pages/ApartmentNew';
import ApartmentEdit from './pages/ApartmentEdit';
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex'
import NotFound from './pages/NotFound';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ApartmentDelete from './pages/ApartmentDelete'

// import AptMock from './AptMock';
// import UserMock from './UserMock';



const App = (props) => {
  const [apartments, setApartments] = useState([]);
  // const [user, setUser] = useState(UserMock);
  const [currentUser, setCurrentUser] = useState(null);
 
  const url = "https://apartment-app-backend-gejb.onrender.com"

  useEffect(() => {
    readApts()
  }, [])

  // apartment fetches
  const readApts = () => {
    fetch(`${url}/apartments`)
      .then(response => response.json())
      .then(payload => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }
  const createApartment = (apartment) => {
    console.log(apartment);
    fetch(`${url}/apartments`, {
      // ...
    })
      .then((response) => response.json())
      .then((payload) => {
        readApts(payload); // Update the list of apartments
        // ... other logic
      })
      .catch((errors) => console.log("Apartment create errors:", errors));
  };
  

   // authentication function
   const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  } 

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": localStorage.getItem("token") //retrieve the token 
      },
      method: 'DELETE'
    })
      .then(payload => {
        localStorage.removeItem("token")  // remove the token
        setCurrentUser(null)
      })
      .catch(error => console.log("log out errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  }

  const deleteApartment = (id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readApts())
      .catch((errors) => console.log("delete errors:", errors))
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token")
    if(loggedInUser) {
      setCurrentUser(loggedInUser)
    }
    readApts()
  }, [])
  
  return (
    <div>
    <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home apartments={apartments} />
} /> 
        <Route path="/ApartmentIndex" element={<ApartmentIndex  apartments={apartments}/>} />
        <Route path="/ApartmentShow/:id" element={<ApartmentShow apartments={apartments} deleteApartment={deleteApartment}/>} />
        <Route path="/login" element={<LogIn login={login}/>} />
        <Route path="/SignUp" element={<SignUp signup={signup}/>} />
        {currentUser && (
        <Route path="/API" 
              element={
              <ApartmentProtectedIndex 
              currentUser = {currentUser}
              apartments={apartments}
              />
              } 
            />
          )}
         <Route path="/ApartmentNew" element={<ApartmentNew createApartment={createApartment}/>} />
        <Route path="/ApartmentEdit" element={<ApartmentEdit apartments={apartments} setApartments={setApartments}/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ApartmentShow/:id"element={<ApartmentShow apartments={apartments} deleteApartment={deleteApartment} logged_in={props.logged_in} currentUser={props.current_user}  />}/>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
