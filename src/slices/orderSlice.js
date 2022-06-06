import { createSlice } from "@reduxjs/toolkit";

//createSlice 함수는 선언한 slice의 name에 따라서 액션 생성자, 액션 타입, 리듀서를 자동으로 생성해줍니다.
//따라서 별도로 createAction이나 createReducer를 사용하지 않아도 됩니다.

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    lists: [],
  },
  reducers: {
    //action에는 1.type : 'order/addLists', 2.payload : '음료 이름' <- 함수에서 전달한 값, addLists라는 함수를 사용할때
    //전달한 값
    //state : 모든 store 변수들이 들어있음.
    //store 변수는 initialState에서 초기값을 만들어줌
    addLists: (state, action) => {
      console.log(action.payload);
      state.lists = [...state.lists, action.payload];
    },
    deleteLists: (state, action) => {
      state.lists = [...state.lists].filter((e, idx) => idx !== action.payload);
    }
  },
});

export const { addLists, deleteLists } = orderSlice.actions;

export default orderSlice.reducer;
