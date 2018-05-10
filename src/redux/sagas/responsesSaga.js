import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

//SAGA TO GET VIEWER RESPONSES FROM DB
function* getResponsesSaga(action) {
    try {
        const existingResponses = yield call(axios.get, '/api/responses', action.payload);
        yield put({
            type: 'SET_RESPONSES',
            payload: existingResponses.data
        })
    } catch (error) {
        console.log('getResponsesSaga ERROR', error)
    }
}// end getResponsesSaga

//SAGA TO POST NEW VIEWER MESSAGE TO DB
function* addMessageSaga(action){
    try{
        const allNewResponses = yield call (axios.post, '/api/responses', action.payload)
        yield put({
            type: 'GET_RESPONSES', 
            payload: allNewResponses.data
        })
        swal({
            text:'Message Sent!',
            icon: "success"
        })
    } catch (error) {
        swal({
            text: 'All fields must be completed to send', 
            icon: 'warning'
        })
        console.log('addMessageSaga error:', error)
    }
}//end addMessageSaga

//SAGA TO DELETE VIEWER MESSAGES 
function* deleteMessageSaga(action){
    try{
        const viewerMessageDeleted = yield call (axios.delete, '/api/responses/' + action.payload.id)
        yield put({
            type: 'GET_RESPONSES', 
            payload: viewerMessageDeleted.data
        })
    } catch (error) {
        console.log('deleteMessageSaga error:', error)
    }
}//end deleteMessageSaga

//SAGA TO UPDATE MESSAGE RESOLVED STATUS
function* updateResolveStatus(action){
    //Toggle resolved status on click 'logic' lives here
    action.payload.resolved = !action.payload.resolved
    try{
        const updatedStatus = yield call (axios.put, '/api/responses/' + action.payload.id, action.payload)
        yield put({
            type: 'GET_RESPONSES' 
        })
    } catch (error) {
        console.log('CANNOT updateResolveStatus', error)
    }
}//end updateResolveStatus

function* responsesSaga(){
    yield takeEvery('GET_RESPONSES', getResponsesSaga);
    yield takeEvery('ADD_MESSAGE', addMessageSaga);
    yield takeEvery('DELETE_MESSAGE', deleteMessageSaga);
    yield takeEvery('UPDATE_STATUS', updateResolveStatus)
}

export default responsesSaga;