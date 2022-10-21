import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMoviesByQuery } from 'fetchAPI/fetchAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('searchQuery') ?? '';

  const onFormSubmit = event => {
    event.preventDefault();
    setSearchParams({ searchQuery });
  };

  const onInput = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const getMovies = async query => {
      const movies = await fetchMoviesByQuery(query);
      setMovies(movies);
    };

    if (query) {
      setIsLoading(true);
      try {
        getMovies(query);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [query]);

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={onInput}
        />
        <button>Search</button>
      </form>
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {error && <p>Oops!</p>}
    </>
  );
};

export default MoviesPage;
