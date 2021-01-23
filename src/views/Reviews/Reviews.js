import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import * as apiService from '../../services/apiService';
import ShowMore from 'react-simple-show-more';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Pagination } from '@material-ui/lab';
import useStyles from '../../services/stylesPagination';
import Status from '../../services/status';
import LoaderComponent from '../../components/LoaderComponent';
import ErrorView from '../../components/ErrorView';
import s from './Reviews.module.css';

function Reviews() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [reviews, setReviews] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    apiService
      .getMovieReviews(movieId, page)
      .then(({ results, total_pages }) => {
        if (results.length === 0) {
          toast.error("💩 We don't have any reviews for this movie.");
          setStatus(Status.IDLE);
          return;
        }
        setReviews(results);
        setTotalPage(total_pages);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, [movieId, page]);

  const onHandlePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  return (
    <>
      {status === Status.PENDING && <LoaderComponent />}

      {status === Status.REJECTED && <ErrorView message={error} />}

      {status === Status.RESOLVED && (
        <>
          <ul>
            {reviews.map(review => (
              <li key={review.id} className={s.item}>
                <h4 className={s.author}>Author: {review.author}</h4>
                <p className={s.content}>
                  <ShowMore
                    text={review.content}
                    length={700}
                    showMoreLabel=" Show more >>"
                    showLessLabel=" Show less <<"
                    style={{
                      cursor: 'pointer',
                      color: '#fa7584',
                      fontWeight: 'bold',
                    }}
                  />
                </p>
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
    </>
  );
}

export default Reviews;
