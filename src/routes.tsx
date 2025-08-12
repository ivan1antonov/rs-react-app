import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Details from './pages/Details';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
        children: [
          {
            path: 'detail/:id',
            element: <Details />,
          },
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
