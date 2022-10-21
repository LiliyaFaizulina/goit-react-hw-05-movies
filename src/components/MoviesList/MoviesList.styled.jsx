import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const GalleryItem = styled.li`
  padding-bottom: 10px;
  width: calc((100% - 120px) / 5);
  box-shadow: ${p => p.theme.shadow};
  background-color: ${p => p.theme.colors.lightBlue};
`;

export const MovieTitle = styled.h3`
  font-size: 18px;
  color: ${p => p.theme.colors.darkBlue};
  text-align: center;
  margin-top: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  transition: transform ${p => p.theme.animation};
  :hover {
    transform: scale(1.05);
  }
`;
