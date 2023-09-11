import './assets/scss/App.scss'
import { Route, Routes } from 'react-router-dom'
// import Navigation from './pages/partials/Navigation'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <div id='App'>
      {/* <Navigation /> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
