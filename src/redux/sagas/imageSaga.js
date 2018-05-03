import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//SAGA TO GET IMAGES FROM DB
function* getimagesSaga(action) {
    console.log('in imageSaga')
    try {
        console.log('ACTION:', action)
        const existingProducts = yield call(axios.get, '/api/shop', action.payload);
        console.log('got items', existingProducts);
        yield put({
            type: 'SET_IMAGES',
            payload: existingProducts.data
        })
    } catch (error) {
        console.log('imageSaga ERROR', error)
    }
}

//SAGA TO UPDATE IMAGE TITLE ON DB
function* updateTitleSaga(action){
    console.log('in updateTitleSaga')
    try{
        console.log('ACTION:', action.payload)
        const newTitle = yield call(axios.put, '/api/shop/' + action.payload.id, action.payload );
        console.log('posted new title', newTitle);
        yield put({
            type: 'GET_IMAGES', 
        })
    } catch (error) {
        console.log('CANNOT updateTitleSaga', error)
    }
}

// //SAGA TO UPDATE DESCRIPTION TITLE ON DB
// function* updateDescriptionSaga(action){
//     console.log('in updateDescriptionSaga')
//     try{
//         console.log('ACTION:', action.payload)
//         const newDescription = yield call(axios.put, '/api/shop/' + action.payload.id, {description: action.payload.description});
//         console.log('posted new description', newDescription);
//         yield put({
//             type: 'GET_IMAGES',
//         })
//     } catch (error) {
//         console.log('CANNOT updateDescriptionSaga', error)
//     }
// }


function* imageSaga(){
    yield takeEvery('GET_IMAGES', getimagesSaga);
    yield takeEvery('UPDATE_TITLE', updateTitleSaga)
    // yield takeEvery('UPDATE_DESCRIPTION', updateDescriptionSaga)
}

export default imageSaga;