import React from "react";
import Header from "../../../UI/organisms/Header/header";
import "../../../../assets/scss/pages/else/contactUs.scss";

function ContactUs() {
  return (
    <>
      {/* <Header /> */}
      <div className="ContactUsPage">
        <div className="ContactUs-container">
          <div className="ContactUs-container2">
            <div className="ContactUs"> Contact US </div>
          </div>
          {/* <div className="info-address">오시는 길</div>
          <div className="info-email">이메일</div> */}
        </div>
      </div>
    </>
  );
}

export default ContactUs;
