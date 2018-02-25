import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gif from './GifItem'

const Gifs = ({ results }) => (
    <ul>
        {results.map((gif, i) => <Gif key={i} url={gif.images.downsized.url}/>)}
    </ul>
)

Gifs.propTypes = {
    results: PropTypes.array.isRequired
}

export default Gifs