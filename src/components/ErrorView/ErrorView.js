import PropTypes from 'prop-types';
import errorImage from '../../img/error.png';
import s from './ErrorView.module.css';

function ErrorView({ message }) {
  return (
    <div role="alert" className={s.wrapper}>
      <img src={errorImage} width="650" alt="sadcat" className={s.img} />
      <p text={message} className={s.text}>
        {message}
      </p>
    </div>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorView;
