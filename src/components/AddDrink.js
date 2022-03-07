import React from 'react';

function AddDrink(props) {
  const [drink, setDrink] = React.useState('');
  // props.btn.addEventLisetener((click) => {
  //   setDrink(drink);
  // })
  // props.btns.forEach(e => {
  //   console.log(e.target.value);
  // });
  // props.button.onClick={onClickList};
  const onClickList = (e) => {
    drink = setDrink(e.target.innerText);
  }
  return (
    <div>
      <ul>
        <li>{drink}</li>
        <button onClick={onClickList}>나는버튼</button>
      </ul>
    </div> 
  )
}

export default AddDrink;