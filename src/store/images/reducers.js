class ImagesReducers {
    setResponse(state, action) {
        const response = action.response
        const nextState = Object.assign({}, state, {
            response
        })
        
        return nextState
    }
    
    setStorage(state, action) {
        const storage = action.storage
        const nextState = Object.assign({}, state, {
            storage
        })
        
        return nextState
    }
}

export default new ImagesReducers()
