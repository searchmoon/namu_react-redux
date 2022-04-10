import React from "react";
import styled from "styled-components";

function Drink2Menu({ drink3Menu, setAddLists }) {
  const onClick = (e) => {
    setAddLists((lists) => [...lists, e.target.innerText]);
  };

  const DivWrap = styled.div`
    /* width: 100vw; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    background-color: pink;
  `;

  const Div = styled.div`
    max-width: 1300px;
    /* width: 1300px; */
    background-color: skyblue;
    padding: 0 30px;
    /* margin: 0 auto; */
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* align-content: space-around; */
    /* justify-content: center; */
    @media screen and (min-width: 0px) and (max-width: 500px){
      padding: 0 3vw;
    }
  `;

  const Button = styled.button`
    min-width: 150px;
    width: 47%;
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
      width: 23%;
    }
  `;

  return (
    <DivWrap>
      <Div>
          {drink3Menu.map((menu, index) => (
            <Button key={index} onClick={onClick}>{menu}</Button>
          ))}
      </Div>
    </DivWrap>
  );
}

export default Drink2Menu;
