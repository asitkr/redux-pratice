import { combineReducers } from "redux";
import reducer, { reducer2, reducer3 } from "./reducer";


const rootReducer = combineReducers({
    kuchBhi: reducer,
    kuchBhi_2: reducer2,
    kuchBhi_3: reducer3,
})

export default rootReducer;