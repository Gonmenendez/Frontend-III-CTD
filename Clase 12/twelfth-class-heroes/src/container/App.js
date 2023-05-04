import { useState } from 'react';
import '../styles/App.css';
import heroes from '../components/SuperHero.json'
import Lista from '../components/Lista'
import Header from '../components/Header'

function App() {

  const [selectedHero, setSelectedHero] = useState({
    superhero : "", 
    publisher : "", 
    alter_ego: "",
    first_appearance : "",
    characters : ""
  },)

  return (
    <>
      <Header selectedHero={selectedHero}/>
      <Lista heroes={heroes} selectHero={setSelectedHero}/>
    </>
  );
}

export default App;