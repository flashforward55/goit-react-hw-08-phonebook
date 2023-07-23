import PropTypes from 'prop-types';
import { LinkContainer, NavToLink } from './NavigateLink.styled';

const NavigateLink = ({ way, text }) => {
  const word = way.slice(1);

  return (
    <LinkContainer>
      {text} <NavToLink to={way}>{word}</NavToLink>?
    </LinkContainer>
  );
};

NavigateLink.propTypes = {
  way: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavigateLink;
