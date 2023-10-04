import React from "react";
import "./mainHomePage.css";

import { Header } from "../../../UI/organisms/Most/header/header";
import { Footer } from "../../../UI/organisms/Most/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// App 컴포넌트 정의
function MainHomePage() {
  return (
    <div>
      <div className="mainletter">
        <Header />
        <h3>
          당신을 위한, 당신에 의한 <br /> 맞춤형 러닝 코스 서비스
        </h3>
        <h1>RUNNINGHI</h1>
      </div>
      <div>
        <button type="submit" className="mapbtn">
          지도 보기
        </button>
      </div>
      <section className="post-section">
        <h2 className="line-title">러닝하이 추천코스</h2>
        <div className="owl-carousel custom-carousel owl-theme">
          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://gwanghwamun.seoul.go.kr/resources/client/images/contents/img_introduce_2.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>광화문 코스</h3>
              <p>서울의 - ...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/212032b1-f1a7-4909-8aee-49b25fb40ca5.jpeg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>한강 코스</h3>00
              <p>반포 한강공원을 기준으로...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://t4.ftcdn.net/jpg/04/41/28/39/360_F_441283928_x6wy8WX1Dnh4czUsxHgpXIqqztm939EV.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>서울숲 코스</h3>
              <p>햇살 가득한...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://www.cctimes.kr/news/photo/201704/486528_179235_2012.JPG
              )`,
            }}
          >
            <div className="item-desc">
              <h3>무심천 코스</h3>
              <p>청주의 ...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://img.hani.co.kr/imgdb/resize/2022/0902/166201400446_20220902.JPG
              )`,
            }}
          >
            <div className="item-desc">
              <h3>잠수교 코스</h3>
              <p>비가 오면 못 뛰는 그..</p>
            </div>
          </div>
        </div>
      </section>
      <section className="post-section">
        <h2 className="line-title">러너들의 추천코스</h2>
        <div className="owl-carousel custom-carousel owl-theme">
          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>오창호수공원 코스</h3>
              <p>진짜 오리들이 걸어다니는 공원을 본 적 있으신가요</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>오송호수공원 코스</h3>
              <p>오송은 정말 정말 좋은 곳이야. 서브웨이 바로 옆에 스타벅스</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/ec1918b1-2674-452c-bf61-8f73d8cc40c6/rdr2.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>방화수류정 코스</h3>
              <p>점심에 러피 사들고 방화수류정을 싹 걸어주면 얼마나 좋게요</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/6ba9052d-6105-4491-917b-e1a65b68f920/pubg.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>강문해변 코스</h3>
              <p>바다에 놀러왔다가 몸이 찌뿌둥해서 런닝을...</p>
            </div>
          </div>

          <div
            className="item"
            style={{
              backgroundImage: `url(
                https://ucarecdn.com/6ba9052d-6105-4491-917b-e1a65b68f920/pubg.jpg
              )`,
            }}
          >
            <div className="item-desc">
              <h3>기업지원허브 코스</h3>
              <p>밥 먹으러 가는 게 일이에요</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owl Carousel 초기화 */}
      <script>
        {`
        $(document).ready(function () {
          // Owl Carousel 초기화
          $(".custom-carousel").owlCarousel({
            autoWidth: true,
            loop: true,
          });

          $(".custom-carousel .item").click(function () {
            $(".custom-carousel .item").not($(this)).removeClass("active");
            $(this).toggleClass("active");
          });
        });
        `}
      </script>

      <Footer />
    </div>
  );
}

export default MainHomePage;
