import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
    state = {searchInput:''}

    onChangeInput=(event)=>{
        this.setState({searchInput: event.target.value})
    }
    arrowFunction=(suggestion)=>{
        this.setState({searchInput: suggestion})
    }

    render() {
        const {searchInput} = this.state
        const {suggestionsList} = this.props

        const searchedInput = suggestionsList.filter(eachObj =>
            eachObj.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
          )
        return(
            <div className='main-container'>
                <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" className='image' alt="google logo"/>
                <div className='container'>
                <div className='search-bar'>
                <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" className='search-img' alt="search icon"/>
                <input className='input-size' type="search" placeholder="Search Google" value={searchInput} onChange={this.onChangeInput}/>
                </div>
                <ul className='suggestions-list-container'>
                    {
                        searchedInput.map((eachObj)=> <SuggestionItem eachItem={eachObj} arrowFunction={this.arrowFunction} />)
                    }
                </ul>
                </div>
            </div>
        )
    }
}

export default GoogleSuggestions