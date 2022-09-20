import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';


function App() {

  let [이름, 이름변경] = useState(['김아린', 'arinming']);

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <nav>
          <h1>봐라오케</h1>
          <button>악보 리스트</button>
          <button>악보 변환</button>
          <button>악보 등록하기</button>
          <button>로그아웃</button>
        </nav>
        
      </div>
      <div>
        <img
         scr={`${process.env.PUBLIC_URL}/public/img/balaok.png`}
         className='Web-logo'
         alt='React'></img>
      </div>
      <div className="list">
        <h3> { 이름[0] } </h3>
        <h3> { 이름[1] } </h3>
        <hr/>
      </div>
    </div>
  )


  function 함수(){
    return 100
  }

  
}

export default App;
