import styled from 'styled-components';

export const Navbar = styled.div`
  border-color: rgba(0, 0, 0, 0.04) !important;
  position: relative;
  display: flex;
  padding: 0 30px;
  border-bottom: 1px solid #e9ecef !important;
  height: 80px;
  align-items: center;
`;

export const Menu = styled.div`
  display: block;
  font-size: 30px;
  color: #32325d;
  @media(min-width: 768px){
    display: none;
  }
`