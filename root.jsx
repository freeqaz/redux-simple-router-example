import React from 'react';
import {Route} from 'react-router';

import {Foo, Bar, App} from './components';

export default function getRoutes() {
  return (
    <Route path="/" component={App}>
      <Route path="foo" components={{content: Foo}}/>
      <Route path="bar" components={{content: Bar}}/>
    </Route>
  );
}
