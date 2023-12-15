import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom';
import './app.scss';

import Beauty from './pages/Beauty';
import Glamour from './pages/Glamour';
import Fashion from './pages/Fashion';
import Art from './pages/Art';
import Wedding from './pages/Wedding';

import Works from './pages/Works';

import RootLayout from './pages/Root';
// import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  },

  { path: '/works', element: <Works /> },
  { path: '/beauty', element: <Beauty /> },
  { path: '/glamour', element: <Glamour /> },
  { path: '/fashion', element: <Fashion /> },
  { path: '/art', element: <Art /> },
  { path: '/wedding', element: <Wedding /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
