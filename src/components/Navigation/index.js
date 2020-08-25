import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5 fixed-top">
  <ul className="navbar-nav align-items-center">
    
    <li className="nav-link nav-item ml-5">
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li className="nav-link nav-item ml-5">
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li className="nav-link nav-item ml-5">
      <Link to="/">
      <SignOutButton />
      </Link>
    </li>
    <li>
    <Link to="/cart" className="nav-link nav-item ml-5">
      <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
            </ButtonContainer>
        </Link>
        </li>
  </ul>
  </Nav>
);

const NavigationNonAuth = () => (
  <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5 fixed-top">
  <ul className="navbar-nav align-items-center">

    <li className="nav-link">
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li className="nav-link nav-item ml-5">
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
  </Nav>
);

const Nav = styled.nav`
  background: var(--mainYellow);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.2rem;
    text-transform:capitalize;
  }
`; 

const ButtonContainer = styled.button`
text-transform: capitalize;
font - size: 1.4rem;
border: 0.05rem solid var(--lightBlue);
border - radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
display: inline - block;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease -in -out;
&: hover {
background: var(--lightBlue);
color: var(--mainBlue);
}
`;

export default Navigation;