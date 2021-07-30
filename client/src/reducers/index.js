import { combineReducers } from 'redux'

import errorReducer from './errorReducer'
import productReducer from './productReducer'

export default combineReducers({

    error: errorReducer,
    product: productReducer
})