import React, { useEffect, useState } from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {
  CtDisabledBtn,
  CtEnabledBtn,
  SaveDisabledBtn,
} from "../elements/Button";
import { SmallCategory } from "./../elements/Button";
import Header from "../components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* 
npm i --save-dev @types/styled-components 
npm i styled-reset

npm install react-router react-router-dom
*/

const GlobalStyles = createGlobalStyle` 
${reset}

body{
  font-family: Pretendard;
  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  background-color: #fff;
  height: 100vh;
  overflow-x: hidden;
}

*{
  box-sizing: border-box;
}

a{
  text-decoration: none;
  color: inherit;
}

&.hide {
  display: none;
} 

&.sr-only {
position: absolute;
clip: rect(0,0,0,0);
width: 1px;
height: 1px;
margin: -1px;
overflow:hidden;
}
&.btn-base {
  border: none;
  cursor: pointer;
}
&.hidden {
  display: none;
}
&.block {
  display: block;
}
`;

const App = () => {
  // const [hello, setHello] = useState('');

  // useEffect(() => {
  //     axios.get('/api/hello')
  //     .then(response => setHello(response.data))
  //     .catch(error => console.log(error))
  // }, []);
  return (
    <>
      <GlobalStyles />
      <br></br>
      <CtEnabledBtn>#전체</CtEnabledBtn>
      <CtDisabledBtn>#고양이</CtDisabledBtn>
      <SmallCategory>#강아지</SmallCategory>
      <SaveDisabledBtn />
      <br></br>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/post" element={<div>여기는 게시글 작성</div>} />
          <Route path="/mypage/{id}" element={<div>여기는 마이페이지 </div>} />
          <Route path="/call" element={<div>여기는 문의 </div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
