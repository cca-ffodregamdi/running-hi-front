import axios from "axios";
import KakaoMap from "../kakaoMap/kakaoMap";
import React, { useState, useEffect } from "react";
import "../../../../../src/assets/scss/pages/main/mainHomePage.scss";

import Header from "../../../UI/organisms/Header/header";
import Footer from "../../../UI/organisms/Footer/footer";

function MainHomePage() {
  const [posts, setPosts] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const handleMapButtonClick = () => {
    setShowMap(true);
    // setShowLocationText(true);
  };

  useEffect(() => {
    const fullText = "당신을 위한, 당신에 의한 <br/> 맞춤형 러닝 코스 서비스";
    if (index <= fullText.length) {
      setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 100); // 매 100ms 마다 글자를 하나씩 추가
    }
  }, [index]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://15.165.120.114/api/v1/admin-post"
        );
        setPosts(response.data.adminPostList);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div class="wrapper">
        <div className="page-container">
          <div>
            <Header />
            <main className="mainletter">
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
              <div className="post-gallery">
                {posts.map((post, index) => (
                  <div className="post-card" key={post.adminPostNo}>
                    <h2>{post.adminPostTitle}</h2>
                    <img src={post.thumbnail} alt={post.adminPostTitle} />
                    <p>{post.adminPostContent}</p>
                    {post.keywords.map((keyword, index) => (
                      <span key={index}>{keyword.keyword}</span>
                    ))}
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainHomePage;
