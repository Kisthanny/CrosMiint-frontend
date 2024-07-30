import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { connectWalletSlice } from "./features/connectWallet/connectWalletSlice";
import { spinnerSlice } from "./features/spinner/spinnerSlice";
import { userSlice } from "./features/user/usersSlice";
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(connectWalletSlice, userSlice, spinnerSlice);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: 'CrosMiint',
    storage,
    whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request stsate pollution.
export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware();
        },
    });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>;

const store = makeStore();
const persistor = persistStore(store);

store.subscribe(() => {
    const state = store.getState();

    if (state.user.token) {
        sessionStorage.setItem("token", state.user.token);
    }
})

export { store, persistor };