import React from 'react';
import {Link} from 'react-router-dom'
import Wrap from '../../../hoc/Wrap/Wrap'

import './Facts.scss'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const facts = (props) => {
	if (props.runtime) {
		var runtime_days = (props.runtime / (24*60)).toFixed(0);
		var runtime_hours = ((props.runtime - runtime_days * 24) / 60).toFixed(0);
		var runtime_minutes = ((props.runtime - runtime_days * 24 - runtime_hours * 60)).toFixed(0);
		var time = "";
		if (runtime_days>0) {
			time += runtime_days + "d  "
		}
		if (runtime_hours > 0) {
			time += runtime_hours + "h  "
		}
		if (runtime_minutes > 0) {
			time += runtime_minutes + "m"
		}
		
	}

	return (
		<Wrap>
			<h2 className="mb-20">Facts</h2>
			<div className="fact_item">
				<h5>Status</h5>
				<p>{props.status}</p>
			</div>
			<div className="fact_item">
				<h5>Release Information</h5>
				<p>{props.release_date}</p>
			</div>
			<div className="fact_item">
				<h5>Original Language</h5>
				<p>{props.original_language}</p>
			</div>
			<div className="fact_item">
				<h5>Runtime</h5>
				<p> {time}</p>
			</div>
			<div className="fact_item">
				<h5>Budget</h5>
				<p>${numberWithCommas(props.budget)}</p>
			</div>
			<div className="fact_item">
				<h5>Revenue</h5>
				<p>${numberWithCommas(props.revenue)}</p>
			</div>
			<div className="fact_item">
				<h5>Genres</h5>
				<p>{props.genres.map(item => {
					return <Link key={item.id} to={`/genre/${item.id}`} className="tag">
						{item.name}
					</Link>
					})}
				</p>
			</div>
			<div className="fact_item">
				<h5>Production companies</h5>
				<p>{props.production_companies.map(item => {
					return <span key={item.id} className="company">
						{item.name} 
					</span>
					})}
				</p>
			</div>
		</Wrap>
	)
}

export default facts;
