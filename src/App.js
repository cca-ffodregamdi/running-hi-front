import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import AllRouters from "./Router/allRouters";
// 임시 이미지 업로드
import ImageUploadPage from "./component/pages/imageUploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route path="/" element={<AllRouters />} />
            {/* 임시 이미지 업로드 */}
            <Route path="/imgUpload" element={<ImageUploadPage />} />
          </Route>
        </Routes>
      </BrowserRouter>{" "}
      n
    </>
  );
}

export default App;
