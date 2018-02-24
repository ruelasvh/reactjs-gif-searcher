import { combineReducers } from 'redux'
import {
    REQUEST_GIFS,
    RECEIVE_GIFS,
} from './actions'
import State from './model'

const initialState = State

function trending(state = initialState.trending, action) {
    return state
}

function searched(state = initialState.searched, action) {
    switch (action.type) {
        case REQUEST_GIFS:
            return Object.assign({}, state, {
                isFetching: true,
                searchedTerms: [...state, action.searchTerm]
            })
        case RECEIVE_GIFS:
            return Object.assign({}, state, {
                isFetching: false,
                all: action.gifs
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    trending,
    searched
})

export default rootReducer