import React,{useState} from 'react';
import './App.css';

import Header from './Header.js';
import Home from './Home/Home.js';

import {profils} from './Home/profils.js';

function App() {

  const [profile, setProfile] = useState(profils[0]);  //Premier nom par défaut

  const changeProfile = idName =>{
    const newProfile = profils.filter(id => id.id === idName);  //Creation Array qui va filtrer l'objet avec le même id
    setProfile(newProfile[0]); //Premier élément de l'Array
  }
  return (
    <div>
        <Header profils={profils} onClick={changeProfile.bind(this)}/>
        <Home profile={profile}/> 
    </div>
  );
}

export default App;
