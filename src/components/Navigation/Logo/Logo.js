import React from 'react'
import logoImg from '../../../assets/logo.svg';
import './Logo.scss'

const logo = (props) => (
	<a href="/" className="logo">
		<img src={logoImg} alt="The Movie Database (TMDb)"/>
	</a>
)

export default logo;
