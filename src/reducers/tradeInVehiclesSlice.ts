import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehiclesType } from 'types';

const initialState = {
  tradeInVehicles: [] as Array<VehiclesType>,
  loading: true,
}

type InitialStateType = typeof initialState;

const tradeInVehiclesSlice = createSlice({
  name: 'tradeInVehicles',
  initialState,
  reducers: {
    addTradeInVehicles: (state, action: PayloadAction<InitialStateType>): InitialStateType => ({
      ...state,
      tradeInVehicles: action.payload.tradeInVehicles,
    }),
    changeTradeInVehiclesLoader: (state, action: PayloadAction<InitialStateType>): InitialStateType => ({
      ...state,
      loading: action.payload.loading,
    }),
  },
});

export const { addTradeInVehicles, changeTradeInVehiclesLoader } = tradeInVehiclesSlice.actions;

export default tradeInVehiclesSlice.reducer;
