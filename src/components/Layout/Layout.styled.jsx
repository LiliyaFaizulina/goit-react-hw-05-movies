import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  padding: 20px;
  color: ${p => p.theme.colors.lightBlue};
  box-shadow: ${p => p.theme.shadow};
  background-color: ${p => p.theme.colors.darkBlue};
`;

export const MainLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: ${p => p.theme.colors.lightBlue};
  font-size: 24px;
  transition: color ${p => p.theme.animation};
  :hover {
    color: ${p => p.theme.colors.violet};
  }
  &.active {
    color: ${p => p.theme.colors.violet};
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;

      width: 100%;
      height: 4px;
      background-color: ${p => p.theme.colors.violet};
      border-radius: 2px;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Container = styled.main`
  padding-top: 90px;
  padding-bottom: 20px;
`;
