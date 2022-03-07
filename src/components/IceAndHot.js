import React from 'react';

function IceAndHot(props) {
  return (
    <div>
      <button>{props.iceAndHot[0]}</button>
      <button>{props.iceAndHot[1]}</button>
    </div> 
  )
}

export default IceAndHot;