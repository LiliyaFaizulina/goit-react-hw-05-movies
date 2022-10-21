import PropTypes from 'prop-types';
import { MainContainer } from 'utils/GlobalStyle';
import { ActorList, CastItem, Wrapper, Avatar } from './CastList.styled';

export const CastList = ({ info }) => {
  return (
    <MainContainer>
      {info.cast.length > 0 ? (
        <ActorList>
          {info.cast.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <Wrapper>
                <Avatar
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://i.ibb.co/bPtNcLX/NoImage.png'
                  }
                  alt={name}
                />
              </Wrapper>
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </CastItem>
          ))}
        </ActorList>
      ) : (
        <p>We have no more details</p>
      )}
    </MainContainer>
  );
};

CastList.propTypes = {
  info: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
        character: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
