import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import axios from "axios";

function OrderListAndRequest({
  addLists,
  setAddLists,
  error,
  setError,
  request,
  setRequest,
  room
}) {
  //iceandhot컴포넌트의 ice와 hot의 버튼을 클릭했을 때,
  //adddrink에 li에 그 btn의 innertext를 넣어줌
  function deleteBtn(index) {
    const updateLists = addLists.filter((e, idx) => idx !== index);
    setAddLists(updateLists);
  }
  const onTextChange = (e) => {
    setRequest(() => e.target.value);
  };

  const reqData = {
    "order_list": `${addLists.join("\n")}\n\n요청사항)\n${request}`,
    "room": room
}
  const onOrderLists = () => {
    axios.post(
      "https://4nvkgjw4ie.execute-api.ap-northeast-2.amazonaws.com/default/namuMessageFunction", 
      reqData,
      {headers: {'Content-Type': 'text/plain'}}
  ).then((response) => {console.log(response)})
    .catch((error) => {console.log(error)});
  };

  //onClick 함수를 실행했을 때 floatError가 동작을 하면서
  //상태변수인 error 값이 0 이라면 Error 메세지가 뜨게 하는거
  const floatError = (e) => {
    setError(true);
  };
  return (
    <Div>
      <h2>주문목록</h2>
      <OrderListDiv>
        <ul>
          {addLists.map((list, index) => (
            <Li style={{ fontWeight: 700, color: "#666" }} key={index}>
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
        onChange={onTextChange}
        rows="5"
        placeholder="다른 필요한게 있으시면 적어주세요:)"
        value={request}
      ></TextArea>
      {console.log(error)}
      {error && <Error>* 주문이나 요청사항을 입력해 주세요.*</Error>}
      {addLists.length || request.length > 0 ? (
        <OrderButton onClick={onOrderLists}>
          <Link
            style={{
              textDecoration: "none",
              color: "#777",
            }}
            to="/completeOrder"
          >
            주문
          </Link>
        </OrderButton>
      ) : (
        <OrderButton onClick={floatError} style={{ color: "#777" }}>
          주문
        </OrderButton>
      )}
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
  ::placeholder {
    color: #bbb;
  }
`;
const Error = styled.p`
  color: red;
  margin-top: 10px;
`;
const OrderButton = styled.button`
  border: 2px solid #bbb;
  padding: 9px 13px;
  font-weight: 700;
  margin: 10px 0 30px 0;
`;

export default OrderListAndRequest;
