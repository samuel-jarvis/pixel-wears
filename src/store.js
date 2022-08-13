import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/components/CartModal/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  }
});