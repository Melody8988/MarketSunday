import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

//SAGA TO GET IMAGES FROM DB
function* getShopInfoSaga(action) {
    console.log('in getShopInfoSaga')
    console.log(action)
    try {
        console.log('ACTION:', action)
        const allShopInfo = yield call(axios.get, '/api/shopInfo', action.payload);
        console.log('got SHOPINFO', allShopInfo);
        yield put({
            type: 'SET_SHOP',
            payload: allShopInfo.data
        })
    } catch (error) {
        console.log('getShopInfoSaga ERROR', error)
    }
}

function* shopInfoSaga(){
    yield takeEvery('GET_SHOPINFO', getShopInfoSaga)
    // yield takeEvery('UPDATE_SHOP', getimagesSaga);
}

export default shopInfoSaga;