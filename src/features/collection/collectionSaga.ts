import { put, call, takeEvery } from "redux-saga/effects";
import { save, info, query } from "features/collection/collectionSlice";
import {
  getListCollection,
  getOneCollection,
  getOneCollectionURL,
} from "api/collection";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListCollection, payload);

    if (data && data.success) {
      yield put(save(data.results || {}));
    }
    yield put(query(payload));
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* fetchLazyLoading({ payload, callback }) {
  try {
    const { data } = yield call(getListCollection, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneCollection, id);
    if (data) {
      yield put(info(data.results.list || {}));
    }
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOneUrl({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneCollectionURL, id);
    if (data) {
      yield put(info(data.results.list || {}));
    }
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "collection/fetch";
const typeGetOne: any = "collection/getOne";
const typeGetOneUrl: any = "collection/getOneUrl";
const typeFetchLazyLoading: any = "collection/fetchLazyLoading";

export function* collectionSaga(): any {
  yield takeEvery(typeFetch, getList);
  yield takeEvery(typeGetOne, getOne);
  yield takeEvery(typeGetOneUrl, getOneUrl);
  yield takeEvery(typeFetchLazyLoading, fetchLazyLoading);
}
