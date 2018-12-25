import React from 'react'

import './Spinner.scss'

const spinner = (props) => {
	let classes = ['loader', props.size, props.theme];

	return (
		<div className={classes.join(" ")}>Loading...</div>
	)
}

export default spinner;
