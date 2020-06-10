import { 
SEARCH_MOVIE_START, 
SEARCH_MOVIE_ERROR, 
SEARCH_MOVIE_COMPLETE, 
SEARCH_MOVIE_START_BY_ID, 
SEARCH_MOVIE_ERROR_BY_ID, 
SEARCH_MOVIE_COMPLETE_BY_ID 
} from '../../consts/actionTypes'

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE_START:
            return {...state, isLoading: true, movieResults: null};
        case SEARCH_MOVIE_ERROR:
            return {...state, isLoading: false, movieResults: null };
        case SEARCH_MOVIE_COMPLETE:
            return {...state, isLoading: false, movieResults: action.results.data.results};
        case SEARCH_MOVIE_START_BY_ID:
            return {...state, isLoading: true, movieResult: null };
        case SEARCH_MOVIE_ERROR_BY_ID:
            return {...state, isLoading: false, movieResult: null };
        case SEARCH_MOVIE_COMPLETE_BY_ID:
            return {...state, isLoading: false, movieResult: action.movie.data};
        default:
            return {...state}
    }
}