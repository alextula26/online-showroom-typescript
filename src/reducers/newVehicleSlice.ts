import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehicleType, VehiclePayloadActionType, LoadingPayloadActionType } from 'types';

const initialState = {
  vehicle: {} as VehicleType,
  loading: true,
}

type InitialStateType = typeof initialState;

const newVehicleSlice = createSlice({
  name: 'newVehicle',
  initialState,
  reducers: {
    addNewVehicle: (state, action: PayloadAction<VehiclePayloadActionType>): InitialStateType => ({
      ...state,
      vehicle: action.payload.vehicle,
    }),

    changeNewVehicleLoader: (state, action: PayloadAction<LoadingPayloadActionType>): InitialStateType => ({
      ...state,
      loading: action.payload.loading,
    }),    
  },
});

export const { addNewVehicle, changeNewVehicleLoader } = newVehicleSlice.actions;

export default newVehicleSlice.reducer;
