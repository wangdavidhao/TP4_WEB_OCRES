import React from 'react'
import './Header.css';


function Header(props) {

    return (
        <div className="header_container">
            <div className="header_title">
                <h1>Facebook-Lite</h1>
            </div>
            <div className="header_buttons">
                {/*profils = une array d'objet donc on la parcourt avec map() et pour chaque élément (nom de variable que tu choisis) dans
                profils tu retournes un bouton (donc 3 ds notre cas) et à chaque click t'appelles la props onClick ds App.js et on passe l'id en param */}
                {props.profils.map(element => {
                    return <button onClick={() => props.onClick(element.id)}>{element.prenom}</button>
                })}
                {/** {element.prenom} pour afficher chaque prenom ds le header */}
            </div>
            
        </div>
    )
}

export default Header;
