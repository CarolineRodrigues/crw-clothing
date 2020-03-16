import { takeEvery, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSucess, fetchCollectionsFailure } from './shop.actions';



export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSucess(collectionsMap));
    }
    catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}


export function* fetchCollectionStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ]);
}