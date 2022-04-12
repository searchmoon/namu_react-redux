import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

function OrderListAndRequest({ addLists, setAddLists }) {
  //iceandhot컴포넌트의 ice와 hot의 버튼을 클릭했을 때,
  //adddrink에 li에 그 btn의 innertext를 넣어줌
  function deleteBtn(index) {
    const updateLists = addLists.filter((e, idx) => idx !== index);
    setAddLists(updateLists);
  }

  return (
    <Div>
      <h2>주문목록</h2>
      <OrderListDiv>
        <ul>
          {addLists.map((list, index) => (
            <Li key={index}>
              {list}
              {
                <Button onClick={() => deleteBtn(index)}>
                  <GrClose />
                </Button>
              }
            </Li>
          ))}
        </ul>
      </OrderListDiv>
      <h2>요청사항</h2>
      <TextArea
        rows="7"
        placeholder="다른 필요한게 있으시면 적어주세요:)"
      ></TextArea>

      <OrderButton>
        <Link
          style={{
            textDecoration: "none",
            color: "#777",
          }}
          to="/order"
        >
          주문
        </Link>
      </OrderButton>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  padding: 10px;
  height: 35px;
  border: none;
  font-weight: 700;
  border-radius: 50%;
  :hover {
    background-color: rgb(218, 231, 226);
  }
`;
const OrderListDiv = styled.div`
  width: 80vw;
  min-height: 120px;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
  border: 2px solid #bbb;
`;
const Li = styled.li`
  list-style: inside;
`;
const TextArea = styled.textarea`
  border-radius: 15px;
  border: 2px solid #bbb;
  resize: none;
  width: 80vw;
  padding: 10px;
  font-size: 18px;
`;
const OrderButton = styled.button`
  border: 2px solid #bbb;
  padding: 9px 13px;
  font-weight: 700;
  margin: 10px 0 30px 0;
`;

export default OrderListAndRequest;
