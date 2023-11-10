import './global.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Pravidla } from './pages/Pravidla';
import { Kontakty } from './pages/Kontakty';
import { Domu } from './pages/Domu';
import { ErrorPage } from './pages/ErrorPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hra } from './pages/Hra';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Domu /> },
      {
        path: '/pravidla',
        element: <Pravidla />,
      },
      {
        path: '/hra',
        element: <Hra />,
      },
      {
        path: '/kontakty',
        element: <Kontakty />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
