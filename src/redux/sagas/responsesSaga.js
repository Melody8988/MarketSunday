import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//SAGA TO GET RESPONSES FROM DB
function* getResponsesSaga(action) {
    console.log('in getResponsesSaga')
    try {
        console.log('ACTION:', action)
        const existingResponses = yield call(axios.get, '/api/responses', action.payload);
        console.log('got responses', existingResponses);
        yield put({
            type: 'SET_RESPONSES',
            payload: existingResponses.data
        })
    } catch (error) {
        console.log('getResponsesSaga ERROR', error)
    }
}

function* responsesSaga(){
    yield takeEvery('GET_RESPONSES', getResponsesSaga);
}

export default responsesSaga;