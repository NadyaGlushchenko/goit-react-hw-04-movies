import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import * as apiService from '../../services/apiService';
import slugify from 'slugify';
import { Pagination } from '@material-ui/lab';
import useStyles from '../../services/stylesPagination';
import Status from '../../services/status';
import LoaderComponent from '../../components/LoaderComponent';
import ErrorView from '../../components/ErrorView';
import SearchBar from '../../components/SearchBar';
import noImageFound from '../../img/no-image.jpg';
import s from './MoviesPage.module.css';

const makeSlug = string => slugify(string, { lower: true });

function MoviesPage() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch, page);
  }, [location.search, page]);

  useEffect(() => {
    if (!query) return;
    setStatus(Status.PENDING);
    apiService
      .searchMovies(query, page)
      .then(({ results, total_pages }) => {
        if (results.length === 0) {
          setError(`No results were found for ${query}!`);
          setStatus(Status.REJECTED);
          return;
        }

        setMovies(results);
        setTotalPage(total_pages);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
        setStatus(Status.REJECTED);
      });
  }, [query, page]);

  const searchImages = newSearch => {
    if (query === newSearch) return;
    setQuery(newSearch);
    setMovies(null);
    setError(null);
    setStatus(Status.IDLE);
    history.push({ ...location, search: `query=${newSearch}&page=1` });
  };

  const onHandlePage = (event, page) => {
    history.push({ ...location, search: `query=${query}&page=${page}` });
  };

  return (
    <main className={s.main}>
      <SearchBar onHandleSubmit={searchImages} />

      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorView message={error} />}

      {status === Status.RESOLVED && (
        <>
          <ul className={s.moviesList}>
            {movies.map(movie => (
              <li key={movie.id} className={s.moviesItem}>
                <Link
                  to={{
                    pathname: `${url}/${makeSlug(
                      `${movie.title} ${movie.id}`,
                    )}`,
                    state: { from: location },
                  }}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : noImageFound
                    }
                    alt={movie.title}
                    className={s.poster}
                  />
                </Link>
                <span className={s.movieTitle}>{movie.title}</span>
              </li>
            ))}
          </ul>
          {totalPage > 1 && (
            <Pagination
              className={classes.root}
              count={totalPage}
              onChange={onHandlePage}
              page={Number(page)}
              showFirstButton
              showLastButton
              size="large"
            />
          )}
        </>
      )}
    </main>
  );
}

export default MoviesPage;
