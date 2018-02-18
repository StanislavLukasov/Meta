'use strict'
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from '../store'
import Index from '../pages/Index'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>,
	document.getElementById('app')
)