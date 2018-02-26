import React, { Component } from 'react'
import '../styles/SearchBar.css'

export default class SearchBar extends Component {
    render() {
        const { onChange, onSubmit, value, searchedTerms } = this.props
        return (
            <form onSubmit={onSubmit}>
                <datalist id="search-terms">
                    {searchedTerms.map(term => <option value={term}></option>)}
                </datalist>
                <div className="search-container">
                    <span className="search-icon"><i className="fa fa-search"/></span>
                    <input
                        id="search"
                        onChange={onChange}
                        value={value}
                        type="text"
                        list="search-terms"
                        placeholder="To get started, enter a search term to find a GIF"/>
                </div>
            </form>
        )
    }
}