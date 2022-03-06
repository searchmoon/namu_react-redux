import React from 'react';
// import MainMenu from './MainMenu';
import Drink1 from './Drink1';
import Drink2 from './Drink2';

function Main() {
  // const repeatSortMenu = () => {
    // const sort = [
      // 'Coffee', 'Latte', 'Ade', 'Tea'
    // ]
    // for(let i = 0; i < sort.length; i++){
      // const p = document.createElement('p');
      // document.body.appendChild(p.sort[i]);
      // console.log(sort[i]);
    // }
  // }

  return (
    <div>
      <h1>MENU</h1>
      <Drink1 />
      <Drink2 />
      {/* <MainMenu repeat={repeatSortMenu}/> */}

    </div> 
  )
}
export default Main;