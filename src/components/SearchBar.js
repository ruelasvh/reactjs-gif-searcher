import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        const { onChange, value, onSubmit } = this.props
        return (
            <form onSubmit={onSubmit}>
                <div className="input-wrapper empty">
                    <input onChange={onChange} value={value} type="text" className="query" />
                    <div className="loader"></div>
                    <div className="clear"></div>
                </div>
            </form>
        )
    }
}