import React from 'react'
import './Navigation.scss';
import Logo from './Logo/Logo'

import NavItem from './NavItem/NavItem'

const navigation = (props) => {
	return (
		<header className="site-header">
			<div className="container">
				<div className="logo-wrap">
					<Logo />
				</div>
				<div className="menu">
					<ul className="nav-menu">
						<NavItem to="/movies/popular" text="Movies">
							<ul>
								<NavItem to="/movies/popular" text="Popular"></NavItem>
								<NavItem to="/movies/now_playing" text="Now playing"></NavItem>
								<NavItem to="/movies/top_rated" text="Top rated"></NavItem>
								<NavItem to="/movies/upcoming" text="Upcoming"></NavItem>
							</ul>
						</NavItem>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default navigation;
