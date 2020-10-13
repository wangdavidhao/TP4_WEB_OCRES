import React,{useState} from 'react';
import './App.css';

import Header from './Header.js';
import Home from './Home/Home.js';


const profils = [
    {
        id:0,
        prenom:'David',
        nom:'Wang',
        dateNaissance:'09/11/1999',
        avatar:'./profile_david.PNG'
    },
    {
        id:1,
        prenom:'Sandra',
        nom:'Tang',
        dateNaissance:'09/12/1999',
        avatar:'./profile_sandra.PNG'
    },
    {
        id:2,
        prenom:'Benjamin',
        nom:'Sadoun',
        dateNaissance:'09/06/1999',
        avatar:'./profile_benjamin.PNG'
    }
]

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
