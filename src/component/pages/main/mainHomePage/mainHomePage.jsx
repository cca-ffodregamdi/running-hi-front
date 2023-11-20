import React, { useState, useEffect } from "react";
import "../../../../../src/assets/scss/pages/main/mainHomePage.scss";
import KakaoMap from "../kakaoMap/kakaoMap";

import Header from "../../../UI/organisms/Header/header";
import Footer from "../../../UI/organisms/Footer/footer";

function MainHomePage() {
  const [showMap, setShowMap] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const handleMapButtonClick = () => {
    setShowMap(true);
    // setShowLocationText(true);
  };

  useEffect(() => {
    const fullText = "당신을 위한, 당신에 의한<br/>맞춤형 러닝 코스 서비스";
    if (index <= fullText.length) {
      setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 100); // 매 100ms 마다 글자를 하나씩 추가
    }
  }, [index]);

  return (
    <div className="page-container">
      <div>
        <Header />
        <main className="mainletter">
          <div id="wrapper" style={{ overflow: "auto" }}>
            <h2
              className="subtitle"
              dangerouslySetInnerHTML={{ __html: text }}
            ></h2>
            <h1 className="title">RUNNINGHI</h1>
            <btn-contain className="btn-container">
              <button
                type="submit"
                className="mapbtn"
                onClick={handleMapButtonClick}
              >
                내 현재 위치 보기
              </button>
              {showMap && <KakaoMap />}
            </btn-contain>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainHomePage;
