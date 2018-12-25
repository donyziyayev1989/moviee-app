import React from 'react'
import { Link } from 'react-router-dom'

const navItem = (props) => {
	return (
		<li><Link to={props.to}>{props.text}</Link>{props.children}</li>
	)
}

export default navItem;
