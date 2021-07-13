import { takeEvery } from 'redux-saga/effects';
import * as TYPES from '../types';
import fetchBrands from './fetchBrands';
import fetchModels from './fetchModels';
import fetchNewVehicles from './fetchNewVehicles';
import fetchVehicle from './fetchVehicle';
import fetchTradeInVehicles from './fetchTradeInVehicles';
import fetchAllNewVehicles from './fetchAllNewVehicles';

export default function* sagaWatcher() {
  yield takeEvery(TYPES.REQUEST_BRANDS, fetchBrands);
  yield takeEvery(TYPES.REQUEST_MODELS, fetchModels);
  yield takeEvery(TYPES.REQUEST_NEW_VEHICLES, fetchNewVehicles);
  yield takeEvery(TYPES.REQUEST_NEW_VEHICLE, fetchVehicle);
  yield takeEvery(TYPES.REQUEST_TRADEIN_VEHICLES, fetchTradeInVehicles);
  yield takeEvery(TYPES.REQUEST_TRADEIN_VEHICLE, fetchVehicle);
  yield takeEvery(TYPES.REQUEST_ALL_NEW_VEHICLES, fetchAllNewVehicles);
}
