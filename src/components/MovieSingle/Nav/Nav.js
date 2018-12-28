import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const nav = (props) => { 

	const URL = props.match.url
	return(
		<div className="navigation">
			<div className="container">
				<ul className="nav">
					<li>
						<NavLink to={`${URL}/facts`}>Facts</NavLink>
					</li>
					<li>
						<NavLink to={`${URL}/cast_crew`}>Full Cast & Crew</NavLink>
					</li>
					<li>
						<NavLink to={`${URL}/backdrops`}>Images</NavLink>
						<ul>
							<li>
								<NavLink to={`${URL}/images/backdrops`}>Backdrops</NavLink>
							</li>
							<li>
								<NavLink to={`${URL}/images/posters`}>Poster</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to={`${URL}/similar`}>Similar Movies</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default nav