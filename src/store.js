import {createStore} from 'redux';
import state from "./state";
import reducers from "./reducers";
import { createStore } from "redux";

var store = createStore(reducers,state);

export default store;