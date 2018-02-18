import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'
import images from './images/state'

const reducers = combineReducers({
    images
})

const middlewares = [thunk]

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
})

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export default function configureStore (initialState) {
    return createStore(reducers, initialState, enhancer)
}
