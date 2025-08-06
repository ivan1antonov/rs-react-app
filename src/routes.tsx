import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Details from './pages/Details';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Layout } from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <Layout />
      </Provider>
    ),
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
