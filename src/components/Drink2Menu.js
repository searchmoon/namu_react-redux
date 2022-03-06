import React from 'react';

function Drink2Menu(props) {

    // const drink3Menu = ['복숭아 아이스티', '청포도 에이드', '레몬 에이드', '망고에이드', '샤인머스캣 에이드'];

    return (
        <div>
            {props.drink3Menu.map((menu) => 
                <button>{menu}</button>
            )}
        </div>
    )
}

export default Drink2Menu;