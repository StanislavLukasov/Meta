export default function styles(props = {}) {
	let styles = {
		container: {
			width: '100%',
			padding: '2rem',
			boxSizing: 'border-box'
		},
		input: {
			padding: '1rem',
			width: '100%',
			border: '0.1rem solid black',
			outline: 0,
			fontSize: '1rem'
		},
		button: {
			padding: '1rem',
			width: '100%',
			maxWidth: '20rem',
			color: 'white',
			background: 'black',
			outline: 0,
			fontSize: '1rem',
			display: 'block',
			margin: '1rem auto',
			cursor: 'pointer'
		}
	}
	
    return styles
}