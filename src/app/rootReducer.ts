import { combineReducers } from "redux";

import articleReducer from "features/article/articleSlice";
import categoryReducer from "features/category/categorySlice";
import locationReducer from "features/location/locationSlice";
import messageReducer from "features/message/messageSlice";
import menuReducer from "features/menu/menuSlice";
import productReducer from "features/product/productSlice";
import collectionReducer from "features/collection/collectionSlice";

const rootReducer = combineReducers({
  article: articleReducer,
  category: categoryReducer,
  location: locationReducer,
  message: messageReducer,
  menu: menuReducer,
  product: productReducer,
  collection: collectionReducer,
});

export default rootReducer;
