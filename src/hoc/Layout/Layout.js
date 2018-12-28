import React from 'react';
import Wrap from '../Wrap/Wrap';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer'

class Layout extends React.Component {
  render() {
    return (
      <Wrap>
      	<Navigation />
      	<main className="mainContent">
      		{this.props.children}
      	</main>
       <Footer />
      </Wrap>
    );
  }
}

export default Layout;