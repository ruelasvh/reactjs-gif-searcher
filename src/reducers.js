import { combineReducers } from 'redux'
import State from './model'
import {
    REQUEST_GIFS,
    RECEIVE_GIFS,
    REQUEST_GIFS_TRENDING,
    RECEIVE_GIFS_TRENDING
} from './actions'

const initialState = State

function trending(state = initialState.trending, action) {
    switch (action.type) {
        case REQUEST_GIFS_TRENDING:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_GIFS_TRENDING:
            return Object.assign({}, state, {
                isFetching: false,
                all: action.gifs
            })
        default:
            return state
    }
}

function searched(state = initialState.searched, action) {
    const searchedTerms = [...state.searchedTerms]
    if (searchedTerms.indexOf(action.searchTerm) === -1) {
        searchedTerms.push(action.searchTerm)
    }

    switch (action.type) {
        case REQUEST_GIFS:
            return Object.assign({}, state, {
                isFetching: true,
                searchedTerms: searchedTerms
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