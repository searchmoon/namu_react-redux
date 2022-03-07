import React from 'react';
// import MainMenu from './MainMenu';
import Drink1 from './Drink1';
import Drink2 from './Drink2';
import AddDrink from './AddDrink';

function Main() {
  const btns = document.querySelectorAll('button');
  return (
    <div>
      <h1>MENU</h1>
      <Drink1 btns={btns}/>
      <Drink2 btns={btns}/>
      <AddDrink btns={btns}/>
    </div> 
  )
}
export default Main;