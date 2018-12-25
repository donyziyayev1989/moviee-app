import React from 'react';


import MovieSingle from '../../components/MovieSingle/MovieSingle'

class MovieContainer extends React.Component {
	
	render() {
		const ID = this.props.match.params.id;

		return (
		  <MovieSingle id={ID} />
		);
	}
}

export default MovieContainer;