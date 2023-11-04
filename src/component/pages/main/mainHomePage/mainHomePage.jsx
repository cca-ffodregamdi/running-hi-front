import React, { useState } from "react";
import "../../../../../src/assets/scss/pages/main/mainHomePage.scss";
import KakaoMap from "../kakaoMap/kakaoMap";

import Header from "../../../UI/organisms/Header/header";
import Footer from "../../../UI/organisms/Footer/footer";

function MainHomePage() {
  const [showMap, setShowMap] = useState(false);
  const [showLocationText, setShowLocationText] = useState(false);

  const handleMapButtonClick = () => {
    setShowMap(true);
    setShowLocationText(true);
  };

  return (
    <div>
      <main className="mainletter">
        <div id="wrapper">
          <Header />
          <h2 className="subtitle">
            당신을 위한, 당신에 의한 <br /> 맞춤형 러닝 코스 서비스
          </h2>
          <h1 className="title">RUNNINGHI</h1>
          <btn-contain className="btn-container">
            <button
              type="submit"
              className="mapbtn"
              onClick={handleMapButtonClick}
            >
              내 현재 위치 보기
            </button>
            {showLocationText && <p>회원 님의 현재 위치입니다</p>}
            {showMap && <KakaoMap />}
          </btn-contain>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainHomePage;
