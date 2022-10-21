import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieCard,
  ImageWrapper,
  Btn,
  StyledLink,
  LinkList,
} from './Movie.styled';
import { MainContainer } from 'utils/GlobalStyle';

export const Movie = ({ movie }) => {
  const { title, release_date, overview, poster_path, vote_average, genres } =
    movie;
  const location = useLocation();
  const navigation = useNavigate();
  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  return (
    <MainContainer>
      <Btn type="button" onClick={onBtnClick}>
        Go back
      </Btn>
      <MovieCard>
        <ImageWrapper>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </ImageWrapper>
        <div>
          <h2>
            {title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User score: {Math.round(vote_average * 10)} %</p>
          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      </MovieCard>
      <h3>Additional information</h3>
      <LinkList>
        <li>
          <StyledLink to="cast" state={location.state}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={location.state}>
            Reviews
          </StyledLink>
        </li>
      </LinkList>
    </MainContainer>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};
