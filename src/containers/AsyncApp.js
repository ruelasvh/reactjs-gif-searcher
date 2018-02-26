import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import Gifs from '../components/Gifs'
import { fetchGifs, fetchGifsTrending } from '../actions'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import '../styles/App.css'

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
        const {
            searchResults,
            searchIsFetching,
            trendingResults,
            trendingIsFetching,
            searchedTerms
        } = this.props

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Giphy Searcher</h1>
                    <SearchBar
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        value={this.searchTerm}
                        searchedTerms={searchedTerms}/>
                </header>

                {!!searchResults.length ?
                    <Gifs results={searchResults} header={'Search results'} loading={searchIsFetching}/>
                    : <Gifs results={trendingResults} header={'Trending now'} loading={trendingIsFetching}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { searched, trending } = state
    const previousSearchTerm = searched.searchedTerms[searched.searchedTerms.length - 1]

    return {
        previousSearchTerm,
        searchResults: searched.all,
        searchIsFetching: searched.isFetching,
        trendingResults: trending.all,
        trendingIsFetching: trending.isFetching,
        searchedTerms: searched.searchedTerms
    }
}

export default connect(mapStateToProps)(AsyncApp)