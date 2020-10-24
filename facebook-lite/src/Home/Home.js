import React from 'react'
import './Home.css';
import './Profile.js';
import Profile from './Profile.js';
import Post from './Post.js';

/** Composant Home qui regroupe deux composants child : profile et post
 * Envoi des props : App -> Home -> Profile et Post
 */

function Home(props) {
    return (
        <div className="home_container">
            <Profile profile={props.profile} >
            </Profile>
            <Post profile={props.profile} ></Post>
        </div>
    )
}

export default Home;
