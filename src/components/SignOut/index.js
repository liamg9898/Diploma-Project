import React from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';

const SignOutButton = ({ firebase }) => (
  <ButtonContainer type="button" onClick={firebase.doSignOut}>
  Sign Out 
  </ButtonContainer>
  
);

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

export default withFirebase(SignOutButton);