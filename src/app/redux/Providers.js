"use client";
import { Provider } from "react-redux";
import store from "../redux/store";
import React from "react";

function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
