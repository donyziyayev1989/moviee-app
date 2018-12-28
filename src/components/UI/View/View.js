import React from 'react';
import './View.scss'

const view = (props) => {
	return (
		<form className="view">
			<select id="view__cols">
				<option value="col_1">1 col</option>
				<option defaultValue value="col_2">2 cols</option>
				<option value="col_3">3 cols</option>
			</select>
			<select id="view__cols">
				<option value="view_1">Compcapt View</option>
				<option defaultValue value="view_2">Poster Card View</option>
				<option value="view_3">Backdrop Card View</option>
			</select>
		</form>
	)
}

export default view;
	