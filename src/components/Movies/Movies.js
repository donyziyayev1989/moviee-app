import React from 'react';

import MovieItem from './MovieItem/MovieItem';
import Spinner from '../UI/Spinner/Spinner'

import './Movies.scss'
class Movies extends React.Component {

	render() {
		let movies = <Spinner size="large"/>;

		if (this.props.movies) {
			movies = this.props.movies.map((movie, index) => {
				const {
					id,
					title,
					poster_path,
					release_date,
					overview,
					vote_average
				} = movie;
		  		return (
					<MovieItem key={index} column="2" 
						id={id}
						title={title}
						poster_path={poster_path}
						release_date={release_date}
						overview={overview}
						vote_average={vote_average}
						 />

		  		)
		  	})
		}
		return (
		  <div className="MoviesWrap" >
			{movies}
		  </div>
		);
	}
}

export default Movies;