/**
 * Redux is a js library that is used to maintain state globally in a react application
 *  - Food, music, fashion, guests
 *      -> We shall need a global source of information called the store
 *    - A centralized state management. Instead of scattering data all over the
 *        appn, we have a store that has all the information.
 *    - Predictability of state: reducers, are pure functions
 *    - Debugging
 *    - Scalabilty:
 *
 *
 * Important terms.
 *  - Actions: an action is simply a js object that has the type attr.
 *     {
 *        type: string
 *         payload: any [optional]
 *     }
 *  - Reducers: A fn that takes in the current state and the action as the arguments,
 *      then updates the state and it returns a newly updated state.
 *  - store: An object that contains the current state of an application.
 *  - dispatch: A methods that updates a state.
 *  - selector: A method that retrieves data from the store.
 */

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
