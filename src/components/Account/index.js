import React from 'react';
import Title from '../Title';
import styled from 'styled-components';
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Nav>
      <div className = "text-center">
        <Title name="Account: " title=""/>
        <h1>{authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
      </Nav>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);

const Nav = styled.nav`
width: 600px;
  padding: 10px;
  border: 10px solid lightBlue;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`; 