import React from 'react';

function Drink2Menu(props) {
    return (
        <div>
            {props.drink3Menu.map((menu, index) => 
                <button key={index}>{menu}</button>
            )}
        </div>
    )

}

export default Drink2Menu;