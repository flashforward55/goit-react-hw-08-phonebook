import styled from 'styled-components';
import { Navigation } from "./Navigation";
import { AuthNav } from "./AuthNav/AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/selector";
import { MobMenu } from "./MobMenu/MobMenu";

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <StyledHeader>
      <Navigation />
      <MobMenu />
      <UserAuthWrap>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </UserAuthWrap>
    </StyledHeader >
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1280px;
  margin-bottom: 5px;
  padding: 16px;
  background-color: #082911;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const UserAuthWrap = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-top: 4px;
  }
`;
