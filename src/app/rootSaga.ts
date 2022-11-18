import { all } from "redux-saga/effects";

import { articleSaga } from "features/article/articleSaga";
import { categorySaga } from "features/category/categorySaga";
import { locationSaga } from "features/location/locationSaga";
import { messageSaga } from "features/message/messageSaga";
import { menuSaga } from "features/menu/menuSaga";
import { productSaga } from "features/product/productSaga";
import { collectionSaga } from "features/collection/collectionSaga";
import { orderSaga } from "features/order/orderSaga";

export default function* rootSaga() {
  yield all([
    articleSaga(),
    categorySaga(),
    locationSaga(),
    messageSaga(),
    menuSaga(),
    productSaga(),
    collectionSaga(),
    orderSaga(),
  ]);
}
