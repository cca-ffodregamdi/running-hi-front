import React, { useState } from "react";
import "../../../../assets/scss/pages/post/comment.scss";

const CommentForm = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAuthor("");
    setContent("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label className="author">작성자</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        <label className="content">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
        ></textarea>
      </div>
      <button type="submit">댓글 작성</button>
    </form>
  );
};

export default CommentForm;
