const getShopInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHOP':
            console.log('SET_SHOP:', action.payload)
            return action.payload
        default:
            return state
    }
}

export default getShopInfoReducer;