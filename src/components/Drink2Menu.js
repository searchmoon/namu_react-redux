import React from "react";
import styled from "styled-components";

function Drink2Menu({ drink3Menu, setAddLists, setError} ) {
  const onClick = (e) => {
    setAddLists((lists) => [...lists, e.target.innerText]);
    // setAddLists(e.target.innerText);
    setError(false);
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

const DivWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 100%;
  max-width: 1300px;
  padding: 0 30px;
  @media screen and (min-width: 0px) and (max-width: 690px) {
    padding: 0 3vw;
    grid-template-columns: 50% 50%;
  }
`;

const Button = styled.button`
  min-width: 150px;
  color: rgb(51, 107, 84);
  font-weight: 700;
  border: 2px solid #338569;
  :hover {
    font-weight: 700;
    color: #fff;
    background-color: #338569;
  }
  @media screen and (min-width: 800px) and (max-width: 100vw) {
    /* width: 20%; */
  }
`;

export default Drink2Menu;
