import { put, call, takeLatest } from 'redux-saga/effects'
import { 
    SEARCH_MOVIE_START, 
    SEARCH_MOVIE_ERROR, 
    SEARCH_MOVIE_COMPLETE, 
    SEARCH_MOVIE_COMPLETE_BY_ID, 
    SEARCH_MOVIE_ERROR_BY_ID, 
    SEARCH_MOVIE_START_BY_ID
} from '../../consts/actionTypes'
import { apiCall, apiCallById } from '../api'

export function* searchMovie ({ payload }) {
    try {
        const results = yield call(apiCall, `&query=${payload.movieName}`, null, null, 'GET');
        yield put({
            type: SEARCH_MOVIE_COMPLETE,
            results
        });
    } catch (error) {
        yield put({
            type: SEARCH_MOVIE_ERROR,
            error
        });
    }
}

export function* searchMovieById ({ payload }) {
    try {
        const movie = yield call(apiCallById, `${payload.movieId}`, null, null, 'GET');
        yield put({
            type: SEARCH_MOVIE_COMPLETE_BY_ID,
            movie
        });
    } catch (error) {
        yield put({
            type: SEARCH_MOVIE_ERROR_BY_ID,
            error
        });
    }
}

export default function* search() {
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
    yield takeLatest(SEARCH_MOVIE_START_BY_ID, searchMovieById);

}
