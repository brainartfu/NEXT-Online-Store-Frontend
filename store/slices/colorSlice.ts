import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
	colorInHex: string;
}

const initialState: ColorState = {
	colorInHex: "#FFFFFF",
};

export const colorSlice = createSlice({
	name: "color",
	initialState: initialState,

	reducers: {
		colorHandler: (state: ColorState, action: PayloadAction<string>) => {
			state.colorInHex = action.payload;
		},
	},
});

export const { colorHandler } = colorSlice.actions;

export default colorSlice.reducer;
