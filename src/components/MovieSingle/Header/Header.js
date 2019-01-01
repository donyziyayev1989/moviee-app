import React from 'react'
import Spinner from '../../UI/Spinner/Spinner'

import './Header.scss'

const header = (props) => {

	const {
		title,
		backdrop_path,
		poster_path,
		credits,
		release_date,
		overview,
		production_countries
	} = props;
	
	const bgImgSrc = 'https://image.tmdb.org/t/p/w1400_and_h450_face/'+ backdrop_path;

	const headerBg = backdrop_path && <div className="header_bg" style={{backgroundImage: `url(${bgImgSrc})` }}></div>
	
	let poster = <div className="image_content"> <Spinner size="small" theme="light"/></div>

	if (poster_path) {
		poster = <div className="image_content">
  		        	<img className="poster" src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+ poster_path} alt={title} /> 
  	            </div>
	}
	
	const year = release_date.split("-")[0];
	
	let countries = [];
	production_countries.map( country => countries.push(country.name) );
	
	const crewsList = credits.crew.slice(0,6).map((item, index) => {
		return (
			<li className="profile" key={index}>
	            <p className="name">{item.name}</p>
	            <p className="character">{item.job}</p>
	        </li>
		)
	});

	return(
		<div className="header" >
			{headerBg}
		  <div className="custom_bg" >
		    <div className="container">
		      
		      <section className="flexbox">

		      { poster_path && poster }
		        

		        <div className="header_poster_wrapper">
		          <section className="poster">
		            <div className="title mb-30">
		                <h2 className="movie_name">{title}</h2> 
		                <span className="release_date">({year})</span>
		            </div>


		            <div className="header_info ">
		            	{ overview && <div>
		            		<h3>Overview</h3>
				              <div className="overview mb-30">
				                  <p>{overview}</p>
				              </div>
		            	</div>
		            	}
		              
						
						{ countries.length > 0 && <div className="countries mb-30">
							<h3>Countries: </h3> 
							<span>{countries.join(", ")}</span>
			              </div>
						}
		              
						
						{credits.crew.length > 0 && (
							<div><h3 className="featured">Featured Crew</h3>
				              <ol className="people no_image">
				                  {crewsList}
				              </ol>
				            </div>)
						}
		            </div>
		          </section>
		        </div>

		      </section>
		    </div>
		  </div>
		</div>
	)
	
}

export default header;
