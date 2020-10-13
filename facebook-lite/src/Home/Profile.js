import React from 'react'
import './Profile.css';
import Avatar from '@material-ui/core/Avatar';

function Profile(props) {

    console.log(props.avatar);
    return (
        <div className="profile_container">
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
                <button className="profile_change_button">Changer style</button>
            </div>
        </div>
    )
}

export default Profile;
