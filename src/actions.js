import fetch from 'cross-fetch'

export const REQUEST_GIFS = 'REQUEST_GIFS'
export const RECEIVE_GIFS = 'RECEIVE_GIFS'
const PUBLIC_KEY = 'cj9W6sAghutnKtFaaCSV9XBWNnkpP53Z';
const BASE_URL = '//api.giphy.com';
const ENDPOINT = '/v1/gifs/search';
const LIMIT = 1;
const RATING = 'pg';
const OFFSET = 0;

const requestGifs = (searchTerm) => {
    return {
        type: REQUEST_GIFS,
        searchTerm
    }
}

const receiveGifs = (searchTerm, json) => {
    return {
        type: RECEIVE_GIFS,
        gifs: json
    }
}

export const fetchGifs = (searchTerm) => {
    return (dispatch) => {
        dispatch(requestGifs(searchTerm))
        return fetch(`${BASE_URL}${ENDPOINT}?q=${searchTerm}&limit=${LIMIT}&rating=${RATING}&offset=${OFFSET}&api_key=${PUBLIC_KEY}`)
            .then(response => response.json())
            .then(json => dispatch(receiveGifs(searchTerm, json.data)))
    }
}