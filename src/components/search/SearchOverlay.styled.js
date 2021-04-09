import styled from 'styled-components';

export const StyledSearch = styled.div`
transform: ${({ open }) => open ? 'translate(-50%,0%)' : 'translate(-50%,-300%)'};
`;
 
 