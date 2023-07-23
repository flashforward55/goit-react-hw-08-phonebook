import PropTypes from 'prop-types';
import { Bars } from 'react-loader-spinner';
import { LoaderWrapper } from './Loading.styled';

const Loading = ({ ariaLabel, color, height, width }) => (
  <LoaderWrapper>
    <Bars ariaLabel={ariaLabel} color={color} height={height} width={width} />
  </LoaderWrapper>
);

Loading.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

Loading.defaultProps = {
  ariaLabel: 'bars-loading',
  color: '#3f51b5',
  height: '40',
  width: '40',
};

export default Loading;
