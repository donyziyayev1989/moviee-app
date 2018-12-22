import React from 'react'

import './Spinner.scss'

const spinner = (props) => {
	let classes = ['loader', props.size];

	return (
		<div className={classes.join(" ")}>Loading...</div>
	)
}

export default spinner;
