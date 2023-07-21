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
  color: #fff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    text-shadow: 0px 5px 10px bisque;
  }
`;

export const ButtonForDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #082911;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #decea9;
  background-color: #082911;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.15);
    color: #082911;
    background-color: #decea9;
  }
  padding: 4px;
  margin-left: 8px;
`;
