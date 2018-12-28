import React from 'react';
import axios from '../../axios-instanse';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Header from '../../components/MovieSingle/Header/Header';
import Nav from '../../components/MovieSingle/Nav/Nav'


import Spinner from '../../components/UI/Spinner/Spinner';
import Wrap from '../../hoc/Wrap/Wrap';

// Routes
import Facts from '../../components/MovieSingle/Facts/Facts'
import Cast_Crew from '../../components/MovieSingle/Cast_Crew/Cast_Crew'
import MoviesSimilar from '../../components/MovieSingle/MoviesSimilar/MoviesSimilar'


class MovieSingleContainer extends React.Component {

	state = {
		movie:null,
		loading:true
	}

	componentDidMount() {
		const key = '8d78b90db54c424184c861d7a77d276e';
		const ID = this.props.match.params.id;

	    axios.get(`/movie/${ID}?api_key=${key}&language=en-US&append_to_response=credits&with_keywords`)
	      .then(response => {
	        const data = response.data;
	        this.setState({ 
	        	movie: data,
	        	loading:false
	        });
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

			const facts = {

			}

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

					<Nav {...this.props}/>
					
					<div className="container">
						<div className="tab-content">
							
							<Switch>
							<Redirect from={this.props.match.url} exact to={`${this.props.match.url}/facts`} />	
								<Route 
									path={`${this.props.match.url}/facts`} 
									render={(props) => <Facts {...this.state.movie} />} />
								<Route 
									path={`${this.props.match.url}/cast_crew`} 
									render={(props) => <Cast_Crew credits={credits} />} />
								<Route 
									path={`${this.props.match.url}/similar`} 
									render={() => <MoviesSimilar title="Similar Movies" id={this.props.match.params.id} /> }/>
							</Switch>
						</div>

					</div>
				</Wrap>
			)
		}
		return page
	}
}

export default MovieSingleContainer;


