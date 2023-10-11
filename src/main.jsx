import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx';
import Films from './routes/Films.jsx';
import People from './routes/People.jsx';
import Planets from './routes/Planets.jsx';
import Starships from './routes/Starships.jsx';
import Species from './routes/Species.jsx';
import Vehicles from './routes/Vehicles.jsx';

import App from './App.jsx'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "films",
        element: <Films />,
        errorElement: <ErrorPage />
      },
      {
        path: "people",
        element: <People />,
        errorElement: <ErrorPage />
      },
      {
        path: "planets",
        element: <Planets />,
        errorElement: <ErrorPage />
      },
      {
        path: "starships",
        element: <Starships />,
        errorElement: <ErrorPage />
      },
      {
        path: "species",
        element: <Species />,
        errorElement: <ErrorPage />
      },
      {
        path: "vehicles",
        element: <Vehicles />,
        errorElement: <ErrorPage />
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
