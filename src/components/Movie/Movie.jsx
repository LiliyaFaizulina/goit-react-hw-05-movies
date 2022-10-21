import { useLocation, useNavigate, Link } from 'react-router-dom';

export const Movie = ({ movie }) => {
  const { title, release_date, overview, poster_path, vote_average, genres } =
    movie;
  const location = useLocation();
  const navigation = useNavigate();
  const onBtnClick = () => {
    navigation(location?.state.from ?? '/');
  };
  return (
    <>
      <button type="button" onClick={onBtnClick}>
        Go back
      </button>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <h2>
        {title} ({new Date(release_date).getFullYear()})
      </h2>
      <p>User score: {Math.round(vote_average * 10)} %</p>
      <p>Genres: {genres.map(({ name }) => name).join(', ')}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};
