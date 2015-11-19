import React, {Component} from 'react';
import {Link} from 'react-router';
import extend from 'xtend';

class Header extends Component {
  render() {
    const linkStyle = {
      className: 'pure-menu-link',
      activeClassName: 'active'
    };

    const homeLinkStyle = extend(linkStyle, {
      className: 'pure-menu-heading pure-menu-link'
    });

    return (
      <div className="header">
        <div className="pure-menu pure-menu-horizontal">
          <Link to="/redux-simple-router-example" {...homeLinkStyle}>Home</Link>
          {'>'}
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <Link to="/redux-simple-router-example/foo" {...linkStyle}>Foo</Link>
            </li>

            <li className="pure-menu-item">
              <Link to="/redux-simple-router-example/bar" {...linkStyle}>Bar</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
