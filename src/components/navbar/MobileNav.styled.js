import styled from 'styled-components';
 
export const StyledMenu = styled.nav`
left:${({ open }) => open ? '50%' : '0'};
transform: ${({ open }) => open ? 'translateX(-50%)' : 'translateX(-100%)'};
`;