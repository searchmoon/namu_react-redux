import React from "react";
import IceAndHot from './IceAndHot';

function Drink1Menu(props) {
  return (
    <div>
      {props.drink1Menu.map((menu) =>
        <div>
            {menu}<IceAndHot />
        </div>
      )}
      
    </div>
  );
}

export default Drink1Menu;
