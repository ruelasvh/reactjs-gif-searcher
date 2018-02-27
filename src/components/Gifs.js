import React from 'react'
import PropTypes from 'prop-types'
import { CubeGrid } from 'styled-loaders-react'
import Gif from './GifItem'
import '../styles/Gifs.css'

const Gifs = ({ results, loading }) => (
    <div>
        {loading ?
            <CubeGrid color="white"/>
            : <div className="container">
                <div className="gifs-container">
                    {results.map((gif, i) =>
                        <div key={i} className="gifs-item">
                            <Gif key={i} url={gif.images.downsized.url}/>
                        </div>
                    )}
                </div>
            </div>
            }
    </div>
)

Gifs.propTypes = {
    results: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Gifs