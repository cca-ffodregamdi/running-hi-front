import React from 'react';
import './SideBar.css'; 
import './SpoqaHanSansNeo.css'; 

function App() {
  return (
    <aside className="sideBar">
      <h1>
        안녕하세요 <br /> 러닝하이입니다.
      </h1>
      <ul>
        <li><a href="#">MY FEED</a></li>
        <li><a href="#">MY PAGE</a></li>
        <li><a href="#">러닝하이 추천코스</a></li>
        <li><a href="#">러너들의 추천코스</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </aside>
  );
}

export default App;