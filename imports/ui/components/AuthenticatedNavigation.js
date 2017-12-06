import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import { Header, Navigation,Drawer,Icon } from 'react-mdl';


const handleLogout = () => Meteor.logout();

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = () => (
  <div>
  <Header title={<span><span style={{ color: '#ddd' }}></span><strong>ISAMM CLUBS</strong></span>}>
            <Navigation>
                <a href="#"><NavLink to ="/CreateEvent">Create Event <Icon name="event" /> </NavLink> </a>
                <a href="#"><NavLink to ="/CalendarLocale"> Local <Icon name="home" /> </NavLink> </a>
                <a href="#"><NavLink to ="/staff"> Staff <Icon name="card_membership" /> </NavLink> </a>
                  <a href="#"><NavLink to ="/ClubDescription">  Club <Icon name="supervisor_account" /> </NavLink> </a>
                <a href="#"><NavLink to ="/CreateEvent"> Profile <Icon name="account_box" /> </NavLink></a>
            </Navigation>
        </Header>

        </div>
);

export default AuthenticatedNavigation;
