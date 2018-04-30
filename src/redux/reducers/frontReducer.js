const getImagesReducer = (state = [], action) => {
    console.log('getImagesReducer')
    switch (action.type) {
        case 'SET_IMAGES':
            console.log('SET_IMAGES', action.payload)
            return action.payload
        default:
            return state
    }
}

export default getImagesReducer;