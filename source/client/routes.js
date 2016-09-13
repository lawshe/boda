import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

import MainLayout from './components/visitor/layout/layout';
// import HomeLayout from './components/visitor/layout/home-layout'
import AdminLayout from './components/admin/layout/layout';

// Visitor
import Home from './components/visitor/home/Home';
import Rsvp from './components/visitor/rsvp/Rsvp';
import RsvpSearch from './components/visitor/rsvp-search/RsvpSearch';
import Details from './components/visitor/details/Details';
import Registry from './components/visitor/registry/Registry';
import CityGuide from './components/visitor/city-guide/CityGuide';

// Admin
import InvitationList from './components/admin/invitations/InvitationList';
import InvitationAdd from './components/admin/invitations/add/InvitationAdd';

// Sync routing history with redux store
const history = syncHistoryWithStore(browserHistory, store);

export default (
  <Router history={history}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
