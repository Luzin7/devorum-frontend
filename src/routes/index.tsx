import { type ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from '../helpers/privateRoutes';
import ErrorPage from '../components/ErrorPage';
import Home from '../pages/Home';
import { Layout } from '../components/Layout/Layout';
import {
  ABOUT_PROJECT,
  ABOUT_US,
  CREATE_QUESTION,
  HOME,
  LOGIN,
  QUESTION,
  REGISTER,
  USER_PROFILE,
} from '../utils/routePaths';
import Question from '../components/Question';
import AboutUs from '../pages/AboutUs';
import AboutProject from '../pages/AboutProject';
import Form from '../components/formQuestion';
import Register from '../pages/Register';
import { Profile } from '../pages/Profile';

// const Root = lazy(async () => await import('../pages/Root'));
// const Login = lazy(async () => await import('../pages/Login'));
// const Register = lazy(async () => await import('../pages/Register'));
// const Home = lazy(async () => await import('../pages/Home'));
// const Movies = lazy(async () => await import('../pages/Movies'));
// const Movie = lazy(async () => await import('../pages/Movie'));
// const SearchPage = lazy(async () => await import('../pages/Search'));
// const Recommendation = lazy(
//   async () => await import('../pages/Recommendation'),
// );

function Index(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Carregando...</p>}>
        <Routes>
          <Route element={<Layout />}>
            {/* private routes */}
            <Route element={<PrivateRoutes />}>
              <Route
                path={CREATE_QUESTION}
                element={
                  <Suspense fallback={<p>Carregando...</p>}>
                    <Form />
                  </Suspense>
                }
              />
              <Route
                path={USER_PROFILE}
                element={
                  <Suspense fallback={<p>Carregando...</p>}>
                    <Profile />
                  </Suspense>
                }
              />
            </Route>
            {/* public routes */}
            <Route
              path={HOME}
              element={
                <Suspense fallback={<p>Carregando...</p>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path={ABOUT_US}
              element={
                <Suspense fallback={<p>Carregando...</p>}>
                  <AboutUs />
                </Suspense>
              }
            />
            <Route
              path={ABOUT_PROJECT}
              element={
                <Suspense fallback={<p>Carregando...</p>}>
                  <AboutProject />
                </Suspense>
              }
            />
            <Route path={QUESTION}>
              <Route
                path={':questionId'}
                element={
                  <Suspense fallback={<p>Carregando...</p>}>
                    <Question />
                  </Suspense>
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
          <Route path={REGISTER} element={<Register />} />
          <Route path={LOGIN} element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Index;
