import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

import { Loading } from './Loading';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <main mx="auto" mb={5} maxWidth="1280px" height="100%">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
