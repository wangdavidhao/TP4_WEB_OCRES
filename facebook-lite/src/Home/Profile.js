import React, { useState } from 'react'
import './Profile.css';
import Avatar from '@material-ui/core/Avatar';

function Profile(props) {

    const [color, setColor] = useState("#00cec9");

    const handleChangeBack = () => {
        setColor('#'+Math.floor(Math.random()*16777215).toString(16));
    }

    return (
        <div className="profile_container">
            <div className="profile_color" style={{backgroundColor:color}}></div>
            <div className="profile_subContainer">
                <div className="profile_avatar">
                    <Avatar className="profile_avatar"  alt={props.prenom + props.nom} src={require(`${props.avatar}`)} ></Avatar>
                </div>
                <div className="profile_infos">
                    <p>Nom : {props.nom}</p>
                    <p>Prénom : {props.prenom}</p>
                </div>
                <div className="profile_birthday">
                    <p>Date de Naissance : {props.dateNaissance}</p>
                </div>
            </div>
            
            <div className="profile_change">
                <button className="profile_change_button" onClick={handleChangeBack}>Changer style</button>
            </div>
        </div>
    )
}

export default Profile;
