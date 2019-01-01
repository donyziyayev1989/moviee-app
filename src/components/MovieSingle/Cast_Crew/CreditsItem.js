import React from 'react';
import { Link } from 'react-router-dom'


const creditsItem = (props) => {
	let gender = "female"

	if (props.gender === 2 || props.gender === 0) {
		gender = "male";
	} 


	let imgSrc;
	if (props.imgSrc) {
		imgSrc = <img src={'https://image.tmdb.org/t/p/w66_and_h66_face/' + props.imgSrc} alt={props.name}/> 
	} else {
		imgSrc = <div className={`no-image ${gender}`}></div>
	}

	
		
	return (
		<div className="flexbox credit">
			<Link to="/link" className="credit__img">{imgSrc}</Link>
			<div className="credit__info">
				<Link to="link" className="credit__name">{props.name}</Link>
				<p>{props.extra}</p>
			</div>
		</div>
	)
}

export default creditsItem;
