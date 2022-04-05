import React from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


function App() {
  const GlobalStyle = createGlobalStyle`
  ${reset};
  button {
    color: #333;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px 10px;
    background-color: #fff;
  }
  button:hover {
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
  `

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
