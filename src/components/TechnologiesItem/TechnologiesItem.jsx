// Libs
import PropTypes from 'prop-types';
// Styled components
import { TechLink } from './TechnologiesItem.styled';

export const TechnologiesItem = ({ title, link, logo }) => {
  return (
    <li>
      <TechLink href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={title} height="32" />
        {title}
      </TechLink>
    </li>
  );
};

TechnologiesItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
