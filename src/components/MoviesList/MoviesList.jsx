import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Gallery,
  GalleryItem,
  MovieTitle,
  MovieLink,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Gallery>
      {movies.map(({ id, title, url }) => (
        <GalleryItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                url
                  ? `https://image.tmdb.org/t/p/w500/${url}`
                  : 'https://i.ibb.co/bPtNcLX/NoImage.png'
              }
              alt={title}
              width="300"
            />
            <MovieTitle>{title}</MovieTitle>
          </MovieLink>
        </GalleryItem>
      ))}
    </Gallery>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
};
