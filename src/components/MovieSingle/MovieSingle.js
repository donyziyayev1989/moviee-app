import React from 'react';
import axios from '../../axios-instanse';

import Header from './Header/Header';
import Spinner from '../UI/Spinner/Spinner';
import Wrap from '../../hoc/Wrap/Wrap'

class MovieSingle extends React.Component {

	state = {
		movie:null,
		loading:true
	}

	componentDidMount() {
		const key = '8d78b90db54c424184c861d7a77d276e';

	    axios.get(`/movie/${this.props.id}?api_key=${key}&language=en-US&append_to_response=credits`)
	      .then(response => {
	        const data = response.data;
	        this.setState({ 
	        	movie: data,
	        	loading:false
	        });
	        console.log(data)
	      })
	      .catch(err => {
	        console.log('Fetch Error :-S', err);
	      })
	}

	render() {

		let page = <Spinner />;

		if (this.state.movie) {

			const {
				title,
				backdrop_path,
				poster_path,
				credits,
				genres,
				release_date,
				overview,
				production_countries
			} = this.state.movie;

			page = (
				<Wrap>
					<Header 
					title={title} 
					release_date={release_date}
					poster_path={poster_path} 
					backdrop_path={backdrop_path} 
					credits={credits}
					overview={overview}
					loading={this.state.loading}
					production_countries={production_countries}/>

				</Wrap>
			)
		}

		// const {

		// } = this.state.movie

		return page
	}
}

export default MovieSingle;