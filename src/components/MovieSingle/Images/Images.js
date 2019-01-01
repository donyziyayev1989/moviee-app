import React, { Component, Fragment } from 'react';
import axios from '../../../axios-instanse.js';
import Spinner from '../../UI/Spinner/Spinner'
import './Images.scss'

class Images extends Component {

	state = {
		images: null,
		type: null
	}
	componentDidUpdate(prevProps) {
		if (prevProps.type !== this.props.type) {
			this.fetchData()
		}
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		const ID = this.props.match.params.id;
		const key = '8d78b90db54c424184c861d7a77d276e';
		const type = this.props.type;
		axios.get(`/movie/${ID}/images?api_key=${key}&language=en-US&include_image_language=en,null`)
			.then(response => {
				this.setState({
					images: response.data[type],
					type: this.props.type
				});
				console.log(response.data)
			});

	}

	render() {
		let page = <Spinner size="small" />
		const URL = 'http://image.tmdb.org/t/p/'
		let classes = "col col2";
		let width = "w500";

		if (this.props.type === "posters") {
			classes = "col col4";
			width = "w342";
		}
		if (this.state.images) {
			page = <Fragment>
				<h3>{this.state.type}</h3>

				<div className="flexbox">
					<div className="row">
					{this.state.images.map((img, index )=> {
						return <div className={classes} key={index}>
							<div className="movie-img">
								<a href={`${URL}/original/${img.file_path}`} target="_blank">
									<img src={`${URL}/${width}/${img.file_path}`} alt="" className="img-full"/>
									
								</a>
								<div className="info">
									Size: {img.width} x {img.height}
								</div>
							</div>
						</div>
					})}
					</div>
				</div>
			</Fragment>
		}

		return page
	}
}
export default Images;