import { configureStore, Middleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";

const middleware: Middleware[] = [];

if (process.env.NODE_ENV === "development") {
	const logger = createLogger({
		collapsed: true,
		duration: true,
	});
	middleware.push(logger);
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
	devTools: process.env.NODE_ENV === "development", // Show devTools only in development
});

export const wrapperStore = () => store;

export const wrapper = createWrapper(wrapperStore, {
	debug: process.env.NODE_ENV === "development", // Console debug output only in development
});
