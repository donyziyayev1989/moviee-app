import React from 'react';
import MovieItem from './MovieItem/MovieItem';
import Wrap from '../../hoc/Wrap/Wrap'

import './MoviesList.scss'
class Movies extends React.Component {

	render() {

		return (
			<Wrap>
				<div className="MoviesWrap" >
					{this.props.movies.map((movie, index) => {
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
				  	})}
				</div>
			</Wrap>
		  


		);
	}
}

export default Movies;