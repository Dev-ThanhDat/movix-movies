import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'swiper/css/navigation';
import 'swiper/scss';
import App from './App.jsx';
import { store } from './app/store.js';
import './index.scss';
import Details from './pages/Details/index.jsx';
import Explore from './pages/Explore/index.jsx';
import Home from './pages/Home/index.jsx';
import NotFound from './pages/NotFound/index.jsx';
import ResultSearch from './pages/ResultSearch/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:mediaType/:id',
        element: <Details />
      },
      {
        path: '/search/:query',
        element: <ResultSearch />
      },
      {
        path: '/Explore/:mediaType',
        element: <Explore />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
