import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

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


function* imageSaga(){
    yield takeEvery('GET_IMAGES', getimagesSaga);
}

export default imageSaga;