import React, { useEffect } from 'react';
import "../../../assets/scss/ui/atoms/postImage.scss";

function PostImage(props) {
    return (
        <div className="image-box">
            <img className="image" src={props.url}></img>
        </div>
    )

}

export default PostImage;