import { createSlice } from "@reduxjs/toolkit";

//createSlice 함수는 선언한 slice의 name에 따라서 액션 생성자, 액션 타입, 리듀서를 자동으로 생성해줍니다.
//따라서 별도로 createAction이나 createReducer를 사용하지 않아도 됩니다.

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    isError: false,
  },
  reducers: {
    floatError: (state, action) => {
      state.isError = action.payload;
    }
  },
});

export const { floatError } = errorSlice.actions;

export default errorSlice.reducer;
