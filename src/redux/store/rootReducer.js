import { combineReducers } from "redux";
import cakeReducer from "../cakes/cakeReducer";
import iceCreamReducer from "../icrCream/iceCreamReducer";
import biscuitReducers from "../biscuits/biscuitReducer";
import userReducer from "../user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    biscuit: biscuitReducers,
    user: userReducer
})

export default rootReducer