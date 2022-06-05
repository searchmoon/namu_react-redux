import { createSlice } from "@reduxjs/toolkit";

//createSlice 함수는 선언한 slice의 name에 따라서 액션 생성자, 액션 타입, 리듀서를 자동으로 생성해줍니다.
//따라서 별도로 createAction이나 createReducer를 사용하지 않아도 됩니다.

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    lists: [],
  },
  reducers: {
    //type : 'order/addLists', payload : '음료 이름' <- 함수에서 전달한 값, addLists라는 함수를 사용할때
    //전달한 값
    //state : store 변수가 들어있음.
    addLists: (state, action) => {
      console.log(action.payload);
      state.lists = [...state.lists, action.payload];
    },
  },
});

export const { addLists } = orderSlice.actions;

export default orderSlice.reducer;
