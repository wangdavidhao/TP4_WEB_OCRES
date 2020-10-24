import React,{useState} from 'react';
import './App.css';

//On import Header et Home (les deux composants directement "child" de App)
import Header from './Header.js';
import Home from './Home/Home.js';

import {profils} from './Home/profils.js'; //On importe profils (un objet javascript qui contient les données de chaque utilisateurs)

/**Composant APP à la racine de l'hierarchie (c le composant tout au dessus qui englobe tous les autres) */
//C'est ici qu'on importe profils car tous ses éléments enfants auront besoin des données utilisateurs

function App() {

  //UseState pour manipuler une donnée localement
  //Ici, la donnée c'est profile, et pour changer le profile, on définit sa fonction setProfile
  const [profile, setProfile] = useState(profils[0]);  //UseState pour initialiser la donnée, ici, on l'initialise
  // à profils[0] donc l'utilisateur 0 donc Grace dans l'objet javascript

  //Fonction qui va être appelée lorsque l'utilisateur switch d'utilisateur depuis header.js
  //param : id de l'user
  const changeProfile = idName =>{
    const newProfile = profils.filter(id => id.id === idName);  //Creation Array qui va filtrer l'objet avec le même id
    setProfile(newProfile[0]); //Premier élément de l'Array, car filter retourne un array, et seulement besoin du 
    //premier élément car id unique donc un seul correspondant
    //on set la donnée locale profile avec le nouvel utilisateur
  }
  return (
    <div>
        <Header profils={profils} onClick={changeProfile.bind(this)}/> {/*On passe d'abord profils(l'array d'objet js) et onClick en props (props = arguments à passer pour un élément child)*/}
        <Home profile={profile}/> 
    </div>
  );
}

export default App;
