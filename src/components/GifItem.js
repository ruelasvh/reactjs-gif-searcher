import React from 'react'
import PropTypes from 'prop-types'

const Gif = ({ url }) => (
    <img src={url} className="gif hidden item" alt="gif"/>
)


Gif.propTypes = {
    url: PropTypes.string.isRequired
}

export default Gif

