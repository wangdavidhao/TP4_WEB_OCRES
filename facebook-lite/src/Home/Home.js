import React from 'react'
import './Home.css';
import './Profile.js';
import Profile from './Profile.js';

function Home(props) {
    return (
        <div className="home_container">
            <Profile nom={props.profile.nom} prenom={props.profile.prenom} dateNaissance={props.profile.dateNaissance} avatar={props.profile.avatar} ></Profile>
        </div>
    )
}

export default Home;
