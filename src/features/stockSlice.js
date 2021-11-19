import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: "01",
  companyName: "tesla",
};

export const stockSlice = createSlice({
  name: 'companyStock',

  initialState,
 
  reducers: {
    changeCompany: (state, action) => {
      state.id = action.payload.id;
      state.companyName = action.payload.name;
    },
    
  }
});

export const { changeCompany } = stockSlice.actions;

export const selectId = (state) => state.companyStock.id;
export const selectName = (state) => state.companyStock.companyName;

export default stockSlice.reducer;