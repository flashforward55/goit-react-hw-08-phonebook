import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Loading } from './Loading';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Suspense>
    </>
  );
};

const MainContainer = styled.main`
  margin: 0 auto;
  margin-bottom: 5px;
  max-width: 1280px;
  height: 100%;
`;
