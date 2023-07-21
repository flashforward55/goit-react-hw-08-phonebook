import PropTypes from 'prop-types';
import { MobAuthList, MobAuthListItem, MobAuthTitle } from './MobMenu.styled';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import styled from 'styled-components';

export const MobAuthNav = ({ handleToggleShow }) => {
  return (
    <MobAuthList>
      <MobAuthListItem>
        <MobAuthTitle to="/register" onClick={handleToggleShow}>
          Register<StyledAppRegistrationIcon />
        </MobAuthTitle>
      </MobAuthListItem>
      <MobAuthListItem>
        <MobAuthTitle to="/login" onClick={handleToggleShow}>
          Log In<StyledLoginIcon />
        </MobAuthTitle>
      </MobAuthListItem>
    </MobAuthList>
  );
};

const StyledAppRegistrationIcon = styled(AppRegistrationIcon)`
  margin-left: 5px;
  margin-top: 8px;
`;

const StyledLoginIcon = styled(LoginIcon)`
  margin-left: 5px;
  margin-top: 8px;
`;

MobAuthNav.propTypes = {
  handleToggleShow: PropTypes.func.isRequired,
};
