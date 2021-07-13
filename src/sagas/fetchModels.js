import { call, put } from 'redux-saga/effects';
import { addhModels, changeModelsLoader } from '../reducers/modelsSlice';
import API from '../api';

export default function* fetchModels({ payload }) {
  try {
    const { brand, items } = yield call(API.getModels, payload.brandId);
    yield put(addhModels({ models: items, brand }));
    yield put(changeModelsLoader({ loading: false }));
  } catch (e) {
    console.log(e);
    throw e;
  }
}
