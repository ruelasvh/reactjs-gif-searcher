import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/SearchBar.css'

class SearchBar extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.searchedTerms !== this.props.searchedTerms
    }

    render() {
        console.log('Rendering SearchBar')
        const { onChange, onSubmit, onOptionsChange, value, searchedTerms } = this.props
        return (
            <form onSubmit={onSubmit}>
                <datalist id="search-terms">
                    {searchedTerms.map((term, i) => <option key={i} value={term}></option>)}
                </datalist>
                <div className="search-container">
                    <span className="search-icon"><i className="fa fa-search"/></span>
                    <input
                        id="search"
                        onChange={onChange}
                        onInput={onOptionsChange}
                        value={value}
                        type="text"
                        list="search-terms"
                        placeholder="To get started, enter a search term to find a GIF"/>
                </div>
            </form>
        )
    }
}

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onOptionsChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    searchedTerms: PropTypes.array.isRequired
}

export default SearchBar