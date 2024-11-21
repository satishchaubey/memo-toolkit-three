// "use client";

// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import { formReducer } from "../slices/formSlice";
// import formSaga from "../saga/formSaga";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     form: formReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(formSaga);

// export default store;
"use client";

import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "../slices/formSlice";

// Configure the Redux store without Saga
const store = configureStore({
  reducer: {
    form: formReducer,
  },
  // Default middleware includes thunk, so no need for saga middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
