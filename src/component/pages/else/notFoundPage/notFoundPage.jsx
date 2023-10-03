import React from 'react';
import './notFoundPage.css'; 
import './SpoqaHanSansNeo.css';

function NotFoundPage() {
  return (
    <main className="bsod container">
      <h1 className="neg title"><span className="bg">Error - 404</span></h1>
      <p>An error has occurred, to continue:</p>
      <p>* Return to our homepage.<br />
      * Send us an e-mail about this error and try later.</p>
      <nav className="nav">
        <a href="#" className="link">go to homepage</a>&nbsp;|&nbsp;<a href="#" className="link">Q & A</a>
      </nav>
    </main>
  );
}

export default NotFoundPage;
