import React from 'react';

function Drink1Menu(props) {
    
    return (
        <div>
            <span>{props.drink1Menu}</span>
                <div>
                    <button>ICE</button>
                    <button>HOT</button>
                </div>
        </div> 
    )
}

export default Drink1Menu;