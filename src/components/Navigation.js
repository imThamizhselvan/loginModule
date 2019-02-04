import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import { ParentList, Button } from './styles';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <ParentList>
    <div><Link to={routes.LANDING}>Home Page</Link></div>
    <div><SignOutButton /></div>
  </ParentList>

const NavigationNonAuth = () =>
  <ParentList>
    <div><Link to={routes.LANDING}>Landing Page</Link></div>
    <div><Button><Link to={routes.SIGN_IN}>Sign In</Link></Button></div>
  </ParentList>

export default Navigation;
