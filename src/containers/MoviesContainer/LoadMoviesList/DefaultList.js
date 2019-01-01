import React, {Fragment, Component} from 'react';
import axios from '../../../axios-instanse'
import ReactPaginate from 'react-paginate';
import MoviesList from '../../../components/MoviesList/MoviesList';
import Spinner from '../../../components/UI/Spinner/Spinner';
import View from '../../../components/UI/View/View'


class DefaultMovieList extends Component {
	state = {
		movies: null,
		pageCount: 0,
		initialPage:1,
		currentPage: 1
	}
	
	componentWillMount() {
		const query = new URLSearchParams( this.props.location.search );
		const data = {};
		 for ( let param of query.entries() ) {
			data[param[0]] = + param[1]
		 }
		this.setState({
			currentPage: data.page,
			initialPage: data.page 
		})
	}

	componentDidMount() {
		const key = '8d78b90db54c424184c861d7a77d276e';
		const currentPage = this.state.currentPage;

		// Get a date range between today and one month ago to dynamically update the link for the request
	    let todayDate = new Date();
	    let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
	    let oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate();


	    axios.get(`/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
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

	    this.props.history.push(`${this.props.match.path}?page=${currentPage}`)
	    // console.log(this.props)

	}

	hrefBuilder = (page) => {
		return this.props.match.path + "?page=" + page
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
					<MoviesList movies={this.state.movies} />
					{pagination}
				</Fragment>)
		
	}
	
    return (
		<div className="container">
			<div className="head clearfix">
				<h2 className="page-title fl-left">Recently added movies</h2>
				<View/>
			</div>

			{wrapper}
		</div>
    )
  }
}

export default DefaultMovieList;