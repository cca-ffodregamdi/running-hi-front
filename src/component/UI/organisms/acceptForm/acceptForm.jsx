import React, { useState } from "react";
import "../../../../assets/scss/ui/organisms/acceptForm.scss";

function AcceptForm() {
  const [terms, setTerms] = useState({
    serviceTerm: false,
    privacyTerm: false,
    serviceTerm: false,
    allTerms: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;

    setTerms((prevTerms) => ({
      ...prevTerms,
      [name]: checked,
      allTerms: checked
        ? (prevTerms.serviceTerm &&
            prevTerms.privacyTerm &&
            name !== "allTerms") ||
          prevTerms.allTerms
        : false,
    }));
  };

  const handleAllChange = (event) => {
    const { checked } = event.target;
    setTerms({
      allTerms: checked,
      serviceTerm: checked,
      privacyTerm: checked,
      serviceTerm: checked,
    });
  };

  return (
    <div className="group-checkbox">
      <label>
        <input
          type="checkbox"
          name="allTerms"
          checked={terms.allTerms}
          onChange={handleAllChange}
        />
        모든 약관 동의
      </label>

      <div className="necessary-accept">
        <label>
          <input
            type="checkbox"
            name="serviceTerm"
            checked={terms.serviceTerm}
            onChange={handleChange}
          />
          서비스 이용약관에 동의합니다 (필수)
        </label>

        <label>
          <input
            type="checkbox"
            name="privacyTerm"
            checked={terms.privacyTerm}
            onChange={handleChange}
          />
          개인정보 수집 및 이용에 동의합니다 (필수)
        </label>

        <label>
          <input
            type="checkbox"
            name="marketingTerms"
            checked={terms.marketingTerms}
            onChange={handleChange}
          />
          마케팅 정보 수신에 동의합니다 (선택)
        </label>
      </div>

      <div className="signup-btn">
        <a href="/signup">
          <button disabled={!terms.serviceTerm || !terms.privacyTerm}>
            회원가입 하러가기
          </button>
        </a>
      </div>
    </div>
  );
}

export default AcceptForm;
