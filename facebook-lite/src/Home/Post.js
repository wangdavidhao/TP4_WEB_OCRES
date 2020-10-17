import React, {useState} from 'react'
import './Post.css';

import {profils} from './profils.js';

function Post (props) {

    const [like,setLike] = useState(props.profile.nbLike);

    const handleLike = () => {
        let index = profils.findIndex(id => id.id === props.profile.id);
        profils[index].nbLike++;
        setLike(props.profile.nbLike);

    }
    
    return (
        <div className="post_container">
            <div className="post_text">
                <p>{props.profile.lastPost}</p>
            </div>
            <div className="post_like">
                <button onClick={handleLike}>J'aime</button>
                <p>Nombre like : {props.profile.nbLike}</p>
            </div>
        </div>
    )
}

export default Post;
