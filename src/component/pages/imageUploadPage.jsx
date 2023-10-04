import React, { useState } from "react";
import ImgUpload from "../UI/ImageUpload/imageUpload";

const imageUploadPage = () => {
  const [imgList, setImgList] = useState([]);

  return (
    <>
      <h1>이미지</h1>
      <ImgUpload max={3} setImgList={setImgList} />
    </>
  );
};
export default imageUploadPage;
