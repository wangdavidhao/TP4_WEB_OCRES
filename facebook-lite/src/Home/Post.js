import React from 'react'
import './Post.css';

function Post (props) {
    return (
        <div className="post_container">
            <div className="post_text">
                <p>{props.lastPost}</p>
            </div>
            <div className="post_like">
                <button>J'aime</button>
            </div>
        </div>
    )
}

export default Post;
