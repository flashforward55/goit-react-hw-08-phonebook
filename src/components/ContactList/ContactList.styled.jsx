import styled from 'styled-components';

export const ContactListStyle = styled.ul`
  margin-top: 16px;
`;

export const ContactListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

export const ContactNumber = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #082911;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    text-shadow: 0px 0px 10px #decea9;
  }
`;

export const ButtonForDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #3f51b5;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #decea9;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #3f51b5;
    background-color: #decea9;
  }
  padding: 4px;
  margin-left: 8px;
`;
