import first from '../assets/first.jpeg';
import second from '../assets/second.jpeg';
import third from '../assets/third.jpeg';
// import remaining images as needed

let apartments = [
  {
    id: 1,
    street: "Andros Pl",
    unit: "1",
    city: "San Diego",
    state: "CA",
    square_footage: 1200,
    price: "2,500",
    bedrooms: 2,
    bathrooms: 2,
    pets: "yes",
    image: first, 
    user_id: 1,
  },
  {
    id: 2,
    street: "Andros Pl",
    unit: "1",
    city: "San Diego",
    state: "CA",
    square_footage: 1200,
    price: "2,500",
    bedrooms: 2,
    bathrooms: 2,
    pets: "yes",
    image: second, 
    user_id: 2,
  },
  {
    id: 3,
    street: "Andros Pl",
    unit: "1",
    city: "San Diego",
    state: "CA",
    square_footage: 1200,
    price: "2,500",
    bedrooms: 2,
    bathrooms: 2,
    pets: "yes",
    image: third, 
    user_id: 3,
  },
  // add more apartment objects as needed
];

export default apartments;
