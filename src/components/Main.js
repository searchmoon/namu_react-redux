import React from 'react';
import MainMenu from './MainMenu';

function Main() {
  const repeatSortMenu = () => {
    const sort = [
      'Coffee', 'Latte', 'Ade', 'Tea'
    ]
    for(let i = 0; i < sort.length; i++){
      // const p = document.createElement('p');
      // document.body.appendChild(p.sort[i]);
      console.log(sort[i]);
    }
  }

  return (
    <div>
      <h1>MENU</h1>
      <MainMenu repeat={repeatSortMenu}/>
    </div> 
  )
}
export default Main;