import { call, put } from 'redux-saga/effects';
import { addModels, changeModelsLoader } from '../reducers/modelsSlice';
import API from '../api';
import * as TYPES from '../types';

interface ModelsPayloadType {
  brandId: number
}

type ModelsActionPayloadType = {
  type: typeof TYPES.REQUEST_BRANDS,
  payload: ModelsPayloadType
}

export default function* fetchModels(action: ModelsActionPayloadType) {
  try {
    console.log(action);
    const { brand, items: models } = yield call(API.getModels, action.payload.brandId);
    yield put(addModels({ models, brand }));
    yield put(changeModelsLoader({ loading: false }));
  } catch (e) {
    console.log(e);
    throw e;
  }
}
