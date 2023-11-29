import { useState } from "react";
import { Link } from "react-router-dom";
import { inquiryData } from "../customerSupportPage/data.js";
import "../../../../assets/scss/pages/else/customerSupportPage.scss";

function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showInquiry, setShowInquiry] = useState(false);
  const [showFAQ, setShowFAQ] = useState(true);
  const [selectedInquiryId, setSelectedInquiryId] = useState(null);

  const handleInquiryClick = () => {
    setSelectedCategory(null);
    setShowInquiry(true);
    setShowFAQ(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowFAQ(true);
    setShowInquiry(false);
  };

  const handleInquiryTitleClick = (id) => {
    setSelectedInquiryId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="FAQpage">
        {/* <div className="logo-container">
          <a className="logo-text" href="/">
            {" "}
            RUNNINGHI
          </a>
        </div> */}
        <div className="FAQpage-container">
          <div className="FAQpage-container2">
            <div className="FAQ">
              <a href="/">고객센터</a>
            </div>

            <div className="FAQ-category">
              <li
                className="FAQ-item1"
                onClick={() => handleCategoryClick("usage")}
              >
                FAQ
              </li>

              <li className="FAQ-item2" onClick={handleInquiryClick}>
                1:1 문의
              </li>
            </div>
          </div>
        </div>
        {showFAQ &&
          (selectedCategory === "usage" || selectedCategory === "usageAll") && (
            <div className="FAQ-details">
              <li
                className="FAQ-item FAQ-item1"
                onClick={() => handleCategoryClick("usageAll")}
              >
                전체
              </li>
              <li className="FAQ-item FAQ-item2">이용 문의</li>
              <li className="FAQ-item FAQ-item3">게시물 관련</li>
              <li className="FAQ-item FAQ-item4">코스 관련</li>
            </div>
          )}
        {showFAQ && selectedCategory === "usageAll" && (
          <div className="inquiry-list">
            {inquiryData.map((inquiry) => (
              <div
                key={inquiry.id}
                className={`inquiry-item ${
                  selectedInquiryId === inquiry.id ? "expanded" : ""
                }`}
                onClick={() => handleInquiryTitleClick(inquiry.id)}
              >
                <h3 className="inquiry-title">{inquiry.title}</h3>
                <div className="inquiry-content-wrapper">
                  {selectedInquiryId === inquiry.id && (
                    <div
                      className="inquiry-content"
                      dangerouslySetInnerHTML={{
                        __html: inquiry.content.replace(/\n/g, "<br>"),
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {showInquiry && (
          <div className="inquiry-form">
            <form>
              <label>
                <textarea
                  className="inquiry"
                  placeholder="문의내용을 입력해주세요.."
                  style={{ whiteSpace: "pre-wrap" }}
                ></textarea>
              </label>
              <input type="submit" value="문의 제출" />
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default FAQ;
