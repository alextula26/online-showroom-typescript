import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehicleType } from 'types';

const initialState = {
  vehicle: {} as VehicleType
}

type InitialStateType = typeof initialState;

const newVehicleSlice = createSlice({
  name: 'newVehicle',
  initialState,
  reducers: {
    addNewVehicle: (state, action: PayloadAction<InitialStateType>): InitialStateType => ({
      ...state,
      vehicle: action.payload.vehicle,
    }),
  },
});

export const { addNewVehicle } = newVehicleSlice.actions;

export default newVehicleSlice.reducer;
