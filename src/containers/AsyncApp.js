import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import Gif from '../components/Gif'
import { fetchGifs, fetchGifsTrending } from '../actions'
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../styles/App.css';

class AsyncApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchGifsTrending())
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit(event) {
        const { dispatch, previousSearchTerm } = this.props
        if (!!this.state.searchTerm && this.state.searchTerm !== previousSearchTerm ) {
            dispatch(fetchGifs(this.state.searchTerm))
        }
        event.preventDefault()
    }

    render() {
        const { searchResults } = this.props
        let gif = null
        if (searchResults.length) {
            gif = <Gif url={searchResults[0].images.downsized.url}/>
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Giphy Searcher</h1>
                </header>
                <p className="App-intro">
                    To get started, enter a search term in the search bar.
                </p>

                <SearchBar
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    value={this.searchTerm}/>

                {gif}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { searched } = state
    const previousSearchTerm = searched.searchedTerms[searched.searchedTerms.length - 1]
    return {
        previousSearchTerm,
        searchResults: searched.all
    }
}

export default connect(mapStateToProps)(AsyncApp)