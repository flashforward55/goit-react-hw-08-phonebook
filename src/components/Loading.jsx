import { FallingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loading = () => {
  return (
    <StyledBox>
      <FallingLines {...FallingLinesStyled} />
    </StyledBox >
  );
};
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const FallingLinesStyled = {
  color: "#082911",
  width: "70",
  visible: true,
  ariaLabel: 'falling-lines-loading',
};
