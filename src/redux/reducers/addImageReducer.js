const addImageReducer = (state = [], action) => {
    switch (action.type) {
        case 'POST_IMAGE':
            console.log('POST_IMAGE', action.payload)
            return action.payload
        default:
            return state
    }
}

export default addImageReducer;