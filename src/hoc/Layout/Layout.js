import React from 'react';
import Wrap from '../Wrap/Wrap';
import Navigation from '../../components/Navigation/Navigation'

class Layout extends React.Component {
  render() {
    return (
      <Wrap>
      	<Navigation />
      	<main className="mainContent container">
      		{this.props.children}
      	</main>
      </Wrap>
    );
  }
}

export default Layout;