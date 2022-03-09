import React from 'react';
import { useState } from 'react';
import AddDrink from './AddDrink';

function IceAndHot() {
  // let [drink, setDrink] = useState('');

  // const onClickList = (e) => {
  //   drink = setDrink(e.target.innerText);
  // }

  return (
    <div>
      <button>ICE</button>
      <button>HOT</button>
    </div> 
  )
}

export default IceAndHot;