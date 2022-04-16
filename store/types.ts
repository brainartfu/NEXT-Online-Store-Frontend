import { store, wrapperStore } from ".";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof wrapperStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
