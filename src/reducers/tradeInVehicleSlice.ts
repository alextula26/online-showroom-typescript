import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehicleType } from 'types';

const initialState = {
  vehicle: {} as VehicleType
}

type InitialStateType = typeof initialState;

const tradeInVehicleSlice = createSlice({
  name: 'tradeInVehicle',
  initialState,
  reducers: {
    addTradeInVehicle: (state, action: PayloadAction<InitialStateType>): InitialStateType => ({
      ...state,
      vehicle: action.payload.vehicle,
    }),
  },
});

export const { addTradeInVehicle } = tradeInVehicleSlice.actions;

export default tradeInVehicleSlice.reducer;
