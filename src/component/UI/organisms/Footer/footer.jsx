import React from "react";
import "../../../../../src/assets/scss/ui/organisms/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <i className="logo">RUNNINGHI</i>
      </div>

      <ul className="footer_list">
        <li className="footer_item">
          <a href="/" className="footer_link">
            FAQ
          </a>
        </li>
        <li className="footer_item">
          <a href="/" className="footer_link">
            이용약관
          </a>
        </li>

        <li className="footer_item">
          <a href="/termsofservice" className="footer_link">
            개인정보 처리방침
          </a>
        </li>

        <li className="footer_item">
          <a href="/customersupport" className="footer_link">
            About
          </a>
        </li>
        <li className="footer_item">
          <a href="/customerfeedback" className="footer_link">
            Contact Us
          </a>
        </li>
      </ul>

      <div className="footer-bottom">
        <span> RUNNINGHI All Right Reserved Copyright &copy;2023 </span>
        <span>
          Designed by <span className="designer">CCA-FFODREGAMDI</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
