import React, {useState} from 'react'
import './Post.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {profils} from './profils.js';

function Post (props) {

    //On set la donnée locale like aux nb de like récupérés avec props (props=array d'objet), donc 0 like
    const [like,setLike] = useState(props.profile.nbLike);

    //Si on clique sur j'aime alors on trouve l'index du profil en question, on se positionne dessus et on l'incrémente et enfin change la donnée locale
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
                <button onClick={handleLike}><p>J'aime</p> <FavoriteIcon fontSize="inherit"></FavoriteIcon></button>
                <p>Nombre like : {props.profile.nbLike}</p>
            </div>
        </div>
    )
}

export default Post;
