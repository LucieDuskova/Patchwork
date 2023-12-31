import './global.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { RulePage } from './pages/RulePage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { Header } from './components/Header';
import { GamePage } from './pages/GamePage';

const App = ({ dispatch }) => {
  return (
    <div className="container">
      <Header dispatch={dispatch} />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      {
        path: '/pravidla',
        element: <RulePage />,
      },
      {
        path: '/hra',
        element: <GamePage />,
      },
      {
        path: '/kontakty',
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
