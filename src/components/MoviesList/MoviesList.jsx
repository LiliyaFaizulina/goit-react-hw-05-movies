import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title, url }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <h2>{title}</h2>
            <img
              src={
                url
                  ? `https://image.tmdb.org/t/p/w500/${url}`
                  : 'https://i.ibb.co/bPtNcLX/NoImage.png'
              }
              alt={title}
              width="300"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
