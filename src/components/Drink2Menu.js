import React from 'react';

function Drink2Menu(props) {
    return (
        <div>
            {props.drink3Menu.map((menu) => 
                <button>{menu}</button>
            )}
        </div>
    )
}

export default Drink2Menu;