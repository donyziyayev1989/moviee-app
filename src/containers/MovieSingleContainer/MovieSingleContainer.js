import React, { Fragment, Component} from 'react';
import axios from '../../axios-instanse';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../../components/MovieSingle/Header/Header';
import Nav from '../../components/MovieSingle/Nav/Nav'


import Spinner from '../../components/UI/Spinner/Spinner';

// Routes
import Facts from '../../components/MovieSingle/Facts/Facts'
import CastCrew from '../../components/MovieSingle/Cast_Crew/Cast_Crew'
import MoviesSimilar from '../../components/MovieSingle/MoviesSimilar/MoviesSimilar'
import Images from '../../components/MovieSingle/Images/Images'
import Videos from '../../components/MovieSingle/Videos/Videos'

class MovieSingleContainer extends Component {

	state = {
		movie:null,
		loading:true
	}

	componentDidMount() {
		this.fetchData(this.props.match.params.id)
	}
	
	componentDidUpdate(prevProps){
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.fetchData(this.props.match.params.id)
		}
	}


	fetchData(id) {
		const ID = id;
		const key = '8d78b90db54c424184c861d7a77d276e';

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
        this.setState({ 
        	error: err,
        	loading:false
        });
      });

      // console.log(id)
	}

	render() {

		let page = <Spinner />;

		const URL = this.props.match.url;

		if (this.state.movie) {

			const {
				id,
				title,
				backdrop_path,
				poster_path,
				credits,
				release_date,
				overview,
				production_countries
			} = this.state.movie;


			page = (
				<Fragment>
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
								<Redirect from={URL} exact to={`${URL}/facts`} />	
								<Route 
									path={`${URL}/facts`} 
									render={(props) => <Facts {...this.state.movie} />} />
								<Route 
									path={`${URL}/cast_crew`} 
									render={(props) => <CastCrew credits={credits} />} />
								<Route 
									path={`${URL}/similar`} 
									render={() => <MoviesSimilar title="Similar Movies" id={this.props.match.params.id} /> }/>
								<Route 
									path={`${URL}/images/backdrops`} 
									render={(props) => <Images id={id} type="backdrops" {...this.props} />} />
								<Route 
									path={`${URL}/images/posters`} 
									render={(props) => <Images id={id} type="posters" {...this.props} />} />
								<Route 
									path={`${URL}/videos`} 
									render={(props) => <Videos id={id} {...this.props} />} />
							</Switch>
						</div>

					</div>
				</Fragment>
			)
		}
		return page
	}
}

export default MovieSingleContainer;


