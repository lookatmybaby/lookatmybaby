import React, { useEffect, useState } from 'react';
import axios from 'axios';
import process from "process";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
/* 
npm i --save-dev @types/styled-components 
npm i styled-reset

npm install react-router react-router-dom
npm info "eslint-config-airbnb@latest" peerDependencies
npm install --save-dev --save-exact prettier
*/

const GlobalStyles = createGlobalStyle` 
${reset}

body{
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
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
      <div>
        백엔드에서 가져온 데이터입니다 : 
      </div>
    </>
  );
}

export default App;