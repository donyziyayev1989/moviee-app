import React from 'react';
import axios from 'axios'

import Wrap from '../../hoc/Wrap/Wrap'
import Movies from '../../components/Movies/Movies';
import ReactPaginate from 'react-paginate';

import './MoviesContainer.scss'

class MoviesContainer extends React.Component {
	state = {
		movies: null,
		pageCount: 0,
		initialPage:1,
		currentPage: 1
	}
	
	componentDidMount() {
		const key = '8d78b90db54c424184c861d7a77d276e';
		const currentPage = this.state.currentPage;

	    // Get a date range between today and one month ago to dynamically update the link for the request
	    let todayDate = new Date();
	    let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
	    let oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate();

	    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
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
	
	onPageChangeHandler = (page) => {
		const currentPage = page.selected + 1
		this.setState({currentPage: currentPage}, () => {
	      this.componentDidMount();
	    });
	}

  render() {

  	const pagination = <ReactPaginate 
      			containerClassName="pagination" 
      			activeClassName="active"
      			initialPage={this.state.initialPage - 1}
      			pageRangeDisplayed={2}
      			marginPagesDisplayed={2}
      			pageCount={this.state.pageCount}
      			onPageChange={this.onPageChangeHandler} />
    return (
    	<Wrap>
    		{pagination}

    		<Movies movies={this.state.movies} />
			
			{pagination}
      		
    	</Wrap>
    );
  }
}

export default MoviesContainer;