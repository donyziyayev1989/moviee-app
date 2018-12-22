import React from 'react'
import './Navigation.scss';
import Logo from './Logo/Logo'

import NavItem from './NavItem/NavItem'

const navigation = (props) => {
	return (
		<nav className="nav">
			<div className="container">
				<div className="logo-wrap">
					<Logo />
				</div>
				<div className="menu">
					<ul className="nav-menu">
						<NavItem>Films</NavItem>
						<NavItem>Films</NavItem>
						<NavItem>Films</NavItem>
						<NavItem>Films</NavItem>

					</ul>
				</div>
			</div>
		</nav>
	)
}

export default navigation;
