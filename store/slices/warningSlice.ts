import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
	message: string;
	isOpen: boolean;
	isConfirm: boolean;
}

const initialState: InitialState = {
	message: "",
	isOpen: false,
	isConfirm: false,
};

export const warningSlice = createSlice({
	name: "warningPopup",
	initialState: initialState as InitialState,
	reducers: {
		useWarningPopup: (state: InitialState, action: PayloadAction<string>) => {
			state.isOpen = true;
			state.isConfirm = false;
			state.message = action.payload;
		},

		confirmWarningPopup: (state: InitialState, action: PayloadAction) => {
			state.isConfirm = true;
			state.isOpen = false;
		},

		closeWarningPopup: (state: InitialState, action: PayloadAction) => {
			state.isOpen = false;
		},
	},
});

export const { useWarningPopup, confirmWarningPopup, closeWarningPopup } = warningSlice.actions;

export default warningSlice.reducer;
