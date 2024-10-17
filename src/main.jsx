import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import NossosModelos from './routes/NossosModelos/NossosModelos.jsx'
import Error from './routes/Error/Error.jsx'
import PolPriv from './routes/PolPriv/PolPriv.jsx'
import ShowroomOn from './routes/ShowroomOn/ShowroomOn.jsx'
import GuiaDeCompra from './routes/GuiaDeCompra/GuiaDeCompra.jsx'
import PecasServicos from './routes/PecasServicos/PecasServicos.jsx'
import NossaMarca from './routes/NossaMarca/NossaMarca.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "NossosModelos", element: <NossosModelos /> },
      { path: "privacidade", element: <PolPriv /> },
      { path: "showroomonline", element: <ShowroomOn /> },
      { path: "guiadecompra", element: <GuiaDeCompra /> },
      { path: "pecasservicos", element: <PecasServicos /> },
      { path: "nossamarca", element: <NossaMarca /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
