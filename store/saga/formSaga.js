"use client";

import { call, put, takeLatest } from "redux-saga/effects";
import { submitForm, submitFormSuccess, submitFormFailure } from "../slices/formSlice";

// Simulated API call
function mockApi(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, 1000);
  });
}

// Saga worker function
function* handleFormSubmission(action) {
  try {
    const response = yield call(mockApi, action.payload);
    if (response.success) {
      yield put(submitFormSuccess(response.data));
      alert("Form submitted successfully!");
    }
  } catch (error) {
    yield put(submitFormFailure());
    alert("Failed to submit the form.");
  }
}

// Saga watcher function
export default function* formSaga() {
  yield takeLatest("form/submitForm", handleFormSubmission);
}
