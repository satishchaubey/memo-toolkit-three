// components/StoreProvider.js
"use client";

import { Provider } from "react-redux";
import store from "./configuration/store";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider; // Export StoreProvider as the default export
