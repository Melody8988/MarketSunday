const deleteImageReducer = (state = [], action) => {
    switch (action.type) {
        case 'DELETED_IMAGE':
            console.log('DELETED_IMAGE', action.payload)
            return action.payload
        default:
            return state
    }
}

export default deleteImageReducer;