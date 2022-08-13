import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/components/Cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  }
});