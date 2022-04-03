import React from "react";
import "./OrderListAndRequest.css";
import { Link } from "react-router-dom";

function OrderListAndRequest({ deleteBtn, addLists }) {
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
      <h2>요청사항</h2>
      <textarea
        className="requestArea"
        rows="6"
        placeholder="다른 필요한게 있으시면 적어주세요:)"
      ></textarea>
      <Link className="link" to="/order">주문</Link>
    </div>
  );
}

export default OrderListAndRequest;
