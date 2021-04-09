import styled from 'styled-components';
 
export const StyledToggle = styled.button`

position: absolute;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 1.8rem;
height: 1.8rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
    outline: none;
  }

div {
    width: 1.8rem;
    height: 0.25rem;
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        background: ${({ open }) => open ? 'rgb(14,155,249)' : 'black'};
      }
  
      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'scale(0.1)' : 'scale(1)'};
        background: black;
      }
  
      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        background: ${({ open }) => open ? 'rgb(14,155,249)' : 'black'};
    }
  }

`;