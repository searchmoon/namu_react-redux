import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addLists } from "../slices/orderSlice";
import { floatError } from "../slices/errorSlice";

function IceAndHot({ menu }) {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.error.isError);
  const onClick = (e) => {
    /* 
      디스패치라는 애는 액션 객체를 리듀서에 전달하는 역할을
      하는데 여기에서는 액션이 생략되어 있어서
      따로 우리가 선언하지는 않지만
      슬라이스라는 애를 생성할때 자동으로 액션 타입을
      만들어주는듯한 느낌. action.type = 'order/addLists'
    */
    dispatch(addLists(menu + " " + e.target.innerText));
    dispatch(floatError(false));
    console.log(isError);
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
  &:hover {
    color: white;
    background: ${(props) => props.color || "#3d94aa"};
  }
`;
const HotBtn = styled.button`
  color: #ec407a;
  border: 2px solid #ee5a8b;
  min-width: 70px;
  font-weight: 700;
  &:hover {
    color: white;
    background: ${(props) => props.color || "#ee5a8b"};
  }
`;

export default IceAndHot;
