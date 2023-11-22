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
    setShowInquiry(true);
    setShowFAQ(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowFAQ(true);
    setShowInquiry(false);
  };

  const handleInquiryTitleClick = (id) => {
    setSelectedInquiryId((prev) => {
      if (prev === id) {
        return null;
      } else {
        return id;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 문의 내용을 처리하는 로직
  };

  return (
    <>
      <div className="FAQpage">
        <div className="FAQpage-container">
          <div className="FAQpage-container2">
            <div className="FAQ">
              <Link to="/customersupport">고객센터</Link>
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
                onClick={() => handleInquiryTitleClick(inquiry.id)}
              >
                <h3 className="inquiry-title">{inquiry.title}</h3>
                {selectedInquiryId === inquiry.id && (
                  <p className="inquiry-content">{inquiry.content}</p>
                )}
              </div>
            ))}
          </div>
        )}
        {showInquiry && (
          <div className="inquiry-form">
            <form onSubmit={handleSubmit}>
              <label>
                <textarea
                  className="inquiry"
                  placeholder="문의내용을 입력해주세요.."
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
