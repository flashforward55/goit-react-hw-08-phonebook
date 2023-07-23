import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ContactListStyle = styled.ul`
  margin-top: 16px;
`;
