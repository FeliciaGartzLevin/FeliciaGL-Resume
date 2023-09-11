import './assets/scss/App.scss'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Navigation from './assets/scss/pages/partials/Navigation'
import { Route, Routes } from 'react-router-dom'
import Homepage from './assets/scss/pages/Homepage'
import NotFoundPage from './assets/scss/pages/NotFoundPage'

const App = () => {
  return (
    <div id='App'>
      <Navigation />
      <Container>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
