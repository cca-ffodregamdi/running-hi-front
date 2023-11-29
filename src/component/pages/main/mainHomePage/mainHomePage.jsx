import axios from "axios";
import { Link } from "react-router-dom";
import KakaoMap from "../kakaoMap/kakaoMap";
import React, { useState, useEffect } from "react";
import "../../../../../src/assets/scss/pages/main/mainHomePage.scss";

import Header from "../../../UI/organisms/Header/header";
import Footer from "../../../UI/organisms/Footer/footer";
import PostList from "../../../UI/organisms/postList/postList";
import PostDetail from "../../post/postDetailPage/postDetailPage";

function MainHomePage() {
  const [showMap, setShowMap] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [userpost, setUserpost] = useState([]);

  const handleMapButtonClick = () => {
    setShowMap(true);
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
    const adminPostItem = [
      {
        id: 1,
        title: "광화문 30분 코스",
        imageUrl:
          "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201910/27/5297f67b-6fcd-4fcd-8917-d318b81f9f99.jpg",
        tags: ["서울", "쉬운 코스"],
      },
      {
        id: 2,
        title: "한강 20분 코스",
        imageUrl:
          "https://i.namu.wiki/i/t2zvEe7ws93H0jrNgi_6co5wMkXToxQuGkmO7AhHbMrhPBSY9LZwNpthQZRkWYxYBB2ZPj8M08p5vw_yOJAz_g.webp",
        tags: ["서울", "적당한 코스"],
      },
      {
        id: 3,
        title: "일산 호수공원 10분 코스",
        imageUrl:
          "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/3fuW/image/xVaOXxQnDVtv8lJb_nZ6Oxd7tjU",
        tags: ["경기", "어려운 코스"],
      },
      {
        id: 4,
        title: "서울숲 30분 코스",
        imageUrl:
          "https://www.ktsketch.co.kr/news/photo/202305/7546_38653_564.jpg",
        tags: ["서울", "적당한 코스"],
      },

      {
        id: 5,
        title: "석촌호수 20분 코스",
        imageUrl:
          "https://news.tbs.seoul.kr/Upload/Image/20200327/00000000000000087737.jpg",
        tags: ["서울", "어려운 코스"],
      },
    ];

    setPosts(adminPostItem);
  }, []);

  useEffect(() => {
    const userPost = [
      {
        id: 1,
        title: "여의도공원",
        imageUrl:
          "https://kr.imboldn.com/wp-content/uploads/2023/04/%EC%97%AC%EC%9D%98%EB%8F%84%EA%B3%B5%EC%9B%90-%EC%BD%94%EC%8A%A4-01-800x450.jpg",
        tags: ["서울", "쉬운 코스", "10분"],
      },
      {
        id: 2,
        title: "잠수교",
        imageUrl:
          "https://kr.imboldn.com/wp-content/uploads/2023/04/%EC%9E%A0%EC%88%98%EA%B5%90-%EC%BD%94%EC%8A%A4-06-800x450.jpg",
        tags: ["서울", "어려운 코스", "20분"],
      },
      {
        id: 3,
        title: "노들섬",
        imageUrl:
          "https://kr.imboldn.com/wp-content/uploads/2023/04/%EB%85%B8%EB%93%A4%EC%84%AC-%EC%BD%94%EC%8A%A4-01-800x450.jpg",
        tags: ["서울", "적당한 코스", "25분"],
      },
      {
        id: 4,
        title: "연트럴파크",
        imageUrl:
          "https://kr.imboldn.com/wp-content/uploads/2023/04/%EC%97%B0%ED%8A%B8%EB%9F%B4%ED%8C%8C%ED%81%AC-%EC%BD%94%EC%8A%A4-02-800x450.jpg",
        tags: ["서울", "어려운 코스", "15분"],
      },

      {
        id: 5,
        title: "매헌 시민의 숲",
        imageUrl:
          "https://mediahub.seoul.go.kr/uploads/mediahub/2022/10/ElQpYxqDvBeplDIgejunBgFUMkvpqhUi.jpg",
        tags: ["서울", "쉬운 코스", "30분"],
      },
    ];

    setUserpost(userPost);
  }, []);

  return (
    <>
      <div className="wrapper">
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
              <text className="runninghi">러닝하이 추천 코스</text>
              {/* 각 게시글에 Link를 사용하여 상세 페이지로 이동하는 링크 추가 */}
              <PostList
                posts={posts.map((post) => ({
                  ...post,
                  link: `/post/${post.id}`,
                }))}
              />
              <div style={{ marginBottom: "50px" }}></div>
              <text className="runners">러너들의 추천 코스</text>
              {/* 각 게시글에 Link를 사용하여 상세 페이지로 이동하는 링크 추가 */}
              <PostList
                posts={userpost.map((post) => ({
                  ...post,
                  link: `/post/${post.id}`,
                }))}
              />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainHomePage;
