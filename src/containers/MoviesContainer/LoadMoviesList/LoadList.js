import React, {Component, Fragment} from 'react';
import axios from '../../../axios-instanse'

import ReactPaginate from 'react-paginate';
import MoviesList from '../../../components/MoviesList/MoviesList';
import Spinner from '../../../components/UI/Spinner/Spinner';
import View from '../../../components/UI/View/View'

class MoviesContainer extends Component {
	state = {
		movies: null,
		pageCount: 0,
		initialPage:0,
		currentPage: 1,
		cols:2,
		view:'poster'
	}
	componentWillMount() {
		const query = new URLSearchParams( this.props.location.search );
		const data = {};
		 for ( let param of query.entries() ) {
			data[param[0]] = + param[1]
		 }
		
		// After hard refresh or entering url by hand will render proper page
		const page = data.page === undefined ? 1 : data.page;
		this.setState({
			currentPage: page,
		})
		
	}


	componentWillReceiveProps(newProps) {
		if (this.props.match.params.list !== newProps.match.params.list) {
			// If changes location We should change currenPage
			this.fetchData(newProps.match.params.list, 1);
			this.setState({
				currentPage:1
			})
		}

	}

	// componentDidUpdate(prevProps, prevState) {
	// 	if(prevState.cols !== this.state.cols) {
			
	// 	}
	// }

	componentDidMount() {
		this.fetchData(this.props.match.params.list, this.state.currentPage);
	}
	
	fetchData = function(list, currentPage) {
		const key = '8d78b90db54c424184c861d7a77d276e';
		
	    axios.get(`/movie/${list}?api_key=${key}&language=en-US&page=${currentPage}`)
	      .then(response => {
	        const data = response.data;
	        this.setState({ 
	        	movies: data.results,
	        	pageCount:data.total_pages
	        });
	      })
	      .catch(err => {
	        console.log('Fetch Error :-S', err);
	      })
	}
	
	// Changing views of movies
	changeColumnsHandler = (col) => {
		this.setState({cols: col});
	}
	changeViewHandler = (view) => {
		this.setState({view: view});
	}

	// Update pagination active state
	onPageChangeHandler = (page) => {
		const currentPage = page.selected + 1
		this.setState({currentPage: currentPage}, () => {
	      this.componentDidMount();
	    });

	    this.props.history.push(`${this.props.match.url}?page=${currentPage}`)

	}

	hrefBuilder = (page) => {
		return this.props.match.path + "?page=" + page
	}


	// Set page titles
	getTitle(location) {
		return this.props.pageTitles.filter(item => item.location === location)[0]
	}

  render() {
  	let wrapper = <Spinner />

	if (this.state.movies) {
		const pagination = <ReactPaginate 
		      			containerClassName="pagination" 
		      			activeClassName="active"
		      			initialPage={this.state.initialPage}
		      			pageRangeDisplayed={2}
		      			forcePage={this.state.currentPage - 1}
		      			marginPagesDisplayed={2}
		      			pageCount={this.state.pageCount}
		      			disableInitialCallback={true}
		      			hrefBuilder={this.hrefBuilder}
		      			onPageChange={this.onPageChangeHandler} />;

		wrapper = (<Fragment>
					{pagination}
					<MoviesList movies={this.state.movies} columns={this.state.cols} view={this.state.view} />
					{pagination}
				</Fragment>)
		
	}
	
    return (
		<div className="container">
			<div className="head clearfix">
				<h2 className="page-title">{this.getTitle(this.props.match.params.list).title}</h2>
				<View onChangeColumns={this.changeColumnsHandler} onChangeView={this.changeViewHandler} />
			</div>

			{wrapper}
		</div>
    )
  }
}

export default MoviesContainer;