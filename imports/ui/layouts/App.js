import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

import { Layout,Content } from 'react-mdl';
import 'react-big-calendar/lib/css/react-big-calendar.css' ;


import Public from '../pages/Public';
import Authenticated from '../pages/Authenticated';
import AppNavigation from '../components/AppNavigation';
import Index from '../pages/Index';
import Documents from '../pages/Documents';
import NewDocument from '../pages/NewDocument';
import EditDocument from '../containers/EditDocument';
import ViewDocument from '../containers/ViewDocument';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';






//***********import the pages***********************//

import Clubs from '../pages/Clubs' ;
import Contact from '../pages/Contact';
import Events from '../pages/Events' ;
import Login from '../pages/Login' ;
import Home from '../pages/Home' ;
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';

//**************Authenticatd pages****************//
import Staff from '../pages/Dashboard_Staff/Staff';
import CreateEvent from '../pages/Dashboard_Staff/CreateEvent';
import ClubDescription from '../pages/Dashboard_Staff/ClubDescription';
import CalendarLocale from '../pages/Dashboard_Staff/CalendarLocale';
import CalendarEvents from '../pages/Dashboard_Staff/CalendarEvents';




const App = appProps => (
  <Router>
  <div>
  <Layout fixedHeader fixedDrawer>
      <AppNavigation {...appProps} />
      <Content>
        <Switch>
          <Route exact name="index" path="/" component={Index} />

          <Authenticated exact path="/documents" component={Documents} {...appProps} />
          <Authenticated exact path="/documents/new" component={NewDocument} {...appProps} />
          <Authenticated exact path="/documents/:_id" component={ViewDocument} {...appProps} />
          <Authenticated exact path="/documents/:_id/edit" component={EditDocument} {...appProps} />



        <Authenticated exact path="/staff" component={Staff} {...appProps} />
        <Authenticated exact path="/CreateEvent" component={CreateEvent} {...appProps} />
        <Authenticated exact path="/ClubDescription" component={ClubDescription} {...appProps} />
        <Authenticated exact path="/CalendarLocale" component={CalendarLocale} {...appProps} />
        <Authenticated exact path="/CalendarEvents" component={CalendarEvents} {...appProps} />

          <Public path="/signup" component={Signup} {...appProps} />
          <Public path="/login" component={Login} {...appProps} />

          <Public path="/clubs" component={Clubs} {...appProps} />
          <Public path="/events" component={Events} {...appProps} />
          <Public path="/contact" component={Contact} {...appProps} />

          <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
          <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
          <Route component={NotFound} />
        </Switch>
      </Content>

      </Layout>
      </div>
  </Router>
);

App.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
};

const composer = (props, onData) => {
  const loggingIn = Meteor.loggingIn();
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
};

export default composeWithTracker(composer)(App);
