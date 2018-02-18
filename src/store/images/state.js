import reducers from './reducers'

const initialState = {
    storage: [],
    response: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_RESPONSE':
            return reducers.setResponse(state, action)
        case 'SET_STORAGE':
            return reducers.setStorage(state, action)
        default:
            return state
    }
}
