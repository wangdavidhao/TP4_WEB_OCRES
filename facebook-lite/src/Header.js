import React from 'react'
import './Header.css';


function Header(props) {

    return (
        <div className="header_container">
            <div className="header_title">
                <h1>Facebook-Lite</h1>
            </div>
            <div className="header_buttons">
                {props.profils.map(element => {
                    return <button onClick={() => props.onClick(element.id)}>{element.prenom}</button>
                })}
            </div>
            
        </div>
    )
}

export default Header;
