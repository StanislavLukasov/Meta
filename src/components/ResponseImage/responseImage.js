import React, { Component } from 'react'
import _ from 'lodash'
import { ToastContainer, toast } from 'react-toastify'
import styles from './styles'
import ImagesActions from '../../store/images/actions'

export default class ResponseImage extends Component {
    constructor(props) {
        super(props)
        
        /**
        * @var object
        */
        this.state = {
            images: []
        }
        
        /**
        * @var object
        */
        this.styles = {}
        
        /**
        * @var array
        */
        this.images = []
        
        this.setStyles()
    }
    
    /**
    * On component mount
    *
    * @return false
    */
    componentWillMount() {
        this.setImages(this.props)
    }
    
    /**
    * On component update
    *
    * @return false
    */
    componentDidUpdate() {
        this.setImages(this.props)
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
    * Set images state
    *
    * @return false
    */
    setImages(props) {
        if(props.images) {
            if(Array.isArray(props.images)) {
                if(!_.isEqual(props.images, this.state.images)) {
                    this.setState({
                        images: props.images
                    })
                }
            }
        }
    }
    
    /**
    * Handles button click event
    *
    * @param string image
    * @return false
    */
    handleOnClick(image) {
        if(typeof(Storage) !== "undefined") {   
            if(Array.isArray(this.props.storage)) {
                let images = this.props.storage
                let { dispatch } = this.props
                
                if(this.props.delete) {
                    let index = images.indexOf(image)
                    if(index > -1) {
                        images.splice(index, 1)
                        toast.success("Image removed")
                    }
                } else {
                    images.push(image)
                    toast.success("Image added")
                }
                
                localStorage.setItem("images", images)
                dispatch(ImagesActions.setStorage(images))
            }        
        }
    }
    
    /**
    * Renders copy
    *
    * @return string result
    */
    renderCopy() {
        let result = 'Save'
        
        if(this.props.delete) {
            result = 'Delete'
        }
        
        return result
    }
    
    /**
    * Renders DOM elements
    *
    * @return DOM elements
    */
    render() {
        return (
            <div style={this.styles.wrapper}>
                {this.state.images.map((image, index) => {
                    return (
                        <div 
                            style={this.styles.container}
                            key={index}>
                            
                            <img 
                                src={image} 
                                style={this.styles.image}
                            />
                            
                            <button     
                                style={this.styles.button}
                                onClick={this.handleOnClick.bind(this, image)}>
                                
                                {this.renderCopy()}
                            </button>
                        </div>
                    )
                })}
                
                <ToastContainer />
            </div>
        )
    }
}