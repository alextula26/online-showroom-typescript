import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandsType } from 'types';

const initialState = {
  brands: [] as Array<BrandsType>,
}

type InitialStateType = typeof initialState;

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    addBrands: (state, action: PayloadAction<InitialStateType>): InitialStateType => (
      { ...state, brands: action.payload.brands }
    ),
  },
});

export const { addBrands } = brandsSlice.actions;

export default brandsSlice.reducer;