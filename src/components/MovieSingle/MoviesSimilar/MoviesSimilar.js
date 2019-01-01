import React from 'react';
import Slider from "react-slick";
import axios from '../../../axios-instanse.js';

import MovieItem from '../../MovieItem/MovieItem'
import Spinner from '../../UI/Spinner/Spinner'
import Wrap from '../../../hoc/Wrap/Wrap'

import './MoviesSimilar.scss'



class MoviesSimilar extends React.Component {
	state = {
		movies: null,
		loading:true,
		error:null
	}

	componentDidMount() {
		const ID  = this.props.id;
		const key = '8d78b90db54c424184c861d7a77d276e';

		axios.get(`/movie/${ID}/similar?api_key=${key}&language=en-US&sort_by=popularity&page=1`)
			.then(response => {
				const data = response.data;
				this.setState({
					movies: data.results,
					loading: false
				})
			})
			.catch( err => {
				this.setState({error:err,loading:false})
			})
	}

  render() {
  	const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows:false,
      slidesToShow: 5,
      slidesToScroll: 5
    };
	
	let slider;
    if (this.state.loading) {
		 slider = <Spinner size="small"/>
	}

	if (this.state.movies) {
		slider = <Slider {...settings}>
          {this.state.movies.map((item, index) => {
			return <MovieItem key={index} {...item} view="compact" />
          })}
    	</Slider>;
	}

    return (
    	<Wrap>
    		<h3>{this.props.title}</h3>
    		{slider}
    	</Wrap>
    )
  }
}

export default MoviesSimilar;