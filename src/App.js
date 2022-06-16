import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import Splash from "./pages/Splash";
import reset from "styled-reset";

function App() {
  const [main, setMain] = useState(false);
  let { room } = useParams();

  useEffect(() => {
    setTimeout(() => setMain(true), 1000);
  }, []);
  //useEffect
  //두번째 인자에 [] 이 빈 배열이 들어가면 component가 mount 됐을 때에만 실행된다(처음 나타났을 때)
  //두번째 인자에 값이 없으면 리렌더링 될 때 마다 실행한다.
  
  return (
    <div>
      <GlobalStyle />
      {main ? (
        <>
          <Header room={room} />
          <Main room={room} />
          <Footer />
        </>
      ) : (
        <Splash />
      )}
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    font-family: 'Urbanist','Noto Sans KR', 'Roboto', sans-serif; 
  }
  body {
    font-family: 'Urbanist','Noto Sans KR', 'Roboto', sans-serif; 
  }
  button {
    color: #333;
    border: 1px solid #333;
    border-radius: 10px;
    padding: 10px 10px;
    margin: 5px 5px;
    font-size: 14px;
    background-color: #fff;
    :hover {
    cursor: pointer;
    }
  }
  h1 {
    font-weight: 400;
    font-size:20px;
  }
  h2 {
    display: flex;
    justify-content: center;
    font-size: 23px;
    font-weight: 500;
    padding: 20px 0 10px 0;
    color: #333;
  }
  h3 {
    font-size: 18px;
    margin: 10px 0;
  }
  `;

export default App;
