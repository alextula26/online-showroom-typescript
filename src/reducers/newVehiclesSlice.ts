import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandType, ModelType, VehiclesType } from 'types';

interface InitialStateType {
  vehicles: Array<VehiclesType>,
  model: ModelType,
  brand: BrandType,
  loading: boolean,
}

const initialState: InitialStateType = {
  vehicles: [],
  model: {} as ModelType,
  brand: {} as BrandType,
  loading: true,
}

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
