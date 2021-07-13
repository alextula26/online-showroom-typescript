import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandType, ModelsType } from 'types';

interface InitialStateType {
  models: Array<ModelsType>,
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
    addhModels: (state, action: PayloadAction<InitialStateType>): InitialStateType => ({
      ...state,
      models: action.payload.models,
      brand: action.payload.brand,
    }),

    changeModelsLoader: (state, action: PayloadAction<InitialStateType>): InitialStateType => ({
      ...state,
      loading: action.payload.loading,
    }),
  },
});

export const { addhModels, changeModelsLoader } = modelsSlice.actions;

export default modelsSlice.reducer;