import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

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

function* addImageSaga(action){
    console.log('in addImageSaga')
    try{
        console.log('ACTION:', action.payload)
        const allNewImages = yield call (axios.post, '/api/shop', action.payload);
        console.log('added new image', allNewImages);
        yield put ({
            type: 'GET_IMAGES',
            payload: allNewImages.data
        })
    } catch (error) {
        console.log('addImageSaga error:', error)
    }
}

function* deleteImageSaga(action){
    console.log('in delete ImageSaga')
    try{
        console.log('ACTION:', action.payload)
        const afterImageDelete = yield call (axios.delete, '/api/shop/' + action.payload.id);
        console.log('TEST', afterImageDelete)
        yield put ({
            type: 'GET_IMAGES',
        })
    }catch (error) {
        console.log ('CANNOT delete product', error)
        swal('A viewer has made a comment regarding this specific product. Please delete the comment before getting rid of this product.')
    }
}

function* imageSaga(){
    yield takeEvery('GET_IMAGES', getimagesSaga);
    //UPDATE_TITLE cover both title and description updates
    yield takeEvery('UPDATE_TITLE', updateTitleSaga);
    yield takeEvery ('ADD_IMAGE', addImageSaga)
    yield takeEvery ('DELETE_IMAGE', deleteImageSaga)
}

export default imageSaga;