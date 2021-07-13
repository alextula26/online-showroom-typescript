import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BrandType {
  id: number,
  name: string,
}

interface ModelType {
  body_type: string
  has_discounts: boolean
  has_shares: boolean
  id: number
  image: string
  is_hidden: boolean
  min_price: string
  name: string
}

interface InitialStateType {
  models: Array<ModelType>,
  brand: BrandType,
  loading: boolean,
}

const initialState: InitialStateType = {
  models: [],
  brand: {} as BrandType,
  loading: true,
}

const modelsSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {
    addhModels: (state, action: PayloadAction<InitialStateType>) => ({
      ...state,
      models: action.payload.models,
      brand: action.payload.brand,
    }),

    changeModelsLoader: (state, action: PayloadAction<InitialStateType>) => ({
      ...state,
      loading: action.payload.loading,
    }),
  },
});

export const { addhModels, changeModelsLoader } = modelsSlice.actions;

export default modelsSlice.reducer;