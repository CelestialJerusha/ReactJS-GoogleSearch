import './index.css'

const SuggestionItem = (props) => {
    const {eachItem,arrowFunction} = props
    const {suggestion} = eachItem
    const onClickingBtn = ()=> {
        arrowFunction(suggestion)
    }
    return(
            <div className='suggestion-box'>
            <p className='suggestions'>{suggestion}</p>
            <button className='image-btn' type='button' onClick={onClickingBtn}><img className='arrow-image' src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrow"/></button>
        </div>
    )
}

export default SuggestionItem