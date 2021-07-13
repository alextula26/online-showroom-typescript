import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandType, ModelsType, LoadingPayloadActionType, ModelsPayloadActionType } from 'types';

const initialState = {
  models: [] as Array<ModelsType>,
  brand: {} as BrandType,
  loading: true,
}

type InitialStateType = typeof initialState;

const modelsSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {
    addModels: (state, action: PayloadAction<ModelsPayloadActionType>): InitialStateType => ({
      ...state,
      models: action.payload.models,
      brand: action.payload.brand,
    }),

    changeModelsLoader: (state, action: PayloadAction<LoadingPayloadActionType>): InitialStateType => ({
      ...state,
      loading: action.payload.loading,
    }),
  },
});

export const { addModels, changeModelsLoader } = modelsSlice.actions;

export default modelsSlice.reducer;