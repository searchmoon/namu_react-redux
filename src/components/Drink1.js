import React from 'react';
import Drink1Menu from './Drink1Menu';
import styled from "styled-components";

    const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

function Drink1({setAddLists}) {
    const drink1Menu = ['아메리카노', '바닐라 라떼', '카페 라떼', '카페모카' ];
    const drink2Menu = ['초코 라떼', '말차 라떼' ];
    const Categories = ['Coffee', 'Latte', 'Ade', 'Tea'];

    return (
        <Div className="drink-list">
            <h3>{Categories[0]}</h3>
            <Drink1Menu setAddLists={setAddLists} drink1Menu={drink1Menu}/>
            <h3>{Categories[1]}</h3>
            <Drink1Menu setAddLists={setAddLists} drink1Menu={drink2Menu}/>
        </Div>
    )
}

export default Drink1; 