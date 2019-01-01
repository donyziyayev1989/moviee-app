import React, {Component} from 'react';
import './View.scss'

class View extends Component {

	state = {
		cols: 2,
		view: 'poster'
	}

	onChangeColumnsHandler = (event) => {
		this.props.onChangeColumns(+event.target.value);
		this.setState({cols:+event.target.value})
	}

	onChangeViewHandler = (event) => {
		this.props.onChangeView(event.target.value);
		this.setState({view:event.target.value})
	}
	
	render() {
		return (
			<form className="view">
				<select id="cols_count" value={this.state.cols} onChange={(event) => this.onChangeColumnsHandler(event)}>
					<option value="1">1 col</option>
					<option value="2">2 cols</option>
					<option value="3">3 cols</option>
				</select>
				<select id="view__cols" value={this.state.view} onChange={(event) => this.onChangeViewHandler(event)}>
					<option value="compact">Compcapt View</option>
					<option value="poster">Poster Card View</option>
					<option value="backdrop">Backdrop Card View</option>
				</select>
			</form>
		)
	}
}

export default View;
	