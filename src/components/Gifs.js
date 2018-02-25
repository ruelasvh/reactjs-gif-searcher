import React from 'react'
import PropTypes from 'prop-types'
import Gif from './GifItem'
import '../styles/Gifs.css'

const Gifs = ({ results }) => (
    <div className="container">
        <h3>TRENDING NOW</h3>
        <div className="gifs-container">
            {results.map((gif, i) =>
                <div className="gifs-item">
                    <Gif key={i} url={gif.images.downsized.url}/>
                </div>
            )}
        </div>
    </div>
)

Gifs.propTypes = {
    results: PropTypes.array.isRequired
}

export default Gifs