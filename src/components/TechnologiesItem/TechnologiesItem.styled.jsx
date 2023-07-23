// Libs
import styled from 'styled-components';

export const TechLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //height: 100px;
  color: #082911;
  padding: 16px;
  font-size: 24px;
  font-weight: 500;
  border: 1px solid #dedede;
  border-radius: 12px;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
