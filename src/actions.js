import fetch from 'cross-fetch'

export const REQUEST_GIFS = 'REQUEST_GIFS'
export const RECEIVE_GIFS = 'RECEIVE_GIFS'
export const REQUEST_GIFS_TRENDING = 'REQUEST_GIFS_TRENDING'
export const RECEIVE_GIFS_TRENDING = 'RECEIVE_GIFS_TRENDING'

const PUBLIC_KEY = 'cj9W6sAghutnKtFaaCSV9XBWNnkpP53Z'
const BASE_URL = '//api.giphy.com'
const SEARCH_ENDPOINT = '/v1/gifs/search'
const LIMIT = 25
const RATING = 'g'
const OFFSET = 0
const TRENDING_ENDPOINT = '/v1/gifs/trending'


const requestGifsTrending = () => {
    return {
        type: REQUEST_GIFS_TRENDING
    }
}

const receiveGifsTrending = (json) => {
    return {
        type: RECEIVE_GIFS_TRENDING,
        gifs: json.data
    }
}

export const fetchGifsTrending = () => {
    return (dispatch) => {
        dispatch(requestGifsTrending())
        return fetch(`${BASE_URL}${TRENDING_ENDPOINT}?api_key=${PUBLIC_KEY}`)
            .then(response => response.json())
            .then(json => dispatch(receiveGifsTrending(json)))
    }
}

const requestGifs = (searchTerm) => {
    return {
        type: REQUEST_GIFS,
        searchTerm
    }
}

const receiveGifs = (json) => {
    return {
        type: RECEIVE_GIFS,
        gifs: json.data
    }
}

export const fetchGifs = (searchTerm) => {
    return (dispatch) => {
        dispatch(requestGifs(searchTerm))
        return fetch(`${BASE_URL}${SEARCH_ENDPOINT}?q=${searchTerm}&limit=${LIMIT}&rating=${RATING}&offset=${OFFSET}&api_key=${PUBLIC_KEY}`)
            .then(response => response.json())
            .then(json => dispatch(receiveGifs(json)))
    }
}