import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BrandType {
  id: number,
  logo: string,
  name: string,
  vehicles: number,
}

interface InitialStateType {
  brands: Array<BrandType>
}

const initialState = {
  brands: [],
} as InitialStateType;

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    addBrands: (state, action: PayloadAction<InitialStateType>) => ({ ...state, brands: action.payload.brands }),
  },
});

export const { addBrands } = brandsSlice.actions;

export default brandsSlice.reducer;