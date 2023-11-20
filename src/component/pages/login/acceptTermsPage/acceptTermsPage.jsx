import React from "react";
import { ReactComponent as Ingbar01 } from "../../../../assets/img/ingbar01.svg";
import AcceptForm from "../../../UI/organisms/acceptForm/acceptForm";
import acceptTermsPage from "../../../../assets/scss/pages/login/acceptTermsPage.scss";

function AcceptTermsPage() {
  return (
    <div className="acceptTermsPage">
      <div className="accept-container">
        {/* <Ingbar01 width="850" height="15" /> */}
        <div className="accept-form-comtainer">
          <div className="accept-logoname">
            {" "}
            <a href="/"> RUNNINGHI </a>
          </div>
          <div className="accept-name"> 회원가입 약관 동의 </div>
          <hr />
          <div className="accept-Description">
            {" "}
            여러분 환영합니다, <br /> 서비스 이용을 위해 아래의 약관에
            동의해주세요.{" "}
          </div>

          {/* 
          1. 모두 동의
          2. 필수 (이용약관동의 - 개인정보 수집 및 이용 동의)
          3. 선택 (마케팅 활용 동의 및 광고 수신 동의)  
          4. 취소 / 가입하기
          */}
          <AcceptForm />
        </div>
      </div>
    </div>
  );
}

export default AcceptTermsPage;
