import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.3rem;
    background: transparent;
    border: 0.6rem solid var(--lightblue);
    border-color: ${props => props.cart? "var(--mainYellow)":"var(--lightblue)"};
    color:  ${props => props.cart? "var(--mainYellow)":"var(--lightblue)"};
    border-radius: 0.4rem;
    padding: 0.2rem 0.4rem;
    cursor: pointer;
    margin: 0.2rem 0.4rem 0.2rem 0;
    transition: all 0.6s ease-in-out;
    &:hover{
        background: ${props => props.cart? "var(--mainYellow)":"var(--lightblue)"};
        color:var(--mainBlue);
    }`
    ;