import React, { useState } from 'react'
import './Profile.css';
import Avatar from '@material-ui/core/Avatar';
import {profils} from './profils.js';

import EditIcon from '@material-ui/icons/Edit';

function Profile(props) {

    /**Donnée locale color, on l'initialise avec l'array d'objet depuis props */
    const [color, setColor] = useState(props.profile.backColor);


    //Si clique sur bouton on trouve l'index (0, 1 ou 2) et on le modifie avec une couleur aléatoire et on set la donnée locale color avec une nouvelle couleur
    const handleChangeBack = () => {
        let index = profils.findIndex(id => id.id === props.profile.id);
        profils[index].backColor =  '#'+Math.floor(Math.random()*16777215).toString(16);
        setColor(props.profile.backColor);
    }

    return (
        <div className="profile_container">
            <div className="profile_color" style={{backgroundColor:props.profile.backColor}}></div>
            <div className="profile_subContainer">
                <div className="profile_avatar">
                    <Avatar className="profile_avatar"  alt={props.profile.prenom + props.profile.nom} src={require(`${props.profile.avatar}`)} ></Avatar>
                </div>
                <div className="profile_infos">
                    <p>Nom : {props.profile.nom}</p>
                    <p>Prénom : {props.profile.prenom}</p>
                </div>
                <div className="profile_birthday">
                    <p>Date de Naissance : {props.profile.dateNaissance}</p>
                </div>
            </div>
            
            <div className="profile_change">
                <button className="profile_change_button" onClick={handleChangeBack}><p>Changer style</p><EditIcon fontSize="inherit"></EditIcon></button>
            </div>
        </div>
    )   
}

export default Profile;
