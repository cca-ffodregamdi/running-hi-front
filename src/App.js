import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import MainHomePage from "./component/pages/main/mainHomePage/mainHomePage";
import LoginPage from "./component/pages/login/loginPage/loginPage";
// 임시 이미지 업로드
import ImageUploadPage from "./component/pages/imageUploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<MainHomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            {/* 임시 이미지 업로드 */}
            <Route path="/imgUpload" element={<ImageUploadPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
