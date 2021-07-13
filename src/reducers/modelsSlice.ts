import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* interface InitialStateType {
  models: [],
  brand: {},
  loading: true,
} */

const initialState = {
  models: [],
  brand: {},
  loading: true,
}

const modelsSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {
    addhModels: (state, { payload }) => ({
      ...state,
      models: payload.models.items,
      brand: payload.models.brand,
    }),

    changeModelsLoader: (state, action: PayloadAction<any>) => ({
      ...state,
      loading: action.payload.loading,
    }),
  },
});

export const { addhModels, changeModelsLoader } = modelsSlice.actions;

export default modelsSlice.reducer;