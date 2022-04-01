import React from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  let [addLists, setAddLists] = useState([]);

  function deleteBtn(index) {
    const updatedTodos = addLists.filter((e, idx) => idx !== index);
    setAddLists(updatedTodos);
  }
  return (
    <div>
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
