import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import Splash from "./components/Splash";
import reset from "styled-reset";

function App() {
  const [main, setMain] = useState(false);
  let { room } = useParams();

  useEffect(() => {
    setTimeout(() => setMain(true), 1000);
  }, []);

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
