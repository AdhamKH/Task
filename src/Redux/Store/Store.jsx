import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Slices/Products";


export const store = configureStore({
  reducer: {
    Prouducts: ProductsReducer,
  },
});
