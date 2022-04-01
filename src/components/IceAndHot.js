import React from 'react';

function IceAndHot({ setAddLists, menu }) {
  const onClick = (e) => {
    setAddLists((currentArray) => [
      ...currentArray,
      menu + " " + e.target.innerText,
    ]);
  };

  return (
    <div>
      <button onClick={onClick}>ICE</button>
      <button onClick={onClick}>HOT</button>
    </div>
  );
}

export default IceAndHot;