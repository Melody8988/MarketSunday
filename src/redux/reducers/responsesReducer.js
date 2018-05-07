const getResponsesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESPONSES':
            console.log('SET_RESPONSES:', action.payload)
            return action.payload
        default:
            return state
    }
}

export default getResponsesReducer;