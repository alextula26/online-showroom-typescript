import { call, put } from 'redux-saga/effects';
import CONST from '../utils/const';
import { addNewVehicle, changeNewVehicleLoader } from '../reducers/newVehicleSlice';
import { addTradeInVehicle, changeTradeInVehicleLoader } from '../reducers/tradeInVehicleSlice';
import API from '../api';

export default function* fetchVehicle({ payload }) {
  const mappingTypeVehicles = {
    [CONST.vehiclesTypes.newVehicles]: (vehicle) => (
      put(addNewVehicle({ vehicle }))
    ),
    [CONST.vehiclesTypes.tradeInVehicles]: (vehicle) => (
      put(addTradeInVehicle({ vehicle }))
    ),
  };

  const mappingTypeLoaddingVehicles = {
    [CONST.vehiclesTypes.newVehicles]: () => (
      put(changeNewVehicleLoader({ loading: false }))
    ),
    [CONST.vehiclesTypes.tradeInVehicles]: (vehicle) => (
      put(changeTradeInVehicleLoader({ loading: false }))
    ),
  };  

  try {
    const vehicle = yield call(API.getVehicle, payload.vehicleId);
    yield mappingTypeVehicles[payload.typeVehicles](vehicle);
    yield mappingTypeLoaddingVehicles[payload.typeVehicles]();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
