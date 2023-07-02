import './App.css'
import ApiStarWars from './components/apiStarWars'
import Header from './components/header'
import Login from './components/login'
import Register from './components/register'
import Welcome from './pages/welcome'
import { Routes, Route } from "react-router-dom"
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './components/protectedRoute'

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route index path='/' element={<Welcome />} />
          <Route index path='/login' element={<Login />} />
          <Route index path='/register' element={<Register />} />
          <Route path='/apiStarWars' element={
            <ProtectedRoute>
              <ApiStarWars />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
