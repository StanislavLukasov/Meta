export default function styles(props = {}) {
	let styles = {
		wrapper: {
			boxSizing: 'border-box',
			width: '100%',
			maxWidth: '60rem',
			textAlign: 'center',
			margin: 'auto'
		},
		container: {
			padding: '1rem',
			display: 'inline-block',
			verticalAlign: 'top',
			width: '33.333%',
			boxSizing: 'border-box',
		},
		image: {
			width: '100%',
			display: 'block'
		},
		button: {
			display: 'block',
			margin: '1rem auto 0 auto',
			padding: '1rem',
			fontSize: '1rem',
			outline: 0,
			background: 'black',
			color: 'white',
			cursor: 'pointer'
		}
	}
	
    return styles
}