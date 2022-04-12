import React from "react";
import styled from "styled-components";

const DivWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background-color: pink;
`;

const Div = styled.div`

display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 100%;
  max-width: 1300px;
  /* width: 1300px; */
  background-color: skyblue;
  padding: 0 30px;
  /* margin: 0 auto; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* align-content: space-around; */
  /* justify-content: flex-start; */
  @media screen and (min-width: 0px) and (max-width: 690px) {
    padding: 0 3vw;
    grid-template-columns: 50% 50%;
  }
`;

const Button = styled.button`
  min-width: 150px;
  /* width: 43%; */
  color: rgb(51, 107, 84);
  font-weight: 700;
  border: 2px solid rgb(56, 141, 113);
  :hover {
    font-weight: 700;
    color: #fff;
    background-color: rgb(56, 141, 113);
  }
  /* margin: 5px auto; */
  /* text-align: center; */
  @media screen and (min-width: 800px) and (max-width: 100vw) {
    /* width: 20%; */
  }
`;

function Drink2Menu({ drink3Menu, setAddLists }) {
  // useState에서 동작하는 set함수는 함수 안에서 바로 셋팅이 되지 않아서 
  // 바로 사용할 수는 없다. 왜냐하면 set함수는 모아서 랜더링이 될 때
  // 한번에 셋팅을 해주기 때문
  const onClick = (e) => {
    setAddLists((lists) => [...lists, e.target.innerText]);
  };

  return (
    <DivWrap>
      <Div>
        {drink3Menu.map((menu, index) => (
          <Button key={index} onClick={onClick}>
            {menu}
          </Button>
        ))}
      </Div>
    </DivWrap>
  );
}

export default Drink2Menu;
