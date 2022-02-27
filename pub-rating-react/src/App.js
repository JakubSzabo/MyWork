import {useState} from 'react';
import './App.css';
import PubForm from './components/PubForm';
import PubList from './components/PubList';

function App() {
  const appendName = (name) => {
    return `Ahoj ${name}`
  }

  const [ pubs, setPubs ] = useState([
    {
      id: 1,
      title: "Šelma",
      city: "Nitra",
      rating: 2
    },
    {
      id: 2,
      title: "Kotolňa",
      city: "Bratislava",
      rating: 5
    },
    {
      id: 3,
      title: "Bazaar",
      city: "Prešov",
      rating: 8
    }
  ])

  const addRating = (id) => {
    const newRatedPub = pubs.find((obj) => obj.id === id)
    newRatedPub.rating = newRatedPub.rating + 1;

    const newPubs = [...pubs.filter(obj => obj.id !== id), newRatedPub]
    setPubs(newPubs);
  }

  const addPub = (pub) => {
    pub.id = pubs.length + 1;
    setPubs([...pubs, pub])
  }

  return (
    <div className="App">
      <h1>{appendName("Matej")}</h1>
      <PubList onRating={addRating} pubs={pubs} />
      <PubForm onAdd = {addPub}/>
    </div>
  );
}

export default App;
