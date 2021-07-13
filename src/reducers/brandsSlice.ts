import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandsType } from 'types';

interface InitialStateType {
  brands: Array<BrandsType>
}

const initialState: InitialStateType = {
  brands: [],
}

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    addBrands: (state: InitialStateType, action: PayloadAction<InitialStateType>): InitialStateType => (
      { ...state, brands: action.payload.brands }
    ),
  },
});

export const { addBrands } = brandsSlice.actions;

export default brandsSlice.reducer;