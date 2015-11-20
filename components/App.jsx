import React, {Component} from 'react';
import {Header, Footer} from './index';

class App extends Component {

  render() {
    const { header, content, footer } = this.props;

    const devToolsDisabled = (
      <p>
        Enable Dev Tools by setting <code>?devTools=true</code>. Or click <a href="/?devTools=true">here</a>!
      </p>
    );
    const devToolsEnabled = (
      <p>
        Check out the state changes in the sidebar when you navigate anywhere!
        <br />
        Click <a href="/">here</a> to disable.
      </p>
    );

    const defaultContent = (
      <div className="page centered-text">
        <img src="/images/download.png" />
        <p>
          This is a simple example of how to use redux-simple-router.
          <br />
          Please click the links at the top and check out the source!
        </p>
        {__DEVTOOLS ? devToolsEnabled : devToolsDisabled}
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
