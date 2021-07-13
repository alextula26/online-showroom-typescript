import { call, put } from 'redux-saga/effects';
import { addNewVehicles, changeVehiclesLoader } from '../reducers/newVehiclesSlice';
import { addFilterItems } from '../reducers/filtersSlice';
import API from '../api';
import CONST from '../utils/const';
import {
  getLisFilterItems, getColorsListFilter, getMinPrice, getMaxPrice,
} from '../utils';
import getVehicles from './vehicles';
import * as TYPES from '../types';

/* interface VehiclesPayloadType {
  modelId: number
}

type VehiclesActionPayloadType = {
  type: typeof TYPES.REQUEST_NEW_VEHICLES,
  payload: VehiclesPayloadType
} */

export default function* fetchNewVehicles(action) {
  try {
    const { items: vehicles, model, brand } = yield call(getVehicles, action.payload.modelId, CONST.vehiclesTypes.newVehicles, '');
    const generalListColorsByModel = yield call(API.getModelColor, action.payload.modelId);

    const filterItems = {
      modelId: action.payload.modelId,
      modifications: getLisFilterItems(
        vehicles,
        CONST.vehicleProps.modification.prop,
        CONST.vehicleProps.modification.name,
      ),
      equipments: getLisFilterItems(
        vehicles,
        CONST.vehicleProps.equipment.prop,
        CONST.vehicleProps.equipment.name,
      ),
      colors: getColorsListFilter(vehicles, generalListColorsByModel),
      minPrice: getMinPrice(vehicles, 'price'),
      maxPrice: getMaxPrice(vehicles, 'price'),
    };

    yield put(addFilterItems({ filterItems }));
    yield put(addNewVehicles({ vehicles, model, brand }));
    yield put(changeVehiclesLoader({ loading: false }));
  } catch (e) {
    console.log('newVehicles saga', e);
    throw e;
  }
}
