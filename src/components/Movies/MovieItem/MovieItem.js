import React from 'react';
import { Link } from 'react-router-dom'

import Spinner from '../../UI/Spinner/Spinner'

import './MovieItem.scss';



const movie = (props) => { 

	// let poster = <Spinner size="small" />
	let poster = <img className="poster" alt={props.title} src="http://via.placeholder.com/300x450" />
	
	if (props.poster_path) {
		poster = <img className="poster" alt={props.title} src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} />
	} 

	console.log(props.poster_path)
	return ( 
		<div className="col col2">
			<div className="MovieItem" id={props.id}>
			    <div className="MovieItem__image">
			        <Link className="result" to={"/movie/" + props.id} title={props.title} alt={props.title}>
				      	{poster}
			     	</Link>
			    </div>
			    <div className="MovieItem__info">
			        <div className="wrapper">
			            <div className="rating">
							<div className="rating__inner">{props.vote_average}	</div>
			            </div>
			            <div className="MovieItem__title">
			                <Link id={props.id} className="title" to={"/movie/" + props.id} title={props.title} alt={props.title}>{props.title}</Link>
			                <span className="date">{props.release_date}</span>
			            </div>
			        </div>
			        <p className="overview">{props.overview}</p>
			        <p className="view_more"><Link id={props.id} className="result" to={"/movie/" + props.id} title={props.title} alt={props.title}>More Info</Link></p>
			    </div>
			  </div>
		</div>
	)
}

export default movie;
