class ImagesActions {
    setResponse(response) {
        return {
            type: 'SET_RESPONSE',
            response
        }
    }
    
    setStorage(storage) {
        return {
            type: 'SET_STORAGE',
            storage
        }
    }
}

export default new ImagesActions()
