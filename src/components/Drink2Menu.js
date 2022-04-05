import React from 'react';
import styled from "styled-components";

function Drink2Menu({ drink3Menu, setAddLists }) {
    const onClick = (e) => {
      setAddLists((lists) => [...lists, e.target.innerText]);
    };
    return (
      <div>
        {drink3Menu.map((menu) => (
          <button onClick={onClick}>{menu}</button>
        ))}
      </div>
    );
  }

export default Drink2Menu;