import React from 'react'


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
			<a href="link" className="credit__img">{imgSrc}</a>
			<div className="credit__info">
				<a href="link" className="credit__name">{props.name}</a>
				<p>{props.extra}</p>
			</div>
		</div>
	)
}

export default creditsItem;
