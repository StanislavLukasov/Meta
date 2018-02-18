'use strict'
import React, { Component } from 'react'
import styles from './styles'
import _ from 'lodash'
import Search from '../../components/Search'
import ResponseImage from '../../components/ResponseImage'
import ImagesActions from '../../store/images/actions'

export default class Index extends Component {
	constructor(props) {
		super(props)
		
		/**
		* @var object
		*/
		this.state = {
			viewStorage: false,
			storageCount: 0
		}
		
		/**
		* @var object
		*/
		this.styles = {}
		
		this.setStyles()
	}
	
	/**
	* On mount
	*
	* @return false
	*/
	componentWillMount() {
		this.setImagesFromStorage()
	}
	
	/**
	* On update
	*
	* @return false
	*/
	componentWillReceiveProps(nextProps) {
		this.setState({
			storageCount: nextProps.images.storage.length
		})
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
	* Set class styles
	* @param bool viewStorage
	* @return false
	*/
	setViewStorage(viewStorage) {
		if(this.state.viewStorage !== viewStorage) {
			this.setState({
				viewStorage
			})
		}
	}
	
	/**
	* Set class styles
	* @param int storageCount
	* @return false
	*/
	setStorageCount(storageCount) {
		if(this.state.storageCount !== storageCount) {
			this.setState({
				storageCount
			})
		}
	}
	
	/**
	* Set images to the store from local storage
	*
	* @return false
	*/
	setImagesFromStorage() {
		if (typeof(Storage) !== "undefined") {
			let images = localStorage.getItem("images")
			
			if(images) {
				let imageArray = images.split(",")
				let { dispatch } = this.props
				
				dispatch(ImagesActions.setStorage(imageArray))
			}
		}
	}
	
	/**
	* Displays storage
	*
	* @return false
	*/
	handleViewStorageChange(value) {
		this.setState({
			viewStorage: value
		})
	}
	
	/**
	* Renders search view
	*
	* @return DOM elements
	*/
	renderSearch() {
		if(!this.state.viewStorage) {
			return (
				<div>
					<a 
						style={this.styles.link}
						onClick={this.handleViewStorageChange.bind(this, true)}>
						View storage ({this.state.storageCount})
					</a>
					
					<Search />
					<ResponseImage images={this.props.images.response}/>
				</div>
			)
		}
		
		return false
	}
	
	/**
	* Renders storage view
	*
	* @return DOM elements
	*/
	renderStorage() {
		if(this.state.viewStorage) {
			let images = localStorage.getItem("images")
			let imageArray = []
			
			if(images) {
				imageArray = images.split(",")
			}
				
			return (
				<div>
					<a 
						style={this.styles.link}
						onClick={this.handleViewStorageChange.bind(this, false)}>
						View search
					</a>
					
					{imageArray && 
						<ResponseImage 
							images={imageArray}
							delete={true}
						/>
					}
				</div>
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
			<div>
				{this.renderSearch()}
				{this.renderStorage()}
			</div>
		)
	}
}
