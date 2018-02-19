import React, { Component } from 'react'
import 'whatwg-fetch'
import styles from './styles'
import transformer from './transformer'
import ImagesActions from '../../store/images/actions'

export default class Search extends Component {
    constructor(props) {
        super(props)
        
        /**
        * @var object
        */
        this.state = {
            value: '',
            loading: false,
            error: false
        }
        
        /**
        * @var object
        */
        this.styles = {}
        
        this.setStyles()
    }
    
    /**
	* Set loading state
	*
	* @param bool loading
	* @return false
	*/
	setLoading(loading) {
		if(this.state.loading !== loading) {
			this.setState({
				loading
			})
		}
	}
	
	/**
	* Set error state
	*
	* @param bool|string error
	* @return false
	*/
	setError(error) {
		if(this.state.error !== error) {
			this.setState({
				error
			})
		}
	}
    
    /**
    * Set class styles
    *
    * @return false
    */
    setStyles() {
        this.styles = styles(this.props)
    }
    
    /**
    * Handles button click event
    *
    * @return false
    */
    handleOnClick() {
        if(this.state.value) {
            this.fetchImages()
        }
    }
    
    /**
    * Handles input text change
    *
    * @param event e
    * @return false
    */
    handleChange(e = {}) {
        if(e.target) {
            this.setState({
                value: e.target.value || ''
            })
        }
    }
    
    /**
    * Sends an api request
    *
    * @return false
    */
    async fetchImages() {
        try {
            this.setError(false)
            this.setLoading(true)
            
            let images = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.API_KEY}&text=${this.state.value}&format=json&nojsoncallback=1&extras=url_n`)
                .then(res => res.json())
                
            this.storeImages(images)
            this.setLoading(false)
        } catch (e) {
            this.setError(true)
            this.setLoading(false)
        } 
    }
    
    /**
    * Saves images to store
    *
    * @param array images
    * @return false
    */
    storeImages(response = {}) {
        let { dispatch } = this.props
        let result = transformer(response)
        
        dispatch(ImagesActions.setResponse(result))
    }
    
    /**
    * Renders search buton copy
    *
    * @return string result
    */
    renderButtonCopy() {
        let result = 'Search'
        
        if(this.state.loading) {
            result = 'Loading ...'
        }
        
        return result
    }
    
    /**
    * Renders error state
    *
    * @return DOM elements
    */
    renderError() {
        if(this.state.error) {
            return (
                <div>Error</div>
            )
        }
        
        return false
    }
    
    /**
    * Renders DOM elements
    *
    * @return DOM elements
    */
    render() {
        return (
            <div style={this.styles.container}>
                <input 
                    type="text" 
                    style={this.styles.input} 
                    placeholder="Enter a keyword..."
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                />
                
                <button 
                    style={this.styles.button}
                    onClick={this.handleOnClick.bind(this)}>
                    {this.renderButtonCopy()}
                </button>
                
                {this.renderError()}
            </div>
        )
    }
}

