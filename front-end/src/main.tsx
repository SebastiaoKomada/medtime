import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
// import Profile from './routes/Profile/index.tsx';
import ErrorPage from './components/errorPage';
import Home from './routes/Home';
import LogIn from './routes/LogIn';
// import ProfileDetails from './routes/ProfileDetails';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home />
//   },
//   {
//     path:"perfil",
//     element:<Perfil />
//   }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/logIn',
        element: <LogIn />,
      },
      {
        /*redireciona uma pagina que ja nao existe para uma pre definida */
        path: '',
        element: <Navigate to="/perfil" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
