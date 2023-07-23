import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1280px;
  margin-bottom: 10px;
  padding: 16px;
  background-color: #3f51b5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const UserAuthWrap = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
