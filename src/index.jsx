// ==== Librairie ==== //
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// =================== //
import './styles/GlobalStyle.css'

// ====== Pages ====== //
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Logement from './pages/Logement'
// =================== //

// ==== Composant ==== //
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
// =================== //

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

//import reportWebVitals from './reportWebVitals'
//reportWebVitals(console.log)
