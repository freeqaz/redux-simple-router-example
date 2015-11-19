import React, {Component} from 'react';
import {Header, Footer} from './index';

class App extends Component {
  render() {
    const { header, content, footer } = this.props;

    const defaultContent = (
      <div className="page">
        <img src="/redux-simple-router-example/images/download.png" />
        <div className="centered-text">
          This is a simple example of how to use redux-simple-router.
          <br />
          Please click the links at the top and check out the source!
        </div>
      </div>
    );

    return (
      <div className="content">
        {header  || <Header />}

        {content || defaultContent}

        {footer  || <Footer />}
      </div>
    );
  }
}

export default App;
