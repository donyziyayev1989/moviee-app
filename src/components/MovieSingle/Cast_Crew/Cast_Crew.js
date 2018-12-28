import React from 'react'

import CreditsItem from './CreditsItem'

import classes from './Cast_Crew.scss'



const casts = ({credits}) => {
	
	const castList = credits.cast;
	const crewList = credits.crew;
	

	// Grouping items in departments
	const departments = {};
	const departmentList = [];

	crewList.map((item) => {
	  if (!departments.hasOwnProperty(item.department)) {
	  	departments[item.department] = []
	  }
	  if (departments.hasOwnProperty(item.department)) {
	  	departments[item.department].push(item)
	  }
	});

	for (let key in departments) {
        departmentList.push({
        	key,
            list: departments[key]
        });
    }
    // Sorting departments by its' name
    function compare(a,b) {
	  if (a.key < b.key)
	    return -1;
	  if (a.key > b.key)
	    return 1;
	  return 0;
	}

	departmentList.sort(compare);
	
	return (
		<div className="credits flexbox">
			<div className="col2">
				<h3>Cast <span className="credits__count">{castList.length}</span></h3>
				<ul className="credits-list">
					{castList.map((cast, index) => {
						return( <li key={index}>
							 <CreditsItem 
							 	id={cast.id} 
							 	imgSrc={cast.profile_path} 
							 	name={cast.name} 
							 	extra={cast.character} 
							 	gender={cast.gender}/>
						</li>)
					})}
				</ul>
			</div>
			<div className="col2">
				<h3>Crew <span className="credits__count">{crewList.length}</span></h3>
					{departmentList.map(department => {
						return(
							<div key={department.key} className="department">
								<h4>{department.key}</h4>
								<ul className="credits-list">
								{department.list.map((crew, index) => {
									return( <li key={index}>
										 <CreditsItem 
										 	id={crew.id} 
										 	imgSrc={crew.profile_path} 
										 	name={crew.name} 
										 	extra={crew.job} 
										 	gender={crew.gender}/>
									</li>)
								})}
								</ul>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default casts;
