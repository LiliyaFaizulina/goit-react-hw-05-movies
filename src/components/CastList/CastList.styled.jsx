import styled from 'styled-components';

export const ActorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CastItem = styled.li`
  width: calc((100% - 40px) / 5);
  display: flex;
  align-items: center;

  gap: 5px;
  box-shadow: ${p => p.theme.shadow};
  font-size: 12px;
`;

export const Wrapper = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 100px;
  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
