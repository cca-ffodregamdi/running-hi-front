import React from "react";
import "./footer.css";

export const Footer = ({ className, overlapGroupClassName }) => {
  return (
    <div className={`footer ${className}`}>
      <div className={`overlap-group-3 ${overlapGroupClassName}`}>
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-5">RUNNINGHI</div>

        <div className="text-wrapper-6">상호&nbsp;&nbsp;| 까 뽀드레감디</div>
        <div className="text-wrapper-7">주소 | 경기도 성남시</div>
        <div className="element">연락처 |&nbsp;&nbsp;000 1234 5678</div>
        <div className="text-wrapper-8">이메일 | ccaffodrecamdi@gmail.com</div>

        <div className="right">
          <div className="text-wrapper-9">FAQ</div>
          <div className="text-wrapper-10">이용약관</div>
          <div className="text-wrapper-11">개인정보 처리방침</div>
          <div className="text-wrapper-12">About RunningHi</div>
          <div className="text-wrapper-13">REVIEW | 문의사항</div>
        </div>

        <p className="RUNNINGHI-all-right">
          <span className="span">러닝하이 RUNNINGHI </span>
          <span className="text-wrapper-14">All Right Reserved</span>
        </p>
        <p className="designed-by">
          <span className="text-wrapper-14">Designed By </span>
          <span className="text-wrapper-15">CCAFFODRECAMDI</span>
        </p>
        <img
          className="icon-address-card"
          alt="Icon address card"
          src="https://cdn.animaapp.com/projects/651bfffff9a14358465c749b/releases/651c0063285b9b4850a8415c/img/---icon--address-card-@2x.png"
        />
        <img
          className="icon-map"
          alt="Icon map"
          src="https://cdn.animaapp.com/projects/651bfffff9a14358465c749b/releases/651c0063285b9b4850a8415c/img/---icon--map-@2x.png"
        />
        <img
          className="icon-phone"
          alt="Icon phone"
          src="https://cdn.animaapp.com/projects/651bfffff9a14358465c749b/releases/651c0063285b9b4850a8415c/img/---icon--phone-@2x.png"
        />
        <img
          className="icon-at"
          alt="Icon at"
          src="https://cdn.animaapp.com/projects/651bfffff9a14358465c749b/releases/651c0063285b9b4850a8415c/img/---icon--at-@2x.png"
        />
      </div>
    </div>
  );
};
