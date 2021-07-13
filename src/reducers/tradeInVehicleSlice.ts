import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingPayloadActionType, TradeInVehiclePayloadActionType, VehicleType } from 'types';

const initialState = {
  vehicle: {} as VehicleType,
  loading: true,
}

type InitialStateType = typeof initialState;

const tradeInVehicleSlice = createSlice({
  name: 'tradeInVehicle',
  initialState,
  reducers: {
    addTradeInVehicle: (state, action: PayloadAction<TradeInVehiclePayloadActionType>): InitialStateType => ({
      ...state,
      vehicle: action.payload.vehicle,
    }),

    changeTradeInVehicleLoader: (state, action: PayloadAction<LoadingPayloadActionType>): InitialStateType => ({
      ...state,
      loading: action.payload.loading,
    }),        
  },
});

export const { addTradeInVehicle, changeTradeInVehicleLoader } = tradeInVehicleSlice.actions;

export default tradeInVehicleSlice.reducer;
