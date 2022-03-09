import React from 'react';
import { useState } from 'react';


function AddDrink(props) {
  let [drink, setDrink] = useState('');
 
  // const onClickList = (e) => {
  //   drink = setDrink(e.target.innerText);
  // }

  return (
    <div>
      <ul>
        <li>{drink}</li>
      </ul>
    </div> 
  )
}

export default AddDrink;