import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Reducers";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

export const store = configureStore({reducer: reducers}, {}, applyMiddleware(thunk));
