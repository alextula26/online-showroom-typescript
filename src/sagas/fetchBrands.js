import { call, put } from 'redux-saga/effects';
import { addBrands } from '../reducers/brandsSlice';
import API from '../api';

export default function* fetchBrands() {
  try {
    const brands = yield call(API.getBrands);
    yield put(addBrands({ brands }));
  } catch (e) {
    console.log(e);
    throw e;
  }
}
