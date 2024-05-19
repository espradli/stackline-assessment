import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "./interfaces";

export const productsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      return { ...state, [product.id]: product };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
