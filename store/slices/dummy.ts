import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountState {
	products: number;
	balance: number;
}

const initialState: CountState = {
	products: 0,
	balance: 1000,
};

const incrementExternal: CaseReducer<CountState, PayloadAction<number>> = (state, action) => {
	state.products += action.payload;
};

export const countSlice = createSlice({
	name: "count",
	initialState: initialState as CountState,
	reducers: {
		increment: incrementExternal,
		productIncrement: (state: CountState, action: PayloadAction<number>) => {
			state.products += action.payload;
		},
		productDecrement: (state: CountState, action: PayloadAction<number>) => {
			state.products -= action.payload;
		},
	},
});

export const { increment, productIncrement, productDecrement } = countSlice.actions;

export default countSlice.reducer;
