import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './MoviesContainer.scss'

import DefaultList from './LoadMoviesList/DefaultList'
import LoadList from './LoadMoviesList/LoadList'

const pageTitles = [
	{location:'/', title: "All Movies"},
	{location:'now_playing', title: "Now Playing Movies"},
	{location: 'popular', title: 'Popular Movies'},
	{location: 'top_rated', title: 'Top rated Movies'},
	{location: 'upcoming', title: 'Upcoming Movies'}
]

class MoviesContainer extends React.Component {
	render() {

		return (
			<div className="container">
				<Switch>
					<Route path={`${this.props.match.path}/:list(now_playing|popular|top_rated|upcoming)`} render={(props) => <LoadList pageTitles={pageTitles} {...props}/>} />
				</Switch>
			</div>
		);
	}
}

export default MoviesContainer;