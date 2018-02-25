import React, { Component } from 'react'

export default class Gif extends Component {
    render() {
        return (
            <img src={this.props.url} className="gif hidden" alt="gif"/>
        )
    }
}