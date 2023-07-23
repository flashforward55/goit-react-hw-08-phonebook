import PropTypes from 'prop-types';
import { MobAuthList, MobAuthListItem, MobAuthTitle, StyledAppRegistrationIcon, StyledLoginIcon } from './MobMenu.styled';

export const MobAuthNav = ({ handleToggleShow }) => {
  return (
    <MobAuthList>
      <MobAuthListItem>
        <MobAuthTitle to="/register" onClick={handleToggleShow}>
          Register
          <StyledAppRegistrationIcon />
        </MobAuthTitle>
      </MobAuthListItem>
      <MobAuthListItem>
        <MobAuthTitle to="/login" onClick={handleToggleShow}>
          Log In
          <StyledLoginIcon />
        </MobAuthTitle>
      </MobAuthListItem>
    </MobAuthList>
  );
};

MobAuthNav.propTypes = {
  handleToggleShow: PropTypes.func.isRequired,
};
