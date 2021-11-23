import {createStore,combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import registerReducers from '../Reducers/registerReducers'
import { noteReducer } from '../Reducers/notesReducer'
const configureStore=()=>{
    const rootReducer={
        register:registerReducers,
        notes:noteReducer

    }
    const store=createStore(combineReducers(rootReducer),applyMiddleware(thunk))
    return store
}
export default configureStore