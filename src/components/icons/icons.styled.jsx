import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const iconStyle = {
  position: "absolute",
  top: "35px",
  left: "8px",
  fill: "#082911",
};

export const EmailIconStyle = () => <EmailIcon sx={{ ...iconStyle }} />;

export const KeyIconStyle = () => <KeyIcon sx={{ ...iconStyle }} />;

export const PersonIconStyle = () => <PersonIcon sx={{ ...iconStyle }} />;

export const LocalPhoneIconStyle = () => <LocalPhoneIcon sx={{ ...iconStyle }} />;

export const SearchIconStyle = () => <SearchIcon sx={{ ...iconStyle }} />;

export const VisibilityIconStyle = () => <VisibilityIcon sx={{ fill: "#082911" }} />;

export const VisibilityOffIconStyle = () => <VisibilityOffIcon sx={{ fill: "#082911" }} />;

export const AvatarStyle = ({ letter, color }) => <Avatar sx={{ width: "38px", height: "38px", marginRight: "10px", bgcolor: color, cursor: "pointer" }}>{letter}</Avatar>;

export const LogoutIconStyle = () => <LogoutIcon sx={{ marginLeft: "5px" }} />

export const ButtonForVisibility = styled.button`
    position: absolute;
    top: 33px;
    right: 8px;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
`;
