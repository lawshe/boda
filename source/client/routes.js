import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ReactGA from 'react-ga';

import wedding from '../../config/wedding';

import store from './store';

import MainLayout from './components/visitor/layout/layout';
import HomeLayout from './components/visitor/layout/home-layout';
import AdminLayout from './components/admin/layout/layout';
import NotFound from './components/shared/NotFound';

// Visitor
import Home from './components/visitor/home/Home';
import Rsvp from './components/visitor/rsvp/Rsvp';
import RsvpSearch from './components/visitor/rsvp-search/RsvpSearch';
import Details from './components/visitor/details/Details';
import Registry from './components/visitor/registry/Registry';
import CityGuide from './components/visitor/city-guide/CityGuide';

// Admin
import InvitationList from './components/admin/invitations/InvitationList';
import InvitationAdd from './components/admin/invitations/InvitationAdd';
import InvitationEdit from './components/admin/invitations/InvitationEdit';

// Sync routing history with redux store
const history = syncHistoryWithStore(browserHistory, store);

const gaTrackingId = wedding.api.googleAnalytics;

// Google Analytics
ReactGA.initialize(gaTrackingId);
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};


export default (
  <Router history={history} onUpdate={logPageView}>
    <Route path="/" component={HomeLayout}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/" component={MainLayout}>
      <Route path="rsvp" component={RsvpSearch} store={store} />
      <Route path="rsvp/:shortName" component={Rsvp} store={store} />
      <Route path="the-wedding" component={Details} />
      <Route path="city-guide" component={CityGuide} />
      <Route path="registry" component={Registry} />
      <Route path='*' component={NotFound} />
    </Route>
    <Route path="/admin" component={AdminLayout}>
      <Route path="invitations" component={InvitationList} />
      <Route path="invitations/add" component={InvitationAdd} />
      <Route path="invitations/edit/:id" component={InvitationEdit} />
    </Route>
  </Router>
);
