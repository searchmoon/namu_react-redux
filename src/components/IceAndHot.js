import React from 'react';
import styled from "styled-components";

function IceAndHot({ setAddLists, menu, setError }) {
  const onClick = (e) => {
    setAddLists((currentArray) => [
      ...currentArray,
      menu + " " + e.target.innerText,
    ]);
    setError(false);
  };

  return (
    <div>
      <IceBtn onClick={onClick}>ICE</IceBtn>
      <HotBtn onClick={onClick}>HOT</HotBtn>
    </div>
  );
}

  const IceBtn = styled.button`
    color: #257488;
    border: 2px solid #3d94aa;
    min-width: 70px;
    font-weight: 700;
    &:hover{
      color: white;
      background: ${props => props.color || '#3d94aa' }
    }
  `
  const HotBtn = styled.button`
    color: #ec407a;
    border: 2px solid #ee5a8b;
    min-width: 70px;
    font-weight: 700;
    &:hover{
      color: white;
      background: ${props => props.color || '#ee5a8b' }
    }
  `

export default IceAndHot;