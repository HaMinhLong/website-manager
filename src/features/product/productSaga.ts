import { put, call, takeEvery } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/product/productSlice";
import {
  getListProduct,
  getOneProduct,
  getOneProductURL,
  getListProducerProduct,
  createProduct,
  updateProduct,
  updateStatusProduct,
  deleteProduct,
} from "api/product";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListProduct, payload);

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
    const { data } = yield call(getListProduct, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneProduct, id);
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
    const { data } = yield call(getOneProductURL, id);
    if (data) {
      yield put(info(data.results.list || {}));
    }
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getAllProducerProduct({ payload, callback }) {
  try {
    const { data } = yield call(getListProducerProduct, payload);
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
    const { data } = yield call(createProduct, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateProduct, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusProduct, id, params);

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
    const { data } = yield call(deleteProduct, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "product/fetch";
const typeFetchProducer: any = "product/producer";
const typeGetOne: any = "product/getOne";
const typeGetOneUrl: any = "product/getOneUrl";
const typeAdd: any = "product/add";
const typeFetchLazyLoading: any = "product/fetchLazyLoading";
const typeUpdate: any = "product/update";
const typeUpdateStatus: any = "product/updateStatus";
const typeDelete: any = "product/delete";

export function* productSaga(): any {
  yield takeEvery(typeFetch, getList);
  yield takeEvery(typeFetchProducer, getAllProducerProduct);
  yield takeEvery(typeGetOne, getOne);
  yield takeEvery(typeGetOneUrl, getOneUrl);
  yield takeEvery(typeAdd, create);
  yield takeEvery(typeFetchLazyLoading, fetchLazyLoading);
  yield takeEvery(typeUpdate, updateRecord);
  yield takeEvery(typeUpdateStatus, updateStatus);
  yield takeEvery(typeDelete, deleteRecord);
}
