import {configureStore} from "@reduxjs/toolkit";
import MapReducer from "../redux/Mapreducer";

const store = configureStore({
  reducer: MapReducer,
})

export default store;