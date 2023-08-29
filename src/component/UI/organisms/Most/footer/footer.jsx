import React from 'react';

const Footer = () => { 
  return (
    <footer>
      <div className="footer-content">

        <div className="footer-nav">
          <h2>RunningHI</h2>
          <a href=""></a>
          <hr />
          <h5>러닝하이를 찾아주셔서 감사합니다.<br /> 더 나은 서비스를 위해 노력하겠습니다.</h5>
        </div>

        <div className="footer-nav2">
          <hr />
        </div>

        <nav className="footer-left">
          <h3>러닝하이</h3>
          <p>상호명  | 까 뽀드레감디 </p>
          <p>주소  | 경기도 성남시  </p>
          <p>연락처 |  000 1234 5678</p>
          <p>이메일 | ccaffodrecamdi@gmail.com</p>
        </nav>

        <nav className="footer-right">
          <div>
            <h3>고객서비스</h3>
            <a href="/FAQ">FAQ</a>
            <a href="/TermsofService">이용약관</a>
            <a href="/">개인정보 처리방침</a>
            {/* <a href="/about">About RunningHI</a> */}
            <a href="/CustomorFeedBack">문의사항</a>
          </div>
        </nav>

        <nav className="footer-right2">
          <h3>SNS</h3>
          <div>
            <p>instagram</p>
            <p>Blog</p>
            <p>KaKaoService</p>
          </div>
        </nav>

        {/* <div>
          <nav className="footer-bottom">
            <span className="block-elements">
              <p>러닝하이 RUNNINGHI All Right Reserved</p>
              <p>Designed By CCAFFODRECAMDI</p>
            </span>
          </nav>
        </div> */}

      </div>
    </footer>
  );
}

export default Footer;
