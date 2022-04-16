import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product";

interface CartProducts extends IProduct {
	quantity: number;
}

interface InitialState {
	products: CartProducts[];
	subtotal: number;
}

const initialState: InitialState = {
	products: [],
	subtotal: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: initialState as InitialState,
	reducers: {
		addToCart: (state: InitialState, action: PayloadAction<IProduct>) => {
			const product = action.payload;
			const matchProduct = state.products.find((pd) => pd.id === product.id);

			if (matchProduct?.quantity) {
				matchProduct.quantity++;
				matchProduct.price *= matchProduct.quantity;
			} else {
				state.products = [...state.products, { ...product, quantity: 1 }];
			}

			// calculate subtotal
			state.subtotal = state.products.reduce((sum, product) => sum + Number(product.price), 0);
		},

		quantityIncrement: (state: InitialState, action: PayloadAction<string>) => {
			const matchProduct = state.products.find((product) => product.id === action.payload);
			if (matchProduct) {
				matchProduct.quantity++;
				matchProduct.price *= matchProduct.quantity;
			}
		},

		quantityDecrement: (state: InitialState, action: PayloadAction<string>) => {
			const matchProduct = state.products.find((product) => product.id === action.payload);
			if (matchProduct) {
				if (matchProduct.quantity > 1) {
					matchProduct.quantity--;
					matchProduct.price *= matchProduct.quantity;
				} else {
					return;
				}
			}
		},

		removeFromCart: (state: InitialState, action: PayloadAction<string>) => {
			state.products = state.products.filter((product) => product.id !== action.payload);
		},
	},
});

export const { addToCart, quantityIncrement, quantityDecrement, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
