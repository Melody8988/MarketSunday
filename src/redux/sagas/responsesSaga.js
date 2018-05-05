import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//SAGA TO GET VIEWER RESPONSES FROM DB
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
    }//end catch
}// end getResponsesSaga

//SAGA TO POST NEW VIEWER MESSAGE TO DB
function* addMessageSaga(action){
    console.log('in addMessageSaga')
    try{
        console.log('ACTION:', action)
        const allNewResponses = yield call (axios.post, '/api/responses', action.payload)
        console.log('added the new response', allNewResponses);
        yield put({
            type: 'GET_RESPONSES', 
            payload: allNewResponses.data
        })
    } catch (error) {
        console.log('addMessageSaga error:', error)
    }//end catch
}//end addMessageSaga

function* responsesSaga(){
    yield takeEvery('GET_RESPONSES', getResponsesSaga);
    yield takeEvery('ADD_MESSAGE', addMessageSaga)
}

export default responsesSaga;