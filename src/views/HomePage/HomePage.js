import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import * as apiService from '../../services/apiService';
import slugify from 'slugify';
import { Pagination } from '@material-ui/lab';
import useStyles from '../../services/stylesPagination';
import Status from '../../services/status';
import LoaderComponent from '../../components/LoaderComponent';
import ErrorView from '../../components/ErrorView';
import noImageFound from '../../img/no-image.jpg';
import s from './HomePage.module.css';

const makeSlug = string => slugify(string, { lower: true });

function HomePage() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    setStatus(Status.PENDING);
    apiService
      .getTrending(page)
      .then(({ results, total_pages }) => {
        setMovies(results);
        setTotalPage(total_pages);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, [page]);

  const onHandlePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  return (
    <main className={s.main}>
      <h1 className={s.title}>Trending today</h1>

      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorView message={error.message} />}

      {status === Status.RESOLVED && (
        <>
          <ul className={s.moviesList}>
            {movies.map(movie => (
              <li key={movie.id} className={s.moviesItem}>
                <Link
                  to={{
                    pathname: `movies/${makeSlug(
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

export default HomePage;
