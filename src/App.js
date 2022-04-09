import React from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


function App() {
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

  let [addLists, setAddLists] = useState([]);

  function deleteBtn(index) {
    const updatedTodos = addLists.filter((e, idx) => idx !== index);
    setAddLists(updatedTodos);
  }
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main
        deleteBtn={deleteBtn}
        addLists={addLists}
        setAddLists={setAddLists}
      />
      <Footer />
    </div>
  );
}

export default App;
