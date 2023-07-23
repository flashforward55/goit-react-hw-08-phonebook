import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Loading from 'components/Loading';
import { MainContainer } from './Layout.styled';

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

export default Layout;
