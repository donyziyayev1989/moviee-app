import React, { Component, Fragment } from 'react';
import axios from '../../../axios-instanse.js';
import Spinner from '../../UI/Spinner/Spinner';

import './Videos.scss'

class Videos extends Component {
	state = {
		videos: null,
		error: null,
		loading:true
	}
	componentDidMount() {
		this.fetchData(this.props.id)
	}
	componentDidUpdate(prevProps) {
		if (prevProps.id !== this.props.id) {
			this.fetchData(this.props.id)
		}
		
	}

	fetchData(id) {
		const key = '8d78b90db54c424184c861d7a77d276e';
		axios.get(`movie/${id}/videos?api_key=${key}&append_to_response=videos&language=en-US`)
			.then(response => {
				this.setState({videos: response.data.results, loading:false});
			})
			.catch(err => {
				this.setState({error:err, loading:false})
			})
	}
	render() {
		let videos = this.state.error ? <p>Videos can't be loaded!</p> : <Spinner size="small"/>;
		
		if (this.state.loading) {
			videos = <Spinner size="small"/>
		}

		if (this.state.videos) {
			videos = <div className="flexbox videoContainer">
				<div className="row">
					{this.state.videos.map((video, i )=> {
						return <div className="col col2 video" key={i}>
							<div className="videoWrapper">
								<iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</div>
						</div>
					})}
				</div>
			</div>
		}

		

		return videos
	}
}

export default Videos