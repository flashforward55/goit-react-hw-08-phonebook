import React from 'react';
import PropTypes from 'prop-types';
import { Bars } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loading = ({ type, color, height, width }) => (
  <LoaderWrapper>
    <Bars type={type} color={color} height={height} width={width} />
  </LoaderWrapper>
);

Loading.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

Loading.defaultProps = {
  type: 'TailSpin',
  color: '#3f51b5',
  height: '40',
  width: '40',
};

export const LoaderWrapper = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
