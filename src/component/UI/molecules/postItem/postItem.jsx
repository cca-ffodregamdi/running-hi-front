import React from "react";

import "../../../../assets/scss/ui/molecules/postItem.scss";

const PostItem = ({ title, imageUrl }) => (
  <>
    <img src={imageUrl} alt={title} />
    <p className="postTitle">{title}</p>
  </>
);
export default PostItem;
