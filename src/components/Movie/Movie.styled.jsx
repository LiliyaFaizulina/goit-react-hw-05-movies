import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Btn = styled.button`
  color: ${p => p.theme.colors.violet};
  background-color: ${p => p.theme.colors.lightBlue};
  border: none;
  font-size: 16px;
  padding: 5px 15px;
  margin-bottom: 15px;

  transition: color ${p => p.theme.animation},
    background-color ${p => p.theme.animation},
    box-shadow ${p => p.theme.animation};
  &:hover {
    color: ${p => p.theme.colors.lightBlue};
    background-color: ${p => p.theme.colors.violet};
    box-shadow: ${p => p.theme.shadow};
  }
`;

export const MovieCard = styled.div`
  display: flex;

  gap: 20px;
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 450px;
  flex-shrink: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LinkList = styled.ul`
  border-bottom: 1px solid ${p => p.theme.colors.darkBlue};
`;
