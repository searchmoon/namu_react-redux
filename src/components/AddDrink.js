import React from 'react';


function AddDrink({ deleteBtn, addLists }) {
  //iceandhot컴포넌트의 ice와 hot의 버튼을 클릭했을 때,
  //adddrink에 li에 그 btn의 innertext를 넣어줌
  function clickDeleteBtn(index) {
    deleteBtn(index);
  }

  return (
    <div>
      <h2>주문목록</h2>
      {console.log(addLists)}
      <ul>
        {addLists.map((list, index) => (
          <li>
            {list}
            {<button onClick={() => clickDeleteBtn(index)}>x</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddDrink;