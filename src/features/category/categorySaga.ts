import { put, call, takeEvery } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/category/categorySlice";
import {
  getListCategory,
  getOneCategory,
  getOneCategoryURL,
  createCategory,
  updateCategory,
  updateStatusCategory,
  deleteCategory,
} from "api/category";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListCategory, payload);

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
    const { data } = yield call(getListCategory, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(getOneCategory, id, params);
    if (data) {
      yield put(info(data.results.list || {}));
    }
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOneUrl({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(getOneCategoryURL, id, params);
    if (data) {
      yield put(info(data.results.list || {}));
    }
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* create({ payload, callback }) {
  try {
    const { data } = yield call(createCategory, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateCategory, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusCategory, id, params);

    yield put(
      updateStatusSlice({
        id: id,
        status: params.status,
      })
    );

    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* deleteRecord({ payload: { id }, callback }) {
  try {
    const { data } = yield call(deleteCategory, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "category/fetch";
const typeGetOne: any = "category/getOne";
const typeGetOneUrl: any = "category/getOneUrl";
const typeAdd: any = "category/add";
const typeFetchLazyLoading: any = "category/fetchLazyLoading";
const typeUpdate: any = "category/update";
const typeUpdateStatus: any = "category/updateStatus";
const typeDelete: any = "category/delete";

export function* categorySaga(): any {
  yield takeEvery(typeFetch, getList);
  yield takeEvery(typeGetOne, getOne);
  yield takeEvery(typeGetOneUrl, getOneUrl);
  yield takeEvery(typeAdd, create);
  yield takeEvery(typeFetchLazyLoading, fetchLazyLoading);
  yield takeEvery(typeUpdate, updateRecord);
  yield takeEvery(typeUpdateStatus, updateStatus);
  yield takeEvery(typeDelete, deleteRecord);
}
