import React, { useEffect } from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

function App() {
  const Div = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: pink;
    position: absolute;
    &.disappear {
      display: none;
    }
  `;
  
  const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
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
    font-size: 25px;
    font-weight: 500;
    padding: 20px 0 10px 0;
    color: #333;
  }
  h3 {
    font-size: 20px;
    margin: 10px 0;
  }
  `;

  //첫 화면 1초 다른창 띄우기

  const merong = () => {
    console.log("메롱");
    Div.classList.add("disappear");
  };
  useEffect(() => {
    console.log("떳다.");
    // Div.classList.add("disappear");
    setTimeout(merong, 3000);
  });
  // const div = document.querySelector("div");

  // function disappear() {
  //   Div.classList.add("disappear");
  // }
  // setTimeout(disappear, 1000);
  return (
    <div>
      <GlobalStyle />
      <Div>
        <Header />
        <Main />
        <Footer />
      </Div>
    </div>
  );
}

export default App;
