import { IToastify } from "./../../components/common/Toastify/Toastify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IToastify = {
	desc: "",
	isToastify: false,
	severity: "success",
};

export const toastifySlice = createSlice({
	name: "toastify",
	initialState: initialState as IToastify,
	reducers: {
		useToastify: (
			state: IToastify,
			action: PayloadAction<{ desc: string; severity: "success" | "info" | "error" }>,
		) => {
			const { desc, severity } = action.payload;

			state.isToastify = true;
			state.desc = desc;
			state.severity = severity;
		},

		goneToastify: (state: IToastify, action: PayloadAction<boolean>) => {
			state.isToastify = action.payload;
		},
	},
});

export const { useToastify, goneToastify } = toastifySlice.actions;

export default toastifySlice.reducer;
