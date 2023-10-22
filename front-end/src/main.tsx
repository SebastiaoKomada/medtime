import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import{ createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"; 
import Home from './routes/Home';
import LogIn from './routes/LogIn';

// import Profile from './routes/Profile/index.tsx';
import ErrorPage from './components/errorPage';
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
    path:"/",
    element:<App />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/logIn",
        element:<LogIn />
      },
      {
      /*redireciona uma pagina que ja nao existe para uma pre definida */
        path: "",
        element: <Navigate to="/perfil" />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
