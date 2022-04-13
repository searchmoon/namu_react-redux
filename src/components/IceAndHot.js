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
    color: #3f51b5;
    border: 2px solid #3f51b5;
    min-width: 70px;
    &:hover{
      color: white;
      background: ${props => props.color || '#3f51b5' }
    }
  `
  const HotBtn = styled.button`
    color: #ec407a;
    border: 2px solid #ec407a;
    min-width: 70px;
    &:hover{
      color: white;
      background: ${props => props.color || '#ec407a' }
    }
  `

export default IceAndHot;