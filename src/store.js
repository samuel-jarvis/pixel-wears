import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/components/CartModal/cartSlice";

const store =  configureStore({
  reducer: {
    cart: cartReducer,
  }
});



export default store