import React from 'react';
import styled from "styled-components";

function Drink2Menu({ drink3Menu, setAddLists }) {
    const onClick = (e) => {
      setAddLists((lists) => [...lists, e.target.innerText]);
    };

    const Button = styled.button`
      width: 35%;
      min-width: 150px;
    `
    return (
      <div>
        {drink3Menu.map((menu) => (
          <Button onClick={onClick}>{menu}</Button>
        ))}
      </div>
    );
  }

export default Drink2Menu;