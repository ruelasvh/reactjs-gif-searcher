import React from 'react'
import PropTypes from 'prop-types'
import { CubeGrid } from 'styled-loaders-react'
import Gif from './GifItem'
import '../styles/Gifs.css'

const Gifs = ({ results, header, loading }) => (
    <div>
        {loading ?
            <CubeGrid/>
            : <div className="container">
                <h3 className="header">{header}</h3>
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
    results: PropTypes.array.isRequired
}

export default Gifs