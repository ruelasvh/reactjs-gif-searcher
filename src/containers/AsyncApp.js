import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import { fetchGifs } from '../actions'
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
        // const { dispatch } = this.props
        // dispatch(fetchTrendingGifs())
    }:

    handleChange(event) {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit(event) {
        const { dispatch } = this.props
        dispatch(fetchGifs(this.state.searchTerm))
        event.preventDefault()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Giphy Searcher</h1>
                </header>
                <p className="App-intro">
                    To get started, enter a search term in the search bar.
                </p>

                <SearchBar onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.searchTerm}/>
            </div>
        );
    }
}

export default connect()(AsyncApp)