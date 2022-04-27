import React from "react";
import styled from "styled-components";

function AdeAndTeaMenu({ drink2Menu, setAddLists, setError, isAde }) {
  const onClick = (e) => {
    setAddLists((lists) => [...lists, e.target.innerText]);
    setError(false);
  };
  
  return (
    <DivWrap>
      <Div>
        {drink2Menu.map((menu, index) => (
          <Button key={index} onClick={onClick} isAde={isAde}>
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
  gap: 2px;
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
  color: ${props => props.isAde ? '#257488' : '#ec407a'};
  font-weight: 700;
  border: 2px solid ${props => props.isAde ? '#3d94aa' : '#ee5a8b'};
  :hover {
    font-weight: 700;
    color: #fff;
    background-color: ${props => props.isAde ? '#3d94aa' : '#ee5a8b'};
  }
  @media screen and (min-width: 800px) and (max-width: 100vw) {
    /* width: 20%; */
  }
`;

export default AdeAndTeaMenu;
