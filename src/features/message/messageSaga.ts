import { put, call, takeEvery } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/message/messageSlice";
import {
  getListMessage,
  getOneMessage,
  createMessage,
  updateMessage,
  updateStatusMessage,
  deleteMessage,
} from "api/message";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListMessage, payload);

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
    const { data } = yield call(getListMessage, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneMessage, id);
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
    const { data } = yield call(createMessage, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateMessage, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusMessage, id, params);

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
    const { data } = yield call(deleteMessage, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "message/fetch";
const typeGetOne: any = "message/getOne";
const typeAdd: any = "message/add";
const typeFetchLazyLoading: any = "message/fetchLazyLoading";
const typeUpdate: any = "message/update";
const typeUpdateStatus: any = "message/updateStatus";
const typeDelete: any = "message/delete";

export function* messageSaga(): any {
  yield takeEvery(typeFetch, getList);
  yield takeEvery(typeGetOne, getOne);
  yield takeEvery(typeAdd, create);
  yield takeEvery(typeFetchLazyLoading, fetchLazyLoading);
  yield takeEvery(typeUpdate, updateRecord);
  yield takeEvery(typeUpdateStatus, updateStatus);
  yield takeEvery(typeDelete, deleteRecord);
}
