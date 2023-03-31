import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import userReducer from "./userForm/slice";
import createSagaMiddleware from "@redux-saga/core";
import { watchResetCounter } from "./counter/saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), sagaMiddleware];
  },
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

// sagaMiddleware.run(watchResetCounter);

export default store;
