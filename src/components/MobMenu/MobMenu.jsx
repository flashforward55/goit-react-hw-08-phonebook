import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { useState } from 'react';
import {
  MobMenuOpenButton,
  MobMenuWrap,
  MobMenuCloseButton,
  StyledMenuIcon,
  StyledCloseIcon,
} from './MobMenu.styled';
import { MobAuthNav } from 'components/MobMenu/MobAuthNav';
import UserMenu from 'components/UserMenu';

export const MobMenu = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const [show, setShow] = useState(false);

  const handleToggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <MobMenuOpenButton onClick={handleToggleShow}>
        <StyledMenuIcon />
      </MobMenuOpenButton>
      {show && (
        <MobMenuWrap>
          {isLoggedIn ? (
            <UserMenu handleToggleShow={handleToggleShow} />
          ) : (
            <MobAuthNav handleToggleShow={handleToggleShow} />
          )}
          <MobMenuCloseButton onClick={handleToggleShow}>
            <StyledCloseIcon />
          </MobMenuCloseButton>
        </MobMenuWrap>
      )}
    </>
  );
};
