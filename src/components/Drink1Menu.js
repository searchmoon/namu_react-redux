import React from "react";
import IceAndHot from './IceAndHot';

function Drink1Menu(props) {
    const iceAndHot = ['ICE', 'HOT'];
  return (
    <div>
      {props.drink1Menu.map((menu) =>
        <div>
            {menu}<IceAndHot iceAndHot={iceAndHot}/>
        </div>
      )}
      
    </div>
  );
}

export default Drink1Menu;
