import { combineReducers } from "redux";
import { associationReducer } from "./associationReducer";
import {userReducer} from "./userReducer"
import{eventReducer} from "./eventReducer"
import{AtheletReducer} from "./atheletReducer"
export const reducers = combineReducers({ associationReducer, userReducer,eventReducer,AtheletReducer});