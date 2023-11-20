import React, { Component } from "react";
import { ReactComponent as Notfound } from "../../../../assets/img/notfound.svg";
import "../../../../assets/scss/pages/else/notFoundPage.scss";

const NotFoundPage = () => {
  return (
    <>
      <div className="notfoundpage">
        <div className="notfoundpage-container">
          <Notfound width="50" height="50" />
          <div className="notfound">
            NotFoundPage
            <br />
            원하시는 페이지를 찾을 수 없습니다.
          </div>
          <div className="notfoundText">
            찾으려는 페이지의 주소가 잘못 입력되었거나, <br />
            주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다. <br />
            불편을 드려 죄송합니다. <br /> <br />
            번거로우시겠지만, <br /> 입력하신 페이지의 주소가 정확한지 다시 한
            번 확인해주세요.
          </div>

          <div className="redirect">
            <a href="/">
              <button className="tohome">홈으로</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
