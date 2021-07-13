import { call, put } from 'redux-saga/effects';
import { addTradeInVehicles, changeTradeInVehiclesLoader } from '../reducers/tradeInVehiclesSlice';
import CONST from '../utils/const';
import getVehicles from './vehicles';

export default function* fetchTradeInVehicles() {
  try {
    const tradeInVehicles = yield call(getVehicles, null, CONST.vehiclesTypes.tradeInVehicles, '');
    yield put(addTradeInVehicles({ tradeInVehicles }));
    yield put(changeTradeInVehiclesLoader({ loading: false }));
  } catch (e) {
    console.log('newVehicles saga', e);
    throw e;
  }
}
