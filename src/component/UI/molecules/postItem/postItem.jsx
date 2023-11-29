// postItem.jsx
import React from "react";
import "../../../../assets/scss/ui/molecules/postItem.scss";

const PostItem = ({ title, imageUrl, tags }) => (
  <div className="post-item">
    <img src={imageUrl} alt={title} className="post-image" />
    {Array.isArray(tags) && (
      <div className="post-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    )}
    <div className="post-title">{title}</div>
  </div>
);

export default PostItem;
