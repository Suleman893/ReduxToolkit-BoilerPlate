import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "../features/product/productSlice";
import adminReducer from "../features/admin/adminSlice";
import categoryReducer from "../features/category/categorySlice";
import subCategoryReducer from "../features/subCategory/subCategorySlice";
import supplierReducer from "../features/supplier/supplierSlice";
import orderReducer from "../features/order/ordersSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  timeout: 100,
  blacklist: ["product", "blog", "category", "subCategory", "order"],
  storage,
};

const reducer = combineReducers({
  product: productReducer,
  admin: adminReducer,
  blog: blogReducer,
  category: categoryReducer,
  subCategory: subCategoryReducer,
  supplier: supplierReducer,
  order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
