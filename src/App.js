import React from 'react';
import './App.css';
import './reset.css';
import Header from './components/Header';
// import Main from './components/Main';
import Drink from './components/Drink';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Drink />
      <Footer />
    </div>
  );
}

export default App;