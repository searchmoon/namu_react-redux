import React from "react";
import IceAndHot from './IceAndHot';

function Drink1Menu({ drink1Menu, setAddLists }) {
  return (
    <div>
      {drink1Menu.map((menu) => (
        <div>
          {menu}
          <IceAndHot menu={menu} setAddLists={setAddLists} />
        </div>
      ))}
    </div>
  );
}

export default Drink1Menu;
