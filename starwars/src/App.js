import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  let charArray = [];
    useEffect(() => {
      for (let i = 1; i < 11; i++) {
      axios
        .get(`https://swapi.dev/api/people/${i}`)
        .then((res) => {
          console.log("res:", res);
          setCharacters(res.data);
          charArray.push(res.data);
          console.log(charArray);
        })
        .catch((err) => {
          console.log("err:", err);
        }) } }, []); 
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    {charArray.map((char) => {
      return (<Character name={char.name} year={char.birth_year}/>
      );
      })}
    </div>
  );
      }

export default App;
