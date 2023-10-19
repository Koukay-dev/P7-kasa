// ==== Librairie ==== //
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
// =================== //
import './styles/GlobalStyle.css'

// ====== Pages ====== //
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Logement, { logementLoader } from './pages/Logement'
// =================== //

// ==== Composant ==== //
import RootLayout from './layout/RootLayout'
import Error from './components/Error'
// =================== //

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Accueil />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route
        path="/logement/:id"
        loader={logementLoader}
        errorElement={<Error />}
        element={<Logement />}
      />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
