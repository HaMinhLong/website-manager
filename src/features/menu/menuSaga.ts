import { put, call, takeEvery } from "redux-saga/effects";
import { save, info, query, updateStatusSlice } from "features/menu/menuSlice";
import {
  getListMenu,
  getOneMenu,
  createMenu,
  updateMenu,
  updateStatusMenu,
  deleteMenu,
} from "api/menu";

const children = (p: any, c: any) => {
  if (p.hasOwnProperty("children")) {
    p.children.push(c);
  } else {
    p.children = [c];
  }
};

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListMenu, payload);

    if (data && data.success) {
      const result = data?.results?.list?.map((item) => ({
        ...item,
        children: [],
      }));
      for (let i = 0; i < result.length - 1; i++) {
        const a = result[i];
        for (let j = i + 1; j < result.length; j++) {
          const b = result[j];
          if (a.id === b.parent) {
            children(a, b);
          } else if (b.id === a.parent) {
            children(b, a);
          }
        }
      }

      const menuParentChild = result.filter((x) => !x.parent);

      yield put(save(menuParentChild || {}));
      yield put(query(payload));
      if (callback) callback(menuParentChild);
    }
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* fetchLazyLoading({ payload, callback }) {
  try {
    const { data } = yield call(getListMenu, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneMenu, id);
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
    const { data } = yield call(createMenu, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateMenu, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusMenu, id, params);

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
    const { data } = yield call(deleteMenu, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "menu/fetch";
const typeGetOne: any = "menu/getOne";
const typeAdd: any = "menu/add";
const typeFetchLazyLoading: any = "menu/fetchLazyLoading";
const typeUpdate: any = "menu/update";
const typeUpdateStatus: any = "menu/updateStatus";
const typeDelete: any = "menu/delete";

export function* menuSaga(): any {
  yield takeEvery(typeFetch, getList);
  yield takeEvery(typeGetOne, getOne);
  yield takeEvery(typeAdd, create);
  yield takeEvery(typeFetchLazyLoading, fetchLazyLoading);
  yield takeEvery(typeUpdate, updateRecord);
  yield takeEvery(typeUpdateStatus, updateStatus);
  yield takeEvery(typeDelete, deleteRecord);
}
