import React from 'react';
import styled from "styled-components";

function IceAndHot({ setAddLists, menu }) {
  const onClick = (e) => {
    setAddLists((currentArray) => [
      ...currentArray,
      menu + " " + e.target.innerText,
    ]);
  };

  const Div = styled.div`
    display: flex;
  `
  const IceBtn = styled.button`
    color: blue;
    border: 1px solid blue;
    &:hover{
      color: white;
      background: ${props => props.color || 'blue' }
    }
  `
  const HotBtn = styled.button`
    color: red;
    border: 1px solid red;
    &:hover{
      color: white;
      background: ${props => props.color || 'red' }
    }
  `
  return (
    <Div>
      <IceBtn onClick={onClick}>ICE</IceBtn>
      <HotBtn onClick={onClick}>HOT</HotBtn>
    </Div>
  );
}

export default IceAndHot;