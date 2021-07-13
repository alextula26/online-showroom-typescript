import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandType, ModelType, VehiclesType } from 'types';

const initialState = {
  vehicles: [] as Array<VehiclesType>,
  model: {} as ModelType,
  brand: {} as BrandType,
  loading: true,
}

type InitialStateType = typeof initialState;

const newVehiclesSlice = createSlice({
  name: 'newVehicles',
  initialState,
  reducers: {
    addNewVehicles: (state, action: PayloadAction<InitialStateType>): InitialStateType => ({
      ...state,
      vehicles: action.payload.vehicles,
      model: action.payload.model,
      brand: action.payload.brand,
    }),

    changeVehiclesLoader: (state, action: PayloadAction<InitialStateType>): InitialStateType => ({
      ...state,
      loading: action.payload.loading,
    }),
  },
});

export const { addNewVehicles, changeVehiclesLoader } = newVehiclesSlice.actions;

export default newVehiclesSlice.reducer;
