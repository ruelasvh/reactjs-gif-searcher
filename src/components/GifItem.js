import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/GifItem.css'

class Gif extends Component {
    constructor(props) {
        super(props)

        this.state = {
            copiedUrl: false
        }

        this.handleCopy = this.handleCopy.bind(this)
    }

    handleCopy (event) {
        let textField = document.createElement('textarea')
        textField.innerText = this.props.url
        document.body.appendChild(textField)
        textField.select()
        this.setState({copiedUrl: document.execCommand('copy')})
        textField.remove()
        setTimeout(() => this.setState({copiedUrl: false}), 4000)
    }

    render () {
        console.log('Rendering GifItem')
        const { url } = this.props

        return (
            <div className="gif-container">
                <img src={url} className="gif-image" alt="gif"/>
                <div id="alert-box" className={this.state.copiedUrl ? 'slide-down': ''}>
                    Copied to clipboard!
                </div>
                <div className="gif-middle" onClick={this.handleCopy}>
                    <i className="fa fa-link fa-2x gif-text"></i>
                </div>
            </div>
        )
    }
}



Gif.propTypes = {
    url: PropTypes.string.isRequired
}

export default Gif

