import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from '../Details';
import Cart from '../Cart/Cart';
import Default from '../Default'; 
import Modal from '../Modal';
import Navigation from '../Navigation';
import LandingPage from '../Landing'; 
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home'; 
import AccountPage from '../Account';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (

  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.DETAILS} component={Details} />
      <Route exact path={ROUTES.CART} component={Cart} />
      <Route exact path={ROUTES.DEFAULT} component={Default} />
  

    </div>
    <Modal />
  </Router>

);

export default withAuthentication(App);