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
						<NavItem to="/movies" text="Films">
							<ul>
								<NavItem to="/movies/now_playing" text="now_playing"></NavItem>
								<NavItem to="/movies/popular" text="popular"></NavItem>
								<NavItem to="/movies/top_rated" text="top_rated"></NavItem>
								<NavItem to="/movies/upcoming" text="upcoming"></NavItem>
							</ul>
						</NavItem>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default navigation;
