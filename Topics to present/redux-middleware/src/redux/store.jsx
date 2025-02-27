import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import logger from "redux-logger"; // Middleware

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


// 🚨 What this Middleware (redux-logger) Do?
// Yeh redux-logger ek Third Party Middleware hai.

// ✅ Kaam:

// Console pe Action ka naam show karega
// Action se pehle ka state
// Action ke baad ka state




// Middleware Flow in Redux

// Component ---> Action ---> Middleware ---> Reducer ---> Store ---> UI
