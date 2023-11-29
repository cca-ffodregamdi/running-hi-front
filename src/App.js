import React from "react";
import { Outlet } from "react-router-dom";
import AllRouters from "./Router/allRouters";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 임시 이미지 업로드
import ImageUploadPage from "./component/pages/imageUploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Outlet />
        <AllRouters />
        {/* 임시 이미지 업로드 */}
        {/* <Route path="/imgUpload" element={<ImageUploadPage />} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
