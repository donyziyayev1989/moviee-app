import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import MoviesContainer from './containers/MoviesContainer/MoviesContainer';
import MovieSingleContainer from './containers/MovieSingleContainer/MovieSingleContainer';
import Layout from './hoc/Layout/Layout';



import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        	<Switch>
        		<Route path="/movie/:id" render={(props) => <MovieSingleContainer {...props} />}/>
      			<Route path="/movies" component={MoviesContainer}/>
        	</Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
