
import {legacy_createStore} from 'redux'
import bookReducer from "../redux/book/bookReducer"


const store = legacy_createStore(bookReducer);

export default store;