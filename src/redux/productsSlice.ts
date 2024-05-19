import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces";

interface ProductsState {
  products: { [productId: string]: Product };
}

const initialState: ProductsState = {
  products: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const products = { ...state.products, [product.id]: product };
      return { ...state, products };
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
