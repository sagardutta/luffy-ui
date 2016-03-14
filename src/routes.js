import React from 'react';

import {Route, IndexRoute } from 'react-router';

import App from './components/app';
import SearchPage from './containers/search_page';
import PostAd from './containers/post_admission';


export default(
  <Route path='/' component={App} >
    <IndexRoute component={SearchPage} />
     <Route path='posts/new' component={PostAd} />
  </Route>
);
