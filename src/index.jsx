import './global.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { RulePage } from './pages/RulePage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GamePage } from './pages/GamePage';

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
      { path: '', 
        element: <HomePage /> },
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
