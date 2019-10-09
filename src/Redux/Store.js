import { createStore } from "redux";
import { pageHandler } from "./Reducers";


export const store = createStore(pageHandler);



