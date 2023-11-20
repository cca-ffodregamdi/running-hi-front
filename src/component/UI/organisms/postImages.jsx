import React, { useEffect } from 'react';
import PostImage from "../atoms/postImage";
// import "../../../../../src/assets/scss/ui/organisms/postImages.scss";

function PostImages({ imageList }) {

    return (
        <div className="image-grid">
            {imageList.map((it) => (
                <div key={it.id}>
                    <PostImage url={it.url} />
                </div>
            ))}
        </div>
    );
}

export default PostImages;
