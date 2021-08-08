import { combineReducers } from "redux";
import dataReducer  from "./dataReducer";
import todoReducer from "./todoReducer";


export default combineReducers({
    
    users:dataReducer,
    todos:todoReducer
    
});