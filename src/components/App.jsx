import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selector';
import { clearAuthHeader, refreshUser } from 'redux/api/userApi';
import { Toaster } from 'react-hot-toast';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Layout from 'components/Layout';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import Error from 'components/Error';
import img from 'components/images/404-Error-Page.jpg';

const Contacts = lazy(() =>
  import('pages/Contacts/Contacts').then(module => ({
    ...module,
    default: module.Contacts,
  }))
);

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshUser());

    return () => {
      clearAuthHeader();
    };
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route path="*" element={<Error errorImg={img} />} />
          </Route>
        </Routes>
        <Toaster />
      </>
    )
  );
};

export default App;
