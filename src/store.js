import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/components/CartModal/cartSlice";
import { saveStorage, loadStorage } from "./utility/storage";
import { combineReducers } from "redux";

const reducers = combineReducers({
  cart: cartReducer,
});

const store =  configureStore({
  reducer: reducers,
  preloadedState: loadStorage(),
});

store.subscribe(() => {
  saveStorage(store.getState());
});

export default store