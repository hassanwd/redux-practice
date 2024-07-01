import Reducer from "./Count";
import Login from "./Login";
import { combineReducers } from 'redux'

const Allreducers = combineReducers({
    count: Reducer,
    SignUp: Login
})

export default Allreducers