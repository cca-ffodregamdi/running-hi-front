import React from 'react';
import ReactDOM from 'react-dom';
import './Bookmarker.css'; 
import './SpoqaHanSansNeo.css'; 

function NotFoundPage() {
  return (
    <div className="normal-container">
      <div className="smile-rating-container">
        <div className="smile-rating-toggle-container">
          <form className="submit-rating">
            <input id="meh" name="satisfaction" type="radio" /> 
            <input id="fun" name="satisfaction" type="radio" /> 
            <label htmlFor="meh" className="rating-label rating-label-meh">해제</label>
            <div className="smile-rating-toggle"></div>
            
            <div className="rating-eye rating-eye-left"></div>
            <div className="rating-eye rating-eye-right"></div>
            
            <div className="mouth rating-eye-bad-mouth"></div>
            
            <div className="toggle-rating-pill"></div>
            <label htmlFor="fun" className="rating-label rating-label-fun">등록</label>
          </form>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NotFoundPage/>);
