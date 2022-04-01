import React from 'react';
import Drink1 from './Drink1';
import Drink2 from './Drink2';
import AddDrink from './AddDrink';

function Main({ deleteBtn, addLists, setAddLists }) {
  return (
    <div>
      <h1>MENU</h1>
      <Drink1 setAddLists={setAddLists} />
      <Drink2 setAddLists={setAddLists} />
      <AddDrink addLists={addLists} deleteBtn={deleteBtn} />
    </div> 
  )
}
export default Main;